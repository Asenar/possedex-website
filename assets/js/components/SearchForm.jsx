import React from "react";

import Result from "./Result";
import { Possedex } from "../Possedex";

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search : "",
            result: "zzz"
        }
        this.handleChange = this.handleChange.bind(this)
        this.doSearch = this.doSearch.bind(this)
        this.data = {}
    }

    componentDidMount() {
        fetch(this.props.base_url)
            .then((res) => res.json())
            .then((data) => {
                this.data = data
                // console.log('data:', data)
            })
    }

    handleChange(e) {
        // console.log(e);
        this.setState({
            search: e.target.value
        })
    }

    doSearch(e) {
        //console && console.log(e);
        // console && console.log('prevent default');
        e.preventDefault();

        var search = this.state.search
        if (search.length > 0) {
            Possedex.data = this.data;
            document.title = 'Qui possède "'+search+'" ? - Possedex';
            document.location.hash = search;
            this.setState({
                entity : Possedex.debunkSite(search),
                search_output : "recherche de " + search
            });
            // console.info('LE RESULTAT DANS THIS.STATE.RESULT');
            // console.log(this.state.result);
            // console.log(this.state.search_output);
        } else {
            // alert("Saisissez d'abord une url :) ");
        }
    }

    render () {
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
                           onKeyUp={this.doSearch}
                    />
                    <span className="input-group-addon">
                        <button id="submit-possedex" className="btn btn-light" type="button" onSubmit={this.doSearch}>
                            <span className="d-block d-sm-none">&rarr;</span>
                            <span className="d-none d-sm-block">Chercher</span>
                        </button>
                    </span>
                </span>
            </form>
            <Result id="result" entity={this.state.entity} search_output={this.state.search_output} >Pouet</Result>
        </div>
    }
}
