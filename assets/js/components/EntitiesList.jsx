import React from "react";

export default class EntitiesList extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickSearch = this.handleClickSearch.bind(this);
    }

    handleClickSearch(e) {
        e.preventDefault();
        const hashPos = e.target.href.indexOf('#')
        const nom = e.target.href.substr(hashPos+1);
        // if ('p/' == nom.substr(0, 2)) {
        //     $("#domain-or-owner").val("owner");
        //     $("#url").val(decodeURIComponent(nom.substr(2)));
        // } else {
        //     $("#domain-or-owner").val("domain");
        //     $("#url").val(decodeURIComponent(nom));
        // }
        this.props.onClickSearch(decodeURIComponent(nom))
        //$("#form-possedex").submit();
    }

    render() {

        const {list, label, detailClass} = this.props;
        if (list.length === 0) {
            return null;
        }
        return <div>
            <label>{label}</label>
            <p>
                {list.map((el, i) => {
                        return (<span key={i}>
                    <a key={i} className="detail-owner"
                       href={document.location.protocol + '//' + document.location.hostname + '#' + el.nom}
                       onClick={this.handleClickSearch}
                       >
                        {el.nom} ({el.valeur + (parseInt(el.valeur) ? '%' : '')})
                    </a>{i < list.length - 1 ? ", " : null}
                    </span>
                        )
                    }
                )}
            </p>
        </div>
    }
}
