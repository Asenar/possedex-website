import React, {useEffect} from "react";
import Result from "./Result";
import ErrorBoundary from "./ErrorBoundary";
import { Possedex } from "../Possedex";


export default class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search : "",
            entity: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClickSearch = this.handleClickSearch.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.doSearch = this.doSearch.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)

        // this.possedex = props.Possedex;
    }

    searchFromHash() {
        // check if this is a direct request
        const current_location = document.location.href; // full url;
        const pos = current_location.indexOf('#');
        if (pos > -1) {
            let search = current_location.substring(pos+1);
            if ('p/' === search.substr(0, 2)) {
                //$("#domain-or-owner").val("owner");
                search = decodeURIComponent(search.substr(2));
            } else {
                //$("#domain-or-owner").val("domain");
                search = decodeURIComponent(search);
            }
            this.setState({search})
            // this.doSearch(search);
            //$("#submit-possedex").click();
        }
    }

    componentDidMount() {
        console.log("component SearchForm did mount - loading db")
        
        // COPY
        fetch(this.props.base_url)
            .then((res) => res.json())
            .then((data) => {
                Possedex.data = data
                console.log('data:', data)
                this.searchFromHash()
            })
        // end copy

        // Possedex.loadJSON(this.props.base_url, function(data){
            // Possedex.data = data;
        // this.searchFromHash();
        // })
    }

    handleChange(e) {
        // console.log(e);
        this.setState({
            search: e.target.value
        })
        this.doSearch();
    }

    handleKeyUp(e) {
        if (e) {
            e.preventDefault()
        }
        // this.doSearch()
    }

    doSearch() {
        //console && console.log(e);
        // console && console.log('prevent default');
        if (!this.state.search) {
            return null;
        }

        // var search = this.state.search
        if (this.state.search.length > 0) {
            console.log("TODO: useEffect ? " + this.state.search);
            // TODO: useEffect
            //this.setState({
            //    search_output : "recherche de " + search,
            //});
            Possedex.debunkSite(this.state.search, function(current_entity) {
                console && console.log("current entity in output of debunkSite, ", current_entity);
                if (current_entity) {
                    this.setState({
                        //search: this.state.search,
                        entity: current_entity,
                        found : true,
                    })
                } else {
                    //this.setState({
                    //    search: this.state.search,
                    //    entity: false,
                    //    found : false,
                    //})
                }

            }.bind(this));
            // console.log(this.state.search_output);
            // this.setState({search : search})
        } else {
            // alert("Saisissez d'abord une url :) ");
        }
    }

    handleClickSearch(search) {
        // todo: setState
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.search !== this.state.search) {
            return true;
        }
        return false;

    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    // }

    // componentDidUpdate() {
    //     document.title = 'Qui possède "'+this.state.search+'" ? - Possedex';
    //     document.location.hash = this.state.search;
    //     // this.doSearch();
    // }

    render () {
        // this.doSearch();
        // useEffect(() => {
        //     document.title = 'Qui possède "'+this.state.search+'" ? - Possedex';
        //     // document.location.hash = this.state.search;
        // })
        console.info("render searchform")
        console.log(Possedex.data)
        const {search, entity, found} = this.state
        console.log(entity)
        return <div className="align-middle">
            <h1 className="">
                <span id="site-title" className="">Possédex</span>
                <p>Cherchez un média pour trouver son propriétaire, ou un milliardaire pour trouver ses médias.</p>
            </h1>
            <form id="form-possedex" method="GET" className="form-horizontal">
                <span className="input-group">
                    <input type="text" name="search" id="search"
                           className="form-control"
                           placeholder="Exemples : Le Monde, humanite.fr, Bolloré"
                           value={search}
                           /*defaultValue={this.state.search}*/
                           onChange={this.handleChange}
                           /*onKeyUp={this.handleKeyUp}*/
                    />
                </span>
            </form>
            {entity ?
                <Result Possedex={Possedex} onClickSearch={this.handleClickSearch} id="result" entity={entity} />
                : null
            }
        </div>
    }
}
