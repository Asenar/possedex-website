import React from 'react'

function FinalOwner({proprios, onClickSearch}) {

    if (!proprios.length) {
        return null;
    }

    return <div key="finalOwner">
        <label>Propriétaire final</label>
        <div>
            {proprios.map((el, i) => {
                return (<div key={i}>
                    <a onClick={onClickSearch} className="detail-owner"
                       href={document.location.protocol + "//"+document.location.hostname+'#'+el.nom}>
                        {el.nom}
                    </a>
                    <p><small className="text-muted">
                        Secteur d'activité: {el.possedex.activite}
                    </small></p>
                </div>)
            })}
        </div>
    </div>
}
function  Influences({medias, onClickSearch}) {
    if (medias.length === 0) {
        return null;
    }

    return <div key="influences" className="influences">
        <label>{"A de l'influence dans ce"
        + (medias.length === 1 ? "" : "s")
        + " média"
        + (medias.length === 1 ? "" : "s")
        }</label>

        <p>
            {medias.map((el, i) => {
                return (<span key={i}>
                <a
                    onClick={onClickSearch}
                    className="detail-owner" href={document.location.protocol + '//'+document.location.hostname+'#'+el.nom}>
                        {el.nom}</a>{i < medias.length-1 ? ", " : null }
                </span>
                )
            })}
        </p>
    </div>
}

function Interets({activite}) {
    return <div>
        <label style={{color:'red'}}>Et a comme potentiels conflits d'intérêts…</label>
        <p>{activite ? activite : <small>base de données à compléter</small>}</p>
    </div>
}

export default class AuBout extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickSearch = this.handleClickSearch.bind(this)
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
        const {entity, Possedex} = this.props;
        const medias = [];
        Possedex.getAllChildrenForEntity(entity, medias);

        const proprios = [];
        Possedex.getAllParentsForEntity(entity, proprios);

        const influences = [];


        return <div className="aubout">
            <FinalOwner proprios={proprios} onClickSearch={this.handleClickSearch}
            />
            <Influences medias={medias} onClickSearch={this.handleClickSearch}/>
            {parseInt(entity.type) === 1
                ? <Interets activite={entity.possedex.activite}/>
                : null
            }
        </div>

        // @TODO neto
        //$("#result").append(sources);
        //$("#result").append("<label>Dernière mise à jour</label><p>"
        //    + new Date(data.proprietaires[nom].updated).toLocaleString()
        //    +"</p>");

    }
}
