import React from "react";
import EntitiesList from "./EntitiesList";
import AuBout from "./AuBout";

function Sites({urls}) {
    if (!urls.length) {
        return null;
    }
    return <div>
        {urls ?
            <div>
                <label>Sites</label>
                <p>
                    {urls.map((url, url_id) =>
                        <a key={url_id} target="_blank" href={document.location.protocol + '//' + urls[url_id]}>
                            {url}
                        </a>
                    )}
                </p>
            </div>
            : null
        }
    </div>
}

function PossedexInfo({possedex}) {
    console.info("possedex")
    console.log(possedex)
    return <>
        {/* TODO: reformater la sortie de la classe*/}

        {possedex.influences && possedex.influences.length ? <>
                <label>Intérêts</label>
                <p>{possedex.influences}</p>
            </>
            : null
        }
        {possedex.marques && possedex.marques.length ? <>
            <label>Marques</label>
            <p>{possedex.marques}</p>
            </>
            :null
        }
        {possedex.subventions && possedex.subventions.length ? <>
                <label>Subventions publiques</label>
                <p>{possedex.subventions}</p>
            </>
            : null
        }
    </>
}

//function PossessionsList({list, label, detailClass}) {
//    return <div>
//        <label>{label}</label>
//        <p>
//            {list.map((el, i) =>
//                <a key={i} className={"detail" + detailClass} href={"#" + el.nom}>
//                    {el.nom} ({el.valeur + (parseInt(el.valeur) ? '%' : '')})
//                </a>
//            )}
//        </p>
//    </div>
//}

export default class Result extends React.Component {
    constructor(props) {
        super(props);

        this.domain = document.location.href
        // console.info("props");
        // console.log(this.props);
        this.handleClickSearch = this.handleClickSearch.bind(this)
    }

    handleClickSearch(search) {
        this.props.onClickSearch(search)

    }


    render() {
        console.info("render result");
        const {entity} = this.props;
        if (!entity) {
            return <div id="result" style={{clear:"both"}} />
        }
        // console.log(entity);
        // console.info("props dans le else de render");
        return <div id="result" style={{clear:"both"}}>
            {/*{console.log("coucou")}*/}
            {/*{console.log(entity)}*/}
            <div id="infos">
                <label>{entity.typeLibelle}</label>

                <p>
                    <a className="detail-media"
                       href={document.location.protocol + '//' + document.location.hostname + "#" + entity.nom} >
                        {entity.nom}
                    </a>
                </p>
                {entity.hasOwnProperty('urls')
                    ? <Sites urls={entity.urls}  />
                    : null
                }

                {entity.hasOwnProperty('est_possede')
                    ? <EntitiesList onClickSearch={this.handleClickSearch} label="Propriétaires" detailClass="owner" list={entity.est_possede}/>
                    : null
                }

                {entity.hasOwnProperty('possessions')
                    ? <EntitiesList onClickSearch={this.handleClickSearch} label="Possède ou contrôle" detailClass="owner" list={entity.possessions}/>
                    : null
                }

                {entity.possedex
                    ? <PossedexInfo possedex={entity.possedex} onClickSearch={this.handleClickSearch} />
                    : <div>Info possédex manquante</div>
                }

                <AuBout entity={entity} Possedex={this.props.Possedex} onClickSearch={this.handleClickSearch}  />

            </div>
        </div>

    }
}
