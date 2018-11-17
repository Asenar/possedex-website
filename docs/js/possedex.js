/*          POSSEDEX
            VERSION 1 / MARS 2017
            VERSION 2 / JANVIER 2018
            VERSION 3 / AOUT 2018
            REMERCIEMENT A L'EQUIPE LES DECODEURS DU MONDE
            INFINIMENT MERCI AU MONDE DIPLOMATIQUE QUI A PUBLIÉ SA BASE
                             .y.
                            -dMm.
                           .mMMMd.
                          .dMMMMMd.     .:+oyyso-
                         `hMMMMMMMd` -odNMMMMMMMNy`             `..
                         sMMMm:dMMMddNMMMMmyoomMMMh    `.-/+oydmmN:
                        :NMMN/ .mMMMMMNd+-`   -NMMMyydmNNNMMMMMMMd.
                        hMMMy   -mMMMN:        sMMMMMMMMNNmhhNMMMo
                       -mMMM-    -mMMMy`       -NMMMy+/-.`` /NMMN.
                       /NMMM`     -mMMMy`      `hMMM+       sMMMh
                       -mMMMo`     :mMMMs`      sMMMd      .NMMN/
                        +NMMNy`     :NMMNs      /MMMm`     +MMMd.
                         :dMMMd:     :NMMMo`    `NMMN-    `dMMMo
                          .yMMMN+     :NMMNo     NMMN/    /NMMM.
                           `oNMMNy.    /NMMN+    dMMMo    yMMMh
                             :mMMMd-    /NMMN+   yMMMs   `NMMN/
                         `-://ohhhhy+////ymNMN/.-shhds:--+mmmd.
                       `/osoo+++++++++++oosshdsssoooooooooosss+/-`
                      `+so/:::::::::::::::/osss+:::::::::::://+os+-`
                      -ss/:----------------/ss+:--------------::+ss+-.```
                      .ss+:::::::--::::::::+sso::---------------::+osoooo-
                      `+sso+++///::::///+++oosso+//:::::::--------:::/+ss-
                     `/ss+/::::::::::::::::::+ssssoooooo+:------------/ss-
                     .os+:-------------------:oso-....os+-------------/ss-
                     `+so::----------:::::://+ss+`    +so:------------/ss-
                      .+so+////////:::::////+++os+.   -ss/------------/ss-
                       `-oso//:::::------------:os+   `/so/:----------/ss-
                        `oso:-----------------::oso    `+so/:---------/ss-
                         :ss+:::::::::::::::://+oss/.  ``/so+:--------/ss-
                          -+osoooooo++///::::::::/+so- -.`:oso/::-----/ss-
                            .-:::oso:-------------:os+` o+ `:oso+/::::/ss-
                                 /so/:------------:os+` /Ms. `-+ysssoooss-
                                 `+so+/:::::::::/+oso.  +MMd-  .hNmmh----`
                                  `:+oooossssooooo+:`   yMMMy`  -MMMN/
                                     `..:dmmm/...`      :NMMM:   sMMMm`
                                        :MMMm.           yMMMh   .dMMMs
                                        yMMMy       ``.:+yMMMN:   :NMMN:
                                       `mMMM/  ``-+shmMMMMMMNNy    sMMMm`
                                       /NMMN-:ohmMMMMNNmdyo+/--    .mMMMo
                                       sMMMMmMMMMNmyo/.`   `.:/+ossodMMMN:
                                      .mMMMMMNmy+.`    `-+ymNMMMMMMMMMMMMd`
                                      :MMMMNs:`  ``./oymNMMMMNdhyssyhmMMMMo
                                      yMMMNyoooyhdNNMMMMNMMMMo`      `dMMMd`
                                      -dNMMMMMMMMMNNNdy+:oMMMN:    `:hMMMN:
                                       `:+syyyyso/:.`     yMMMm` `/dMMMMd:
                                                          .dMMMhomMMMNh/
                                                           -NMMMMMMNy-
                                                            +NMMMms.
                                                             sMmo`
                                                             `/`

*/

