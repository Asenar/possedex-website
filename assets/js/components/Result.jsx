import React from "react";

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entity: this.props.entity ? this.props.entity : {nom:"rien"},
            search: this.props.search ? this.props.search : "vide"
        };

        this.domain = document.location.href
        // console.info("props");
        // console.log(this.props);
    }


    render() {
        console.info("props dans render");
        console.log(this.props);
        if (!this.props.hasOwnProperty("entity")) {
            return <div id="infos">
                Aucun résultat pour {this.props.search_output}
            </div>
        } else {
            // console.info("props dans le else de render");
            const entity = this.props.entity;
            if (!entity) {
                return <div id="infos">
                    Rien
                </div>
            }
            return <div id="result">
                <div id="infos">
                    <label>{entity.typeLibelle}</label>

                    <p>
                        <a className="detail-media"
                           href={"https://" + this.domain +"#" + entity.typeLibelle}>
                            {entity.nom}
                        </a>
                    </p>
                    <div>
                        {entity.urls ?
                            <div>
                                <label>Sites</label>
                                <p>
                                    {entity.urls.map((url, url_id) =>
                                        <a key={url_id} target="_blank" href={"https://" + entity.urls[url_id]}>
                                            {url}
                                        </a>
                                    )}
                                </p>
                            </div>
                            : null
                        }
                    </div>
                    <div>
                        {entity.hasOwnProperty('est_possede') ?
                            <div>
                                <label>Propriétaires</label>
                                <p>
                                    {entity.est_possede.map((el, i) =>
                                        <a key={i} className="detail-owner" href={"#" + el.nom}>
                                            {el.nom} ({el.valeur + (parseInt(el.valeur) ? '%' : '')})
                                        </a>
                                    )}
                                </p>
                            </div>
                            : null
                        }
                    </div>

                    <div>
                        {entity.hasOwnProperty('possessions') ?
                            <div>
                                <label>Possède ou contrôle</label>
                                <p>{
                                    entity.possessions.map((el, i) =>
                                        <a key={i} className="detail-owner" href={"#" + el.nom}>
                                            {el.nom} ({el.valeur + (parseInt(el.valeur) ? '%' : '')})
                                        </a>
                                    )
                                }</p>
                            </div>
                            : null
                        }
                    </div>

                    <div>
                        {entity.possedex ?
                            <div>
                                {/* TODO: reformater la sortie de la classe*/}
                                <label>Intérêts</label>
                                <p>{entity.possedex.influences}</p>
                                <label>Marques</label>
                                <p>{entity.possedex.marques}</p>
                                <label>Subventions publiques</label>
                                <p>{entity.possedex.subventions}</p>
                            </div>
                            : "<div>Info possédex manquante</div>"
                        }
                    </div>

                </div>
            </div>
        }

    }
}
