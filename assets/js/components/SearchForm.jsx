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
        const current_hash = document.location.hash;
        if (current_hash.indexOf('#') !== -1) {
            let search = current_hash.substring(1);
            if ('rechercher' === search
                || 'extension' === search
                || 'contribuer' === search) {
                return false;
            }
            if ('p/' === search.substr(0, 2)) {
                //$("#domain-or-owner").val("owner");
                search = decodeURIComponent(search.substr(2));
            } else {
                //$("#domain-or-owner").val("domain");
                search = decodeURIComponent(search);
            }
            this.setState({search})
            this.doSearch();
            //$("#submit-possedex").click();
        }
    }

    componentDidMount() {

        // COPY
        fetch(this.props.base_url)
            .then((res) => res.json())
            .then((data) => {
                Possedex.data = data
                this.searchFromHash()
            })
        // end copy

        // Possedex.loadJSON(this.props.base_url, function(data){
            // Possedex.data = data;
        // this.searchFromHash();
        // })
    }

    handleChange(e) {
        this.setState({
                search: e.target.value
            }, () => {
                this.doSearch()
            }
        )
    }

    handleKeyUp(e) {
        if (e) {
            e.preventDefault()
        }
        // this.doSearch()
    }

    doSearch() {
        // console && console.info("======= start search = "+this.state.search)
        if (!this.state.search) {
            return null;
        }

        // var search = this.state.search
        if (this.state.search.length > 0) {

            Possedex.debunkSite(this.state.search, function(current_entity) {
                if (current_entity) {
                    this.setState({
                        //search: this.state.search,
                        entity: current_entity,
                        found : true,
                    })

                    if (document.location.hash !== '#' + current_entity.nom) {
                        document.location.hash = '#'+current_entity.nom;
                        document.title = (
                            current_entity.type === 1 ? 'Que' : 'Qui'
                        ) + ' possède "' + current_entity.nom + '" ? - Possedex';
                    }

                } else {
                    this.setState({
                        //search: this.state.search,
                        entity: false,
                        found : false,
                    })
                }

            }.bind(this));
            // console.log(this.state.search_output);
            // this.setState({search : search})
        } else {
            // alert("Saisissez d'abord une url :) ");
        }
    }

    handleClickSearch(search) {
        this.setState({search}, () => {
            return this.doSearch();
        });
        // todo: setState
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.entity !== this.state.entity
            || nextState.search !== this.state.search

    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    // }

    // componentDidUpdate() {
    //     document.title = 'Qui possède "'+this.state.search+'" ? - Possedex';
    //     document.location.hash = this.state.search;
    //     // this.doSearch();
    // }

    //componentDidMount() {
    //    document.title = 'Qui possède "'+this.state.search+'" ? - Possedex';
    //    document.location.hash = this.state.search;
    //    // this.doSearch();
    //}

    render () {
        // TODO: useEffect
        // this.doSearch();
        const {search, entity, found} = this.state
        //if (search.length > 2) {
        ////    // this.props.history.push('#'+this.state.search);
        //    // document.title = 'Qui possède "'+this.state.search+'" ? - Possedex';
        //    //useEffect(() => {
        //    //})
        //}
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
            <Result Possedex={Possedex} onClickSearch={this.handleClickSearch} id="result" entity={entity} search={search} />
        </div>
    }
}