// var browser = browser || chrome;

// var checkSite_in_progress = false;

var _debug = 0; // 0=quiet, 1=verbose, 2=more verbose, 3= very very verbose, 4=even more. 5 very very verbose
if (_debug) {
    console && console.info("DEBUG LEVEL", _debug);
}

var DOMAIN     = document.location.hostname;
var maj        = '201809011846';

/***** constants and variables *****/

var messages = {
 inconnu     : "non classé",
 capital     : "Ce média dépend d'intérêts industriels, financiers, ou de groupe de presse.",
 etat        : "Ce média dépend d'un ou plusieurs états",
 independant : "Ce média est indépendant vis à vis d'intérêts industriels, financiers, groupe de presse ou étatique.",
 rien        : "rien"
};
var icones = {
inconnu     : 'data:image/png;base64,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',
capital     : 'data:image/png;base64,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',
etat        : 'data:image/png;base64,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',
independant : 'data:image/png;base64,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',
rien        : 'data:image/png;base64,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',
};

var bandeau_msgs = {
    inconnu     : "Inconnu",
    capital     : "Liens capitalistiques",
    etat        : "Liens étatiques",
    independant : "Indépendant financièrement",
    rien        : "rien"
};

var owner_msgs = {
    inconnu     : "Ce site n'est pas référencé dans notre base de données.",
    capital     : "Voici les liens capitalistiques avec les principaux actionnaires du média que vous consultez :",
    etat        : "Ce média est la propriété du ou des états suivants :",
    independant : "Ce site n'a pas de lien capitalistique ou étatique à notre connaissance",
    rien        : "rien"
};

// vars to show in prefs
var colors = {
    inconnu     : "#00a86b", // c'est que de l'info :)
    capital     : "#00a86b", // c'est que de l'info :)
    etat        : "#00a86b", // c'est que de l'info :)
    independant : "#00a86b", // c'est que de l'info :)
    rien        : "#00a86b" // c'est que de l'info :)
    //"#A2A9AE", // gris
    //"#D50303", // rouge
    //"#F5A725", // jaune
    //"#129AF0", // bleu
    //"#468847", // vert
    //"#468847"  // INSOUMIS AUSSI :D
};
// let possedex_colors = [ "#A2A9AE", "#129AF0", "#D50303", "#F5A725", "#468847" ];
// let possedex_descs = [ "inclassable", "parodique", "pas fiable du tout", "peu fiable", "fiable" ];

var base_url = "http://"+DOMAIN+"/mdiplo.json?maj="+maj;

