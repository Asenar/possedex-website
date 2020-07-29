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

        Possedex.sendToOutput = function(entity) {
            console.warn("send to output", entity)
            if (entity) {
                this.setState({
                    entity: entity,
                    found : true,
                })
            } else {
                this.setState({
                    entity: false,
                    found : false,
                })
            }
        }.bind(this)
    }

    loadFromHash() {
        // check if this is a direct request
        const current_location = document.location.href; // full url;
        const pos = current_location.indexOf('#');
        if (pos > -1) {
            let search = current_location.substring(pos+1);
            if ('p/' == search.substr(0, 2)) {
                //$("#domain-or-owner").val("owner");
                search = decodeURIComponent(search.substr(2));
            } else {
                //$("#domain-or-owner").val("domain");
                search = decodeURIComponent(search);
            }
            this.doSearch(search);
            //$("#submit-possedex").click();
        }
    }

    componentDidMount() {
        console.log("component SearchForm did mount - loading db")
        fetch(this.props.base_url)
            .then((res) => res.json())
            .then((data) => {
                Possedex.data = data
                // console.log('data:', data)
                this.loadFromHash()
            })
    }

    handleChange(e) {
        // console.log(e);
        this.setState({
            search: e.target.value
        })
    }

    handleKeyUp(e) {
        if (e) {
            e.preventDefault()
        }
        this.doSearch()
    }

    doSearch(search) {
        //console && console.log(e);
        // console && console.log('prevent default');

        // var search = this.state.search
        if (search.length > 0) {
            console.log("TODO: useEffect ? " + search);
            // TODO: useEffect
            //this.setState({
            //    search_output : "recherche de " + search,
            //});
            Possedex.debunkSite(search)
            // console.log(this.state.search_output);
            this.setState({search : search})
        } else {
            // alert("Saisissez d'abord une url :) ");
        }
    }

    handleClickSearch(search) {
        this.doSearch(search);
    }

    //shouldComponentUpdate(nextProps, nextState, nextContext) {
    //    if (nextState.search !== this.state.search) {
    //        return true;
    //    }

    //}

    // componentWillUpdate(nextProps, nextState, nextContext) {
    // }

    componentDidUpdate() {
        document.title = 'Qui possède "'+this.state.search+'" ? - Possedex';
        document.location.hash = this.state.search;
    }

    render () {
        // useEffect(() => {
        //     document.title = 'Qui possède "'+this.state.search+'" ? - Possedex';
        //     // document.location.hash = this.state.search;
        // })
        console.info("render searchform")
        const {entity, found} = this.state
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
                           value={this.state.search}
                           /*defaultValue={this.state.search}*/
                           onChange={this.handleChange}
                           onKeyUp={this.handleKeyUp}
                    />
                    <span className="input-group-addon">
                        <button id="submit-possedex" className="btn btn-light" type="button" onSubmit={this.doSearch}>
                            <span className="d-block d-sm-none">&rarr;</span>
                            <span className="d-none d-sm-block">Chercher</span>
                        </button>
                    </span>
                </span>
            </form>
            {entity ?
                <Result Possedex={Possedex} onClickSearch={this.handleClickSearch} id="result" entity={entity} />
                : null
            }
        </div>
    }
}