var Possedex = {
    data : {},
    regex_url_seule : new RegExp(/^(http[s]?:\/\/([^/]+)\/[^" ,]+)[^"]{1,2}$/g),

    loadJSON : function(path, success, error) {
        // here to help diff with extension version
    },

    removeAfterLastSlash: function(url){
        if(url.lastIndexOf('/') !== -1) {
            return url.substring(0, url.lastIndexOf('/'));
        }
        else {
            return url;
        }
    },

    lastSlash: function(url) { // remove the last slash at the end of the string
        if(url.lastIndexOf('/') == url.length-1) {
            return url.substring(0, url.length-1);
        }
        else {
            return url;
        }
    },

    url_cleaner : function(url){
        return url
            .replace("http://", "")
            .replace('www.', "")
            .replace("https://", "")
            .replace("\n", "");
    },

    getAllChildrenForEntity: function(entity, medias = []) {
        // console && console.log("start getAllChildrenForEntity");
        for(item_index in entity.possessions) {
            item = entity.possessions[item_index];
             console && console.info(item);
            childId = Possedex.getEntityIdFromNom(item.nom);
            childEntity = Possedex.data.objets[childId]
            if (childEntity.type != 3) {
                medias = Possedex.getAllChildrenForEntity(childEntity, medias);
            } else {
                medias.push(childEntity);
            }
        }
        return medias;
    },

    getAllParentsForEntity: function(entity, proprios = []) {
        console && console.log("start getAllParentsForEntity");
        for(item_index in entity.est_possede) {
            console && console.group("Une boucle de est_possede de "+entity.nom);
            item = entity.est_possede[item_index];
            parentId = Possedex.getEntityIdFromNom(item.nom);
            parentEntity = Possedex.data.objets[parentId]
            //console && console.log("Dealing with item.nom = "+item.nom);
            //console && console.log(parentEntity);
            if (parentEntity.type != 1) {
                console && console.log("A creuser pour "+parentEntity.nom);
                a_creuser = Possedex.getAllParentsForEntity(parentEntity, proprios);

            } else {
                console && console.info("Tiens, cette entité est une personne physique");
                console && console.log(parentEntity);
                proprios.push(parentEntity);
            }
            console && console.groupEnd();
        }
        console && console.warn("au final");
        console && console.warn(proprios);
        return proprios;
    },

    getEntityIdFromNom: function(str) {
        // 1st look, check url, exact match
        if (Possedex.data.urls.hasOwnProperty(str)) {
            return Possedex.data.urls[str];
        } else {

            try {
                // @TODO: check this works on Edge
                strClean = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            } catch (e) {
                    console && console.error("TODO: code alternative to str.normalize('NFD')");
                    console && console.error(e);
                strClean = str;
            }
            var regex = new RegExp("^"+strClean, 'i');

            // 2nd look, check regex after removing accents
            for(idEntity in Possedex.data.objets) {
                //console && console.log("check idEntity="+id);
                if (Possedex.data.objets[idEntity].slug == strClean) {
                    return idEntity;
                }
            }

            // 3rd look, check partial match
            for(idEntity in Possedex.data.objets) {

                if (regex.test(Possedex.data.objets[idEntity].slug))
                    return idEntity;
            }

            return false;
        }
    },

    youtubeChannel: function(url) {
        var elms = url.split('/');
        if(elms.length > 2){
            return elms[0] + '/' + elms[1] + "/" + elms[2];
        }
        else{
            return url;
        }
    },

    debunkSite: function(url){
        // INIT vars

        var owner_msg = '';

        var proprietaires = '';
        var fortunes      = '';
        var marques       = '';
        var interets      = '';

        var influences      = '';

        var conflits      = '';
        var subventions   = '';
        var publicite     = '';
        var sources       = [];

        var note          = '';
        var decodex_note  = '';
        var color         = '';
        var decodex_color = '';
        var decodex_desc  = '';
        var message       = '';
        var bandeau_msg   = '';
        var icone         = '';
        // end INIT vars
        if (3 <= _debug) {
            console && console.group('START debunk site '+url);
        }

        // infosToGet in extension
        if (3 <= _debug) {
            console && console.info("debunkSite : var results");
            console && console.log("results");
        }

        sites = Possedex.data.objets;
        objets = Possedex.data.objets;
        url = Possedex.lastSlash(url);
        url = Possedex.url_cleaner(url);
        url = url.toLowerCase(); // when url contains names

        entity_id = Possedex.getEntityIdFromNom(url)

        if (entity_id == false) {
            $("#result").html('Nous n\'avons actuellement aucune information sur ce site.');
            if (2 <= _debug) {
                console && console.info("site non trouvé", url);
                console && console.log(Possedex.data.urls);
            }
            // Optional : add a badge text and badge bg with the icon
            //browser.browserAction.setBadgeText({"text" : "Soumis :p"});
            //browser.browserAction.setBadgeBackgroundColor({'color' : "#D50303"});
            return;
        }

        if (2 <= _debug) {
            console && console.info("Site id pour "+url+", entity_id = "+entity_id);
        }

        entity = Possedex.data.objets[entity_id];
        if (2 <= _debug) {
            console && console.log('contenu', Possedex.data.objets[entity_id]);
        }


        //var proprietaire1  = Possedex.data.objets[entity_id][col_proprietaire1];      // propriétaires
        //var fortunes1      = Possedex.data.objets[entity_id][col_fortune1     ];      // propriétaires
        //var marque1        = Possedex.data.objets[entity_id][col_marque1      ];      // propriétaires
        //var interet1     = Possedex.data.objets[entity_id][col_interet1   ];      // propriétaires

        //var proprietaire2 = Possedex.data.objets[entity_id][col_proprietaire2];      // propriétaires
        //var fortunes2      = Possedex.data.objets[entity_id][col_fortune2     ];      // propriétaires
        //var marque2        = Possedex.data.objets[entity_id][col_marque2      ];      // propriétaires
        //var interet2     = Possedex.data.objets[entity_id][col_interet2   ];      // propriétaires

        //var proprietaire3 = Possedex.data.objets[entity_id][col_proprietaire3];      // propriétaires
        //var fortunes3      = Possedex.data.objets[entity_id][col_fortune3     ];      // propriétaires
        //var marque3        = Possedex.data.objets[entity_id][col_marque3      ];      // propriétaires
        //var interet3     = Possedex.data.objets[entity_id][col_interet3   ];      // propriétaires

        //entity.possedex.marques       = [];
        //if (marque1) {
        //    entity.possedex.marques.push(marque1);
        //}
        //if (marque2) {
        //    entity.possedex.marques.push(marque2);
        //}
        //if (marque3) {
        //    entity.possedex.marques.push(marque3);
        //}

        //entity.possedex.interets = [];
        //if (interet1) {
        //    entity.possedex.interets.push(interet1);
        //}
        //if (interet2) {
        //    entity.possedex.interets.push(interet2);
        //}
        //if (interet3) {
        //    entity.possedex.interets.push(interet3);
        //}

        //publicite      = Possedex.data.objets[entity_id][col_pub];                    // Pub ?

        var raw_sources = Possedex.data.objets[entity_id].possedex.sources;                // Nos sources (urls séparés par virgule et/ou espace)

        // Markdown style
        var regex = new RegExp(/\[([^\]]*?)\]\(([^\)]*?)\)[, ]{0,2}/gm);
        match = regex.exec(raw_sources);
        sources = [];
        while (match != null) {
            sources.push({
                "url"   : match[2],
                "title" : match[1]
            });
            match = regex.exec(raw_sources);
        }

        // URL toute seule
        match = Possedex.regex_url_seule.exec(raw_sources);
        while (match != null) {
            sources.push({
                "url"   : match[1],
                "title" : match[2]
            });
            match = regex.exec(raw_sources);
        }

        if (3 <= _debug) {
            console && console.log("sources apres urls simples", sources);
        }

        //updated_human  = updated.toLocaleString('fr');

        if (2 <= _debug) {
            console && console.group("tout s'est bien passé");
            console && console.log('nom            =',entity.nom                     );
            console && console.log('desc           =',entity.possedex.description    );
            console && console.log('slug           =',entity.possedex.slug           );
            console && console.log('proprietaires  =',entity.possedex.proprietaires  );
            console && console.log('influences     =',entity.possedex.influences     );
            console && console.log('conflits       =',entity.possedex.conflits       );
            console && console.log('subventions    =',entity.possedex.subventions    );
            console && console.log('sources        =',entity.possedex.sources        );
            console && console.groupEnd();
        }

        // display results
        Possedex.sendToOutput(entity);


        //if(results.infobulles[classement] == true){  // note
        //    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //        // sendMessage to the content.js listener
        //        browser.tabs.sendMessage(tabs[0].id, {
        //            show_popup  : true,
        //            note        : insoumis_note,
        //            color       : colors[insoumis_note],
        //            message     : messages[insoumis_note],
        //            bandeau_msg : bandeau_msgs[insoumis_note],
        //            icone       : icones[insoumis_note],
        //        }, function(response) { // note
        //        });
        //    });
        //}

        if (url.match(/youtube.com/)) {

            if (null == classement)
                classement  = '';                             // propriétaires


            if ("" == proprietaires)
                proprietaires  = "Youtube est une propriété de la Holding Alphabet (Google)";                             // propriétaires
            if ("" == influences)
                influences       = "Le groupe Alphabet(Google) a de nombreux intérêts internationnaux. Son business model est fortement basé sur la publicité et son quasi-monopole de la publicité. Google exerce de nombreuses pressions sur les états et l'Union Européenne.";                               // intérets
            if ("" == conflits)
                conflits       = "Youtube peut être un outil de partage de connaissances. Les vidéastes et utilisateurs de la plateforme youtube ne sont pas forcément soumis à Google, mais… ";  // exemple de conflits / complicité idéologique
            if ("" == subventions)
                subventions    = "";             // Montant des subventions d'état
            if ("" == sources)
                sources        = "";             // Nos sources (urls séparés par virgule et/ou espace)
        }

        if (3 <= _debug) {
            console && console.groupEnd();
        }
    },

    sendToOutput : function(entity) {
        $("#result").html('<div id="infos">');
        $("#infos").append("<label>"+entity.typeLibelle+"</label>");
        $("#infos").append("<p>"
            //+entity.nom
            +' <a class="detail-media" href="http://'+DOMAIN+'#'+entity.nom+'">'
            + entity.nom
            + '</a>'
            +"</p>");

        $("#infos").append("<label>Site(s)</label>");
        urls = "";
        for (url_id in entity.urls) {
            urls += ' <a target="_blank" href="http://'+entity.urls[url_id]+'">'
                + entity.urls[url_id] + '</a>'
        }
        $("#infos").append("<p>"
            //+entity.nom
            + urls
            +"</p>");
        // $("#result").append("<label>Note LeMonde (outdated)</label><p>"+decodex_note+"</p>");
        // $("#result").append("<label>Classement Possedex</label><p>"+messages[classement]+"</p>");
        // $("#result").append("<label>Description</label><p>"+notule+"</p>");
        // $("#result").append("<label>identifiant(à masquer plus tard)</label><p>"+slug+"</p>");
        if (entity.hasOwnProperty('est_possede')) {
            proprietaires = []
            entity.est_possede.forEach(function(el, i) {
                proprietaires.push(
                    ' <a class="detail-owner" href="http://'+DOMAIN+'#'+el.nom+'">'
                    +el.nom
                    +'</a>'
                    + ' ('+el.valeur
                    +(parseInt(el.valeur)?'%':'')
                    +')'
                    //+ " (" + fortunes1 + ")"
                );
            })
            if (proprietaires.length) {
                $("#result").append("<label>Propriétaires</label><p>"+proprietaires+"</p>");
            }
        }

        if (entity.hasOwnProperty('possessions')) {
            possessions = []
            entity.possessions.forEach(function(el, i) {
                possessions.push(
                    ' <a class="detail-owner" href="http://'+DOMAIN+'#'+el.nom+'">'
                    +el.nom
                    +'</a>'
                    + ' ('+el.valeur+'%)'
                    //+ " (" + fortunes1 + ")"
                );
            })
            if (possessions.length) {
                $("#result").append("<label>Possède ou contrôle</label><p>"+possessions.join(", ")+"</p>");
            }
        }

        if (entity.possedex.influences && entity.possedex.influences.length) {
            $("#result").append("<label>Intérêts</label><p>"+entity.possedex.influences+"</p>");
        }
        if (entity.possedex.marques && entity.possedex.marques.length) {
            $("#result").append("<label>Marques</label><p>"+entity.possedex.marques+"</p>");
        }
        if (entity.possedex.subventions) {
            $("#result").append("<label>Subventions publiques</label><p>"+entity.possedex.subventions+"</p>");
            //console && console.log('subventions    =',entity.possedex.subventions    );
        }

        console && console.info("POUET");
        //if (entity.type == 1) { // si personne physique, récupérer les possessions intermédiaires et remonter jusqu'aux médias
            console && console.log("type 1");
            console && console.log(entity);
            medias = [];
            Possedex.getAllChildrenForEntity(entity, medias);
            console && console.log("les enfants");
            console && console.log(medias);
        //} else {
        //    medias = [];
        //}
        //if (entity.type == 3) { // si média, récupérer tous les propriétaires finaux
            proprios = Possedex.getAllParentsForEntity(entity);
            console && console.info("les parents");
            console && console.info(proprios);
        //} else {
        //    proprios = [];
        //}

        if (proprios.length) {
            proprios_display = []
            proprios.forEach(function(el, i) {
                proprios_display.push(
                    ' <a class="detail-owner" href="http://'+DOMAIN+'#'+el.nom+'">'
                    +el.nom
                    +'</a>'
                )
                ;
            })
            $("#result").append("<label>Au bout de la chaîne alimentaire…</label><p>"
                +proprios_display.join(", ")
                +"</p>");
        }

        if (medias.length) {
            if (medias.length == 1) {
                medias_title = "A de l'influence dans ce média";
            } else {
                medias_title = "A de l'influence dans ces médias";
            }
            medias_display = []
            medias.forEach(function(el, i) {
                medias_display.push(
                    ' <a class="detail-owner" href="http://'+DOMAIN+'#'+el.nom+'">'
                    +el.nom
                    +'</a>'
                )
                ;
            })
            $("#result").append("<label>"+medias_title+"</label><p>"
                +medias_display.join(", ")
                +"</p>");
        }

        //if (true || activite.length) {
        // @TODO neto
        console && console.info("activite");
        if (entity.possedex.activite) {
            $("#result").append("<label style='color:red'>Et a comme potentiels conflits d'intérêts…</label><p >"
                +entity.possedex.activite
                +"</p>");
        }
        else {
            $("#result").append("Aucune activité ailleurs ? oO");
            console && console.log(entity);
            console && console.log(entity.nom);
            console && console.log(entity.possedex);
            console && console.log(entity['possedex']);
        }


        //$("#result").append(sources);
        //$("#result").append("<label>Dernière mise à jour</label><p>"
        //    + new Date(data.proprietaires[nom].updated).toLocaleString()
        //    +"</p>");
    }
};

$(document).ready(function(){

    $("#logo").on("click", function(){
        if($("#menupopup").is(":hidden")){
            $("#menupopup").removeClass("d-none");
        }

    });
    $(".quit, .nav-link, .nav-social").on("click", function(){
            $("#menupopup").addClass("d-none");   
    });
    
    $("#form-possedex").on("submit", function(e){
        e.preventDefault();
        var url = $("#url").val();
        if (url.length > 0) {
            $.getJSON(base_url, function(data){
                Possedex.data = data;
                document.title = 'Qui possède "'+url+'" ? - Possedex';
                document.location.hash = url;
                Possedex.debunkSite(url);
            });
        } else {
            alert("Saisissez d'abord une url :) ");
        }
    });

    $("#submit-possedex").on("click", function(e){
        e.preventDefault();
        $("#form-possedex").submit();
    });

    $(document).on("click", ".detail-owner,.detail-media", function(e){
        e.preventDefault();
        var nom = this.href.replace('http://'+DOMAIN+"/#", '');
        if ('p/' == nom.substr(0, 2)) {
            $("#domain-or-owner").val("owner");
            $("#url").val(decodeURIComponent(nom.substr(2)));
        } else {
            $("#domain-or-owner").val("domain");
            $("#url").val(decodeURIComponent(nom));
        }
        $("#form-possedex").submit();
    });

    // check if this is a direct request
    var current_location = document.location.href; // full url;
    if ((pos = current_location.indexOf('#')) > -1) {
        url = current_location.substring(pos+1);
        if ('p/' == url.substr(0, 2)) {
            $("#domain-or-owner").val("owner");
            url = url.substr(2);
            $("#url").val(decodeURIComponent(url));
        } else {
            $("#domain-or-owner").val("domain");
            $("#url").val(decodeURIComponent(url));
        }
        $("#submit-possedex").click();
    }
        
  


});




