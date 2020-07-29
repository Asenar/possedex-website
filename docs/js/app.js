/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/app.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/Possedex.js":
/*!*******************************!*\
  !*** ./assets/js/Possedex.js ***!
  \*******************************/
/*! exports provided: Possedex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Possedex", function() { return Possedex; });
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

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

var DOMAIN = document.location.hostname;
var maj = '201809011846';
/***** constants and variables *****/

var messages = {
  inconnu: "non classé",
  capital: "Ce média dépend d'intérêts industriels, financiers, ou de groupe de presse.",
  etat: "Ce média dépend d'un ou plusieurs états",
  independant: "Ce média est indépendant vis à vis d'intérêts industriels, financiers, groupe de presse ou étatique.",
  rien: "rien"
};
var icones = {
  inconnu: 'data:image/png;base64,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',
  capital: 'data:image/png;base64,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',
  etat: 'data:image/png;base64,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',
  independant: 'data:image/png;base64,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',
  rien: 'data:image/png;base64,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'
};
var bandeau_msgs = {
  inconnu: "Inconnu",
  capital: "Liens capitalistiques",
  etat: "Liens étatiques",
  independant: "Indépendant financièrement",
  rien: "rien"
};
var owner_msgs = {
  inconnu: "Ce site n'est pas référencé dans notre base de données.",
  capital: "Voici les liens capitalistiques avec les principaux actionnaires du média que vous consultez :",
  etat: "Ce média est la propriété du ou des états suivants :",
  independant: "Ce site n'a pas de lien capitalistique ou étatique à notre connaissance",
  rien: "rien"
}; // vars to show in prefs

var colors = {
  inconnu: "#00a86b",
  // c'est que de l'info :)
  capital: "#00a86b",
  // c'est que de l'info :)
  etat: "#00a86b",
  // c'est que de l'info :)
  independant: "#00a86b",
  // c'est que de l'info :)
  rien: "#00a86b" // c'est que de l'info :)
  //"#A2A9AE", // gris
  //"#D50303", // rouge
  //"#F5A725", // jaune
  //"#129AF0", // bleu
  //"#468847", // vert
  //"#468847"  // INSOUMIS AUSSI :D

}; // let possedex_colors = [ "#A2A9AE", "#129AF0", "#D50303", "#F5A725", "#468847" ];
// let possedex_descs = [ "inclassable", "parodique", "pas fiable du tout", "peu fiable", "fiable" ];

var base_url = document.location.protocol + "//" + document.location.hostname + "/mdiplo.json?maj=" + maj;
var Possedex = {
  current_entity: null,
  data: {},
  regex_url_seule: new RegExp(/^(http[s]?:\/\/([^/]+)\/[^" ,]+)[^"]{1,2}$/g),
  regex_url_markdown: new RegExp(/\[([^\]]*?)\]\(([^\)]*?)\)[, ]{0,2}/gm),
  loadJSON: function loadJSON(path, success, error) {// here to help diff with extension version
  },
  removeAfterLastSlash: function removeAfterLastSlash(url) {
    if (url.lastIndexOf('/') !== -1) {
      return url.substring(0, url.lastIndexOf('/'));
    } else {
      return url;
    }
  },
  lastSlash: function lastSlash(url) {
    // remove the last slash at the end of the string
    if (url.lastIndexOf('/') == url.length - 1) {
      return url.substring(0, url.length - 1);
    } else {
      return url;
    }
  },
  url_cleaner: function url_cleaner(url) {
    return url.replace("http://", "").replace('www.', "").replace("https://", "").replace("\n", "");
  },
  extractUrlsFromRaw: function extractUrlsFromRaw(raw_sources) {
    var sources = []; // Markdown style

    var match = this.regex_url_markdown.exec(raw_sources);

    while (match != null) {
      sources.push({
        "url": match[2],
        "title": match[1]
      });
      match = this.regex_url_markdown.exec(raw_sources);
    } // URL toute seule


    match = this.regex_url_seule.exec(raw_sources);

    while (match != null) {
      sources.push({
        "url": match[1],
        "title": match[2]
      });
      match = this.regex_url_seule.exec(raw_sources);
    }

    return sources;
  },
  getAllChildrenForEntity: function getAllChildrenForEntity(entity) {
    var medias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    // console && console.log("start getAllChildrenForEntity");
    for (var item_index in entity.possessions) {
      var item = entity.possessions[item_index]; //console && console.info(item);

      var childId = Possedex.getEntityIdFromNom(item.nom);
      var childEntity = Possedex.data.objets[childId];

      if (childEntity.type != 3) {
        medias = Possedex.getAllChildrenForEntity(childEntity, medias);
      } else {
        medias.push(childEntity);
      }
    }

    return medias;
  },
  getAllParentsForEntity: function getAllParentsForEntity(entity, proprios) {
    if (3 <= _debug) {
      console && console.log("start getAllParentsForEntity");
    }

    for (var item_index in entity.est_possede) {
      if (3 <= _debug) {
        console && console.group("Une boucle de est_possede de " + entity.nom);
      }

      var item = entity.est_possede[item_index];
      var parentId = Possedex.getEntityIdFromNom(item.nom);
      var parentEntity = Possedex.data.objets[parentId]; //console && console.log("Dealing with item.nom = "+item.nom);
      //console && console.log(parentEntity);

      if (parentEntity.type != 1) {
        if (3 <= _debug) {
          console && console.log("A creuser pour " + parentEntity.nom);
        }

        var a_creuser = Possedex.getAllParentsForEntity(parentEntity, proprios);
      } else {
        if (3 <= _debug) {
          console && console.info("Tiens, cette entité est une personne physique");
          console && console.log(parentEntity);
        }

        proprios.push(parentEntity);
      }

      if (3 <= _debug) {
        console && console.groupEnd();
      }
    }

    if (3 <= _debug) {
      console && console.info("(fin de getAllParents");
      console && console.info(proprios);
    }

    return proprios;
  },
  getEntityIdFromNom: function getEntityIdFromNom(str) {
    // 1st look, check url, exact match
    if (Possedex.data.urls.hasOwnProperty(str)) {
      return Possedex.data.urls[str];
    } else {
      try {
        // @TODO: check this works on Edge
        var strClean = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      } catch (e) {
        console && console.error("TODO: code alternative to str.normalize('NFD')");
        console && console.error(e);
        strClean = str;
      }

      var regex = new RegExp("^" + strClean, 'i'); // 2nd look, check regex after removing accents

      for (var idEntity in Possedex.data.objets) {
        //console && console.log("check idEntity="+id);
        if (Possedex.data.objets[idEntity].slug == strClean) {
          return idEntity;
        }
      } // 3rd look, check partial match


      for (var _idEntity in Possedex.data.objets) {
        if (regex.test(Possedex.data.objets[_idEntity].slug)) return _idEntity;
      }

      return false;
    }
  },
  youtubeChannel: function youtubeChannel(url) {
    var elms = url.split('/');

    if (elms.length > 2) {
      return elms[0] + '/' + elms[1] + "/" + elms[2];
    } else {
      return url;
    }
  },
  debunkSite: function debunkSite(url) {
    // var owner_msg = '';
    // var proprietaires = '';
    // var fortunes      = '';
    // var marques       = '';
    // var interets      = '';
    // var influences      = '';
    // var conflits      = '';
    // var subventions   = '';
    // var publicite     = '';
    // var note          = '';
    // var decodex_note  = '';
    // var color         = '';
    // var decodex_color = '';
    // var decodex_desc  = '';
    // var message       = '';
    // var bandeau_msg   = '';
    // var icone         = '';
    // end INIT vars
    if (3 <= _debug) {
      console && console.group('START debunk site ' + url);
    } // infosToGet in extension


    if (3 <= _debug) {
      console && console.info("debunkSite : var results");
      console && console.log("results");
    }

    url = Possedex.lastSlash(url);
    url = Possedex.url_cleaner(url);
    url = url.toLowerCase(); // when url contains names

    var entity_id = Possedex.getEntityIdFromNom(url);

    if (entity_id == false) {
      $("#result").html('Nous n\'avons actuellement aucune information sur ce site.');

      if (2 <= _debug) {
        console && console.info("site non trouvé", url);
        console && console.log(Possedex.data.urls);
      } // Optional : add a badge text and badge bg with the icon
      //browser.browserAction.setBadgeText({"text" : "Soumis :p"});
      //browser.browserAction.setBadgeBackgroundColor({'color' : "#D50303"});


      console && console.info("PERDU");
      this.sendToOutput(false);
      return;
    }

    if (2 <= _debug) {
      console && console.info("Site id pour " + url + ", entity_id = " + entity_id);
    }

    Possedex.current_entity = Possedex.data.objets[entity_id];

    if (2 <= _debug) {
      console && console.log('contenu', Possedex.current_entity);
    }

    var raw_sources = Possedex.data.objets[entity_id].possedex.sources; // Nos sources (urls séparés par virgule et/ou espace)

    var sources = this.extractUrlsFromRaw(raw_sources);

    if (3 <= _debug) {
      console && console.log("sources apres urls simples", sources);
    } //updated_human  = updated.toLocaleString('fr');


    if (2 <= _debug) {
      console && console.group("tout s'est bien passé");
      console && console.log('nom            =', Possedex.current_entity.nom);
      console && console.log('possedex       =', Possedex.current_entity.possedex); //console && console.log('slug           =',entity.possedex.slug           );
      //console && console.log('proprietaires  =',entity.possedex.proprietaires  );
      //console && console.log('influences     =',entity.possedex.influences     );
      //console && console.log('conflits       =',entity.possedex.conflits       );
      //console && console.log('subventions    =',entity.possedex.subventions    );
      //console && console.log('sources        =',entity.possedex.sources        );

      console && console.groupEnd();
    } // console && console.log("entity retournée", Possedex.current_entity);
    // console && console.info(entity);
    // display results


    Possedex.sendToOutput(Possedex.current_entity); //if(results.infobulles[classement] == true){  // note
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
      if (null == classement) var classement = ''; // propriétaires

      if ("" == proprietaires) proprietaires = "Youtube est une propriété de la Holding Alphabet (Google)"; // propriétaires

      if ("" == influences) influences = "Le groupe Alphabet(Google) a de nombreux intérêts internationnaux. Son business model est fortement basé sur la publicité et son quasi-monopole de la publicité. Google exerce de nombreuses pressions sur les états et l'Union Européenne."; // intérets

      if ("" == conflits) conflits = "Youtube peut être un outil de partage de connaissances. Les vidéastes et utilisateurs de la plateforme youtube ne sont pas forcément soumis à Google, mais… "; // exemple de conflits / complicité idéologique

      if ("" == subventions) subventions = ""; // Montant des subventions d'état

      if ("" == sources) sources = (_readOnlyError("sources"), ""); // Nos sources (urls séparés par virgule et/ou espace)
    }

    if (3 <= _debug) {
      console && console.groupEnd();
    }
  },
  sendToOutput: function sendToOutput(entity) {
    // console && console.log("send to output (possedex class)");
    $("#result").html('<div id="infos">');
    $("#infos").append("<label>" + entity.typeLibelle + "</label>");
    $("#infos").append("<p>" //+entity.nom
    + ' <a class="detail-media" href="' + document.location.protocol + '//' + DOMAIN + '#' + entity.nom + '">' + entity.nom + '</a>' + "</p>");
    $("#infos").append("<label>Site(s)</label>");
    var urls = "";

    for (var url_id in entity.urls) {
      urls += ' <a target="_blank" href="' + document.location.protocol + '//' + entity.urls[url_id] + '">' + entity.urls[url_id] + '</a>';
    }

    $("#infos").append("<p>" //+entity.nom
    + urls + "</p>"); // $("#result").append("<label>Note LeMonde (outdated)</label><p>"+decodex_note+"</p>");
    // $("#result").append("<label>Classement Possedex</label><p>"+messages[classement]+"</p>");
    // $("#result").append("<label>Description</label><p>"+notule+"</p>");
    // $("#result").append("<label>identifiant(à masquer plus tard)</label><p>"+slug+"</p>");

    if (entity.hasOwnProperty('est_possede')) {
      var _proprietaires = [];
      entity.est_possede.forEach(function (el, i) {
        _proprietaires.push(' <a class="detail-owner" href="' + document.location.protocol + '//' + DOMAIN + '#' + el.nom + '">' + el.nom + '</a>' + ' (' + el.valeur + (parseInt(el.valeur) ? '%' : '') + ')' //+ " (" + fortunes1 + ")"
        );
      });

      if (_proprietaires.length) {
        $("#result").append("<label>Propriétaires</label><p>" + _proprietaires + "</p>");
      }
    }

    if (entity.hasOwnProperty('possessions')) {
      var possessions = [];
      entity.possessions.forEach(function (el, i) {
        possessions.push(' <a class="detail-owner" href="' + document.location.protocol + '//' + DOMAIN + '#' + el.nom + '">' + el.nom + '</a>' + ' (' + el.valeur + '%)' //+ " (" + fortunes1 + ")"
        );
      });

      if (possessions.length) {
        $("#result").append("<label>Possède ou contrôle</label><p>" + possessions.join(", ") + "</p>");
      }
    }

    if (entity.possedex.influences && entity.possedex.influences.length) {
      $("#result").append("<label>Intérêts</label><p>" + entity.possedex.influences + "</p>");
    }

    if (entity.possedex.marques && entity.possedex.marques.length) {
      $("#result").append("<label>Marques</label><p>" + entity.possedex.marques + "</p>");
    }

    if (entity.possedex.subventions) {
      $("#result").append("<label>Subventions publiques</label><p>" + entity.possedex.subventions + "</p>"); //console && console.log('subventions    =',entity.possedex.subventions    );
    } // console && console.log("type 1");
    // console && console.log(entity);


    var medias = [];
    Possedex.getAllChildrenForEntity(entity, medias);
    console && console.log("les enfants");
    console && console.log(medias);
    var proprios = Possedex.getAllParentsForEntity(entity);
    console && console.info("les parents");
    console && console.info(proprios);

    if (proprios.length) {
      var proprios_display = [];
      proprios.forEach(function (el, i) {
        proprios_display.push(' <a class="detail-owner" href="' + document.location.protocol + '//' + DOMAIN + '#' + el.nom + '">' + el.nom + '</a>' + '<p><small class="text-muted">Secteur d\'activité: ' + el.possedex.activite + '</small></p>' + '</div>');
      });
      $("#result").append("<label>Au bout de la chaîne alimentaire…</label><p>" + proprios_display.join(", ") + "</p>");
    }

    if (medias.length) {
      if (medias.length == 1) {
        var medias_title = "A de l'influence dans ce média";
      } else {
        var medias_title = "A de l'influence dans ces médias";
      }

      var medias_display = [];
      medias.forEach(function (el, i) {
        medias_display.push(' <a class="detail-owner" href="' + document.location.protocol + '//' + DOMAIN + '#' + el.nom + '">' + el.nom + '</a>');
      });
      $("#result").append("<label>" + medias_title + "</label><p>" + medias_display.join(", ") + "</p>");
    } //if (true || activite.length) {}
    // @TODO neto


    console && console.info("activite");

    if (entity.possedex.activite) {
      $("#result").append("<label style='color:red'>Et a comme potentiels conflits d'intérêts…</label><p >" + entity.possedex.activite + "</p>");
    } else {// $("#result").append("Aucune activité ailleurs ? oO");
      // console && console.log(entity);
      // console && console.log(entity.nom);
      // console && console.log(entity.possedex);
      // console && console.log(entity['possedex']);
    } //$("#result").append(sources);
    //$("#result").append("<label>Dernière mise à jour</label><p>"
    //    + new Date(data.proprietaires[nom].updated).toLocaleString()
    //    +"</p>");

  }
};

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Possedex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Possedex */ "./assets/js/Possedex.js");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SearchForm */ "./assets/js/components/SearchForm.jsx");
/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Result */ "./assets/js/components/Result.jsx");



'./Possedex.js'; // import Clock from "./components/Clock"
// import Incrementer from "./components/Incrementer";
// import ManualIncrementer from "./components/ManualIncrementer";



var e = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var DOMAIN = document.location.hostname;
var base_url = "/mdiplo.json"; // function RechercheFunc({name, children}) {
//     return <div>
//         <h2>Recherche pour {name} … </h2>
//         <p>{children}</p>
//     </div>
// }

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
  base_url: base_url
}), document.querySelector('#rechercher')); // window.setInterval(() => {
//   test++
//   render();
// }, 10000)
// render();
//ReactDOM.render(e, domContainer);

$(document).ready(function () {
  $("#logo").on("click", function () {
    if ($("#menupopup").is(":hidden")) {
      $("#menupopup").classList.remove("d-none");
    }
  });
  $(".quit, .nav-link, .nav-social").on("click", function () {
    $("#menupopup").classList.remove("d-none");
  });
});

/***/ }),

/***/ "./assets/js/components/AuBout.jsx":
/*!*****************************************!*\
  !*** ./assets/js/components/AuBout.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuBout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function FinalOwner(_ref) {
  var proprios = _ref.proprios,
      onClickSearch = _ref.onClickSearch;

  if (!proprios.length) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "finalOwner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Au bout de la cha\xEEne alimentaire\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, proprios.map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: onClickSearch,
      className: "detail-owner",
      href: document.location.protocol + "//" + document.location.hostname + '#' + el.nom
    }, el.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, "Secteur d'activit\xE9: ", el.possedex.activite)));
  })));
}

function Influences(_ref2) {
  var medias = _ref2.medias,
      onClickSearch = _ref2.onClickSearch;

  if (medias.length === 0) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "influences",
    className: "influences"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "A de l'influence dans ce" + (medias.length === 1 ? "" : "s") + " média" + (medias.length === 1 ? "" : "s")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, medias.map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: onClickSearch,
      className: "detail-owner",
      href: document.location.protocol + '//' + document.location.hostname + '#' + el.nom
    }, el.nom), i < medias.length - 1 ? ", " : null);
  })));
}

function Interets(_ref3) {
  var activite = _ref3.activite;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    style: {
      color: 'red'
    }
  }, "Et a comme potentiels conflits d'int\xE9r\xEAts\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, activite ? activite : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "base de donn\xE9es \xE0 compl\xE9ter")));
}

var AuBout = /*#__PURE__*/function (_React$Component) {
  _inherits(AuBout, _React$Component);

  var _super = _createSuper(AuBout);

  function AuBout(props) {
    var _this;

    _classCallCheck(this, AuBout);

    _this = _super.call(this, props);
    _this.handleClickSearch = _this.handleClickSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AuBout, [{
    key: "handleClickSearch",
    value: function handleClickSearch(e) {
      e.preventDefault();
      var hashPos = e.target.href.indexOf('#');
      var nom = e.target.href.substr(hashPos + 1); // if ('p/' == nom.substr(0, 2)) {
      //     $("#domain-or-owner").val("owner");
      //     $("#url").val(decodeURIComponent(nom.substr(2)));
      // } else {
      //     $("#domain-or-owner").val("domain");
      //     $("#url").val(decodeURIComponent(nom));
      // }

      this.props.onClickSearch(decodeURIComponent(nom)); //$("#form-possedex").submit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          entity = _this$props.entity,
          Possedex = _this$props.Possedex;
      var medias = [];
      Possedex.getAllChildrenForEntity(entity, medias);
      var proprios = [];
      Possedex.getAllParentsForEntity(entity, proprios);
      var influences = [];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "aubout"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FinalOwner, {
        proprios: proprios,
        onClickSearch: this.handleClickSearch
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Influences, {
        medias: medias,
        onClickSearch: this.handleClickSearch
      }), parseInt(entity.type) === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Interets, {
        activite: entity.possedex.activite
      }) : null); // @TODO neto
      //$("#result").append(sources);
      //$("#result").append("<label>Dernière mise à jour</label><p>"
      //    + new Date(data.proprietaires[nom].updated).toLocaleString()
      //    +"</p>");
    }
  }]);

  return AuBout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/components/EntitiesList.jsx":
/*!***********************************************!*\
  !*** ./assets/js/components/EntitiesList.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntitiesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var EntitiesList = /*#__PURE__*/function (_React$Component) {
  _inherits(EntitiesList, _React$Component);

  var _super = _createSuper(EntitiesList);

  function EntitiesList(props) {
    var _this;

    _classCallCheck(this, EntitiesList);

    _this = _super.call(this, props);
    _this.handleClickSearch = _this.handleClickSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EntitiesList, [{
    key: "handleClickSearch",
    value: function handleClickSearch(e) {
      e.preventDefault();
      var hashPos = e.target.href.indexOf('#');
      var nom = e.target.href.substr(hashPos + 1); // if ('p/' == nom.substr(0, 2)) {
      //     $("#domain-or-owner").val("owner");
      //     $("#url").val(decodeURIComponent(nom.substr(2)));
      // } else {
      //     $("#domain-or-owner").val("domain");
      //     $("#url").val(decodeURIComponent(nom));
      // }

      this.props.onClickSearch(decodeURIComponent(nom)); //$("#form-possedex").submit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          list = _this$props.list,
          label = _this$props.label,
          detailClass = _this$props.detailClass;

      if (list.length === 0) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, list.map(function (el, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          key: i,
          className: "detail-owner",
          href: document.location.protocol + '//' + document.location.hostname + '#' + el.nom,
          onClick: _this2.handleClickSearch
        }, el.nom, " (", el.valeur + (parseInt(el.valeur) ? '%' : ''), ")"), i < list.length - 1 ? ", " : null);
      })));
    }
  }]);

  return EntitiesList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/components/ErrorBoundary.jsx":
/*!************************************************!*\
  !*** ./assets/js/components/ErrorBoundary.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function logErrorToMyService(error, errorInfo) {
  console.error(error, errorInfo);
}

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      logErrorToMyService(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Something went wrong.");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/components/Result.jsx":
/*!*****************************************!*\
  !*** ./assets/js/components/Result.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Result; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EntitiesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntitiesList */ "./assets/js/components/EntitiesList.jsx");
/* harmony import */ var _AuBout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuBout */ "./assets/js/components/AuBout.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





function Sites(_ref) {
  var urls = _ref.urls;

  if (!urls.length) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, urls ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Sites"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, urls.map(function (url, url_id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: url_id,
      target: "_blank",
      href: document.location.protocol + '//' + urls[url_id]
    }, url);
  }))) : null);
}

function PossedexInfo(_ref2) {
  var possedex = _ref2.possedex;
  console.info("possedex");
  console.log(possedex);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, possedex.influences && possedex.influences.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Int\xE9r\xEAts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, possedex.influences)) : null, possedex.marques && possedex.marques.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Marques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, possedex.marques)) : null, possedex.subventions && possedex.subventions.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Subventions publiques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, possedex.subventions)) : null);
} //function PossessionsList({list, label, detailClass}) {
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


var Result = /*#__PURE__*/function (_React$Component) {
  _inherits(Result, _React$Component);

  var _super = _createSuper(Result);

  function Result(props) {
    var _this;

    _classCallCheck(this, Result);

    _this = _super.call(this, props);
    _this.domain = document.location.href; // console.info("props");
    // console.log(this.props);

    _this.handleClickSearch = _this.handleClickSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Result, [{
    key: "handleClickSearch",
    value: function handleClickSearch(search) {
      this.props.onClickSearch(search);
    }
  }, {
    key: "render",
    value: function render() {
      console.info("render result");
      var entity = this.props.entity;

      if (!entity) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "result",
          style: {
            clear: "both"
          }
        });
      } // console.log(entity);
      // console.info("props dans le else de render");


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "result",
        style: {
          clear: "both"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "infos"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, entity.typeLibelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "detail-media",
        href: document.location.protocol + '//' + document.location.hostname + "#" + entity.nom
      }, entity.nom)), entity.hasOwnProperty('urls') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sites, {
        urls: entity.urls
      }) : null, entity.hasOwnProperty('est_possede') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EntitiesList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClickSearch: this.handleClickSearch,
        label: "Propri\xE9taires",
        detailClass: "owner",
        list: entity.est_possede
      }) : null, entity.hasOwnProperty('possessions') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EntitiesList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClickSearch: this.handleClickSearch,
        label: "Poss\xE8de ou contr\xF4le",
        detailClass: "owner",
        list: entity.possessions
      }) : null, entity.possedex ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PossedexInfo, {
        possedex: entity.possedex,
        onClickSearch: this.handleClickSearch
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Info poss\xE9dex manquante"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuBout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        entity: entity,
        Possedex: this.props.Possedex,
        onClickSearch: this.handleClickSearch
      })));
    }
  }]);

  return Result;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./assets/js/components/SearchForm.jsx":
/*!*********************************************!*\
  !*** ./assets/js/components/SearchForm.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result */ "./assets/js/components/Result.jsx");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorBoundary */ "./assets/js/components/ErrorBoundary.jsx");
/* harmony import */ var _Possedex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Possedex */ "./assets/js/Possedex.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SearchForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchForm, _React$Component);

  var _super = _createSuper(SearchForm);

  function SearchForm(props) {
    var _this;

    _classCallCheck(this, SearchForm);

    _this = _super.call(this, props);
    _this.state = {
      search: "",
      entity: null
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleClickSearch = _this.handleClickSearch.bind(_assertThisInitialized(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(_assertThisInitialized(_this));
    _this.doSearch = _this.doSearch.bind(_assertThisInitialized(_this));

    _Possedex__WEBPACK_IMPORTED_MODULE_3__["Possedex"].sendToOutput = function (entity) {
      console.warn("send to output", entity);

      if (entity) {
        this.setState({
          entity: entity,
          found: true
        });
      } else {
        this.setState({
          entity: false,
          found: false
        });
      }
    }.bind(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(SearchForm, [{
    key: "loadFromHash",
    value: function loadFromHash() {
      // check if this is a direct request
      var current_location = document.location.href; // full url;

      var pos = current_location.indexOf('#');

      if (pos > -1) {
        var search = current_location.substring(pos + 1);

        if ('p/' == search.substr(0, 2)) {
          //$("#domain-or-owner").val("owner");
          search = decodeURIComponent(search.substr(2));
        } else {
          //$("#domain-or-owner").val("domain");
          search = decodeURIComponent(search);
        }

        this.doSearch(search); //$("#submit-possedex").click();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("component SearchForm did mount - loading db");
      fetch(this.props.base_url).then(function (res) {
        return res.json();
      }).then(function (data) {
        _Possedex__WEBPACK_IMPORTED_MODULE_3__["Possedex"].data = data; // console.log('data:', data)

        _this2.loadFromHash();
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      // console.log(e);
      this.setState({
        search: e.target.value
      });
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      if (e) {
        e.preventDefault();
      }

      this.doSearch();
    }
  }, {
    key: "doSearch",
    value: function doSearch(search) {
      //console && console.log(e);
      // console && console.log('prevent default');
      // var search = this.state.search
      if (search.length > 0) {
        console.log("TODO: useEffect ? " + search); // TODO: useEffect
        //this.setState({
        //    search_output : "recherche de " + search,
        //});

        _Possedex__WEBPACK_IMPORTED_MODULE_3__["Possedex"].debunkSite(search); // console.log(this.state.search_output);

        this.setState({
          search: search
        });
      } else {// alert("Saisissez d'abord une url :) ");
      }
    }
  }, {
    key: "handleClickSearch",
    value: function handleClickSearch(search) {
      this.doSearch(search);
    } //shouldComponentUpdate(nextProps, nextState, nextContext) {
    //    if (nextState.search !== this.state.search) {
    //        return true;
    //    }
    //}
    // componentWillUpdate(nextProps, nextState, nextContext) {
    // }

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      document.title = 'Qui possède "' + this.state.search + '" ? - Possedex';
      document.location.hash = this.state.search;
    }
  }, {
    key: "render",
    value: function render() {
      // useEffect(() => {
      //     document.title = 'Qui possède "'+this.state.search+'" ? - Possedex';
      //     // document.location.hash = this.state.search;
      // })
      console.info("render searchform");
      var _this$state = this.state,
          entity = _this$state.entity,
          found = _this$state.found;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "align-middle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "site-title",
        className: ""
      }, "Poss\xE9dex"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cherchez un m\xE9dia pour trouver son propri\xE9taire, ou un milliardaire pour trouver ses m\xE9dias.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        id: "form-possedex",
        method: "GET",
        className: "form-horizontal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "input-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "search",
        id: "search",
        className: "form-control",
        placeholder: "Exemples : Le Monde, humanite.fr, Bollor\xE9",
        value: this.state.search
        /*defaultValue={this.state.search}*/
        ,
        onChange: this.handleChange,
        onKeyUp: this.handleKeyUp
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "input-group-addon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "submit-possedex",
        className: "btn btn-light",
        type: "button",
        onSubmit: this.doSearch
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-block d-sm-none"
      }, "\u2192"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-none d-sm-block"
      }, "Chercher"))))), entity ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_1__["default"], {
        Possedex: _Possedex__WEBPACK_IMPORTED_MODULE_3__["Possedex"],
        onClickSearch: this.handleClickSearch,
        id: "result",
        entity: entity
      }) : null);
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL1Bvc3NlZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXVCb3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRpdGllc0xpc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jlc3VsdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoRm9ybS5qc3giXSwibmFtZXMiOlsiX2RlYnVnIiwiY29uc29sZSIsImluZm8iLCJET01BSU4iLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJtYWoiLCJtZXNzYWdlcyIsImluY29ubnUiLCJjYXBpdGFsIiwiZXRhdCIsImluZGVwZW5kYW50IiwicmllbiIsImljb25lcyIsImJhbmRlYXVfbXNncyIsIm93bmVyX21zZ3MiLCJjb2xvcnMiLCJiYXNlX3VybCIsInByb3RvY29sIiwiUG9zc2VkZXgiLCJjdXJyZW50X2VudGl0eSIsImRhdGEiLCJyZWdleF91cmxfc2V1bGUiLCJSZWdFeHAiLCJyZWdleF91cmxfbWFya2Rvd24iLCJsb2FkSlNPTiIsInBhdGgiLCJzdWNjZXNzIiwiZXJyb3IiLCJyZW1vdmVBZnRlckxhc3RTbGFzaCIsInVybCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwibGFzdFNsYXNoIiwibGVuZ3RoIiwidXJsX2NsZWFuZXIiLCJyZXBsYWNlIiwiZXh0cmFjdFVybHNGcm9tUmF3IiwicmF3X3NvdXJjZXMiLCJzb3VyY2VzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsImdldEFsbENoaWxkcmVuRm9yRW50aXR5IiwiZW50aXR5IiwibWVkaWFzIiwiaXRlbV9pbmRleCIsInBvc3Nlc3Npb25zIiwiaXRlbSIsImNoaWxkSWQiLCJnZXRFbnRpdHlJZEZyb21Ob20iLCJub20iLCJjaGlsZEVudGl0eSIsIm9iamV0cyIsInR5cGUiLCJnZXRBbGxQYXJlbnRzRm9yRW50aXR5IiwicHJvcHJpb3MiLCJsb2ciLCJlc3RfcG9zc2VkZSIsImdyb3VwIiwicGFyZW50SWQiLCJwYXJlbnRFbnRpdHkiLCJhX2NyZXVzZXIiLCJncm91cEVuZCIsInN0ciIsInVybHMiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ckNsZWFuIiwibm9ybWFsaXplIiwiZSIsInJlZ2V4IiwiaWRFbnRpdHkiLCJzbHVnIiwidGVzdCIsInlvdXR1YmVDaGFubmVsIiwiZWxtcyIsInNwbGl0IiwiZGVidW5rU2l0ZSIsInRvTG93ZXJDYXNlIiwiZW50aXR5X2lkIiwiJCIsImh0bWwiLCJzZW5kVG9PdXRwdXQiLCJwb3NzZWRleCIsImNsYXNzZW1lbnQiLCJwcm9wcmlldGFpcmVzIiwiaW5mbHVlbmNlcyIsImNvbmZsaXRzIiwic3VidmVudGlvbnMiLCJhcHBlbmQiLCJ0eXBlTGliZWxsZSIsInVybF9pZCIsImZvckVhY2giLCJlbCIsImkiLCJ2YWxldXIiLCJwYXJzZUludCIsImpvaW4iLCJtYXJxdWVzIiwicHJvcHJpb3NfZGlzcGxheSIsImFjdGl2aXRlIiwibWVkaWFzX3RpdGxlIiwibWVkaWFzX2Rpc3BsYXkiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsInF1ZXJ5U2VsZWN0b3IiLCJyZWFkeSIsIm9uIiwiaXMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJGaW5hbE93bmVyIiwib25DbGlja1NlYXJjaCIsIm1hcCIsIkluZmx1ZW5jZXMiLCJJbnRlcmV0cyIsImNvbG9yIiwiQXVCb3V0IiwicHJvcHMiLCJoYW5kbGVDbGlja1NlYXJjaCIsImJpbmQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc2hQb3MiLCJ0YXJnZXQiLCJocmVmIiwiaW5kZXhPZiIsInN1YnN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsIkNvbXBvbmVudCIsIkVudGl0aWVzTGlzdCIsImxpc3QiLCJsYWJlbCIsImRldGFpbENsYXNzIiwibG9nRXJyb3JUb015U2VydmljZSIsImVycm9ySW5mbyIsIkVycm9yQm91bmRhcnkiLCJzdGF0ZSIsImhhc0Vycm9yIiwiY2hpbGRyZW4iLCJTaXRlcyIsIlBvc3NlZGV4SW5mbyIsIlJlc3VsdCIsImRvbWFpbiIsInNlYXJjaCIsImNsZWFyIiwiU2VhcmNoRm9ybSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUtleVVwIiwiZG9TZWFyY2giLCJ3YXJuIiwic2V0U3RhdGUiLCJmb3VuZCIsImN1cnJlbnRfbG9jYXRpb24iLCJwb3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibG9hZEZyb21IYXNoIiwidmFsdWUiLCJ0aXRsZSIsImhhc2giXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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TSxFQUFDLEtBQWhDO0FBQXNDLGlCQUFTLEVBQUM7QUFBaEQsc0JBQ0k7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLHNCQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLFFBQXhCO0FBQWlDLFVBQUUsRUFBQyxRQUFwQztBQUNPLGlCQUFTLEVBQUMsY0FEakI7QUFFTyxtQkFBVyxFQUFDLDhDQUZuQjtBQUdPLGFBQUssRUFBRSxLQUFLZixLQUFMLENBQVdPO0FBQ2xCO0FBSlA7QUFLTyxnQkFBUSxFQUFFLEtBQUtHLFlBTHRCO0FBTU8sZUFBTyxFQUFFLEtBQUtDO0FBTnJCLFFBREosZUFTSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsc0JBQ0k7QUFBUSxVQUFFLEVBQUMsaUJBQVg7QUFBNkIsaUJBQVMsRUFBQyxlQUF2QztBQUF1RCxZQUFJLEVBQUMsUUFBNUQ7QUFBcUUsZ0JBQVEsRUFBRSxLQUFLQztBQUFwRixzQkFDSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsa0JBREosZUFFSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsb0JBRkosQ0FESixDQVRKLENBREosQ0FMRyxFQXVCRjFHLE1BQU0sZ0JBQ0gsMkRBQUMsK0NBQUQ7QUFBUSxnQkFBUSxFQUFFekIsa0RBQWxCO0FBQTRCLHFCQUFhLEVBQUUsS0FBS3NHLGlCQUFoRDtBQUFtRSxVQUFFLEVBQUMsUUFBdEU7QUFBK0UsY0FBTSxFQUFFN0U7QUFBdkYsUUFERyxHQUVELElBekJILENBQVA7QUE0Qkg7Ozs7RUFoSm1DMkQsNENBQUssQ0FBQzJCLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2Fzc2V0cy9qcy9hcHAuanNcIixcInZlbmRvcnN+YXBwXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyogICAgICAgICAgUE9TU0VERVhcbiAgICAgICAgICAgIFZFUlNJT04gMSAvIE1BUlMgMjAxN1xuICAgICAgICAgICAgVkVSU0lPTiAyIC8gSkFOVklFUiAyMDE4XG4gICAgICAgICAgICBWRVJTSU9OIDMgLyBBT1VUIDIwMThcbiAgICAgICAgICAgIFJFTUVSQ0lFTUVOVCBBIEwnRVFVSVBFIExFUyBERUNPREVVUlMgRFUgTU9OREVcbiAgICAgICAgICAgIElORklOSU1FTlQgTUVSQ0kgQVUgTU9OREUgRElQTE9NQVRJUVVFIFFVSSBBIFBVQkxJw4kgU0EgQkFTRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAueS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtZE1tLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1NTU1kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZE1NTU1NZC4gICAgIC46K295eXNvLVxuICAgICAgICAgICAgICAgICAgICAgICAgIGBoTU1NTU1NTWRgIC1vZE5NTU1NTU1NTnlgICAgICAgICAgICAgIGAuLlxuICAgICAgICAgICAgICAgICAgICAgICAgIHNNTU1tOmRNTU1kZE5NTU1NbXlvb21NTU1oICAgIGAuLS8rb3lkbW1OOlxuICAgICAgICAgICAgICAgICAgICAgICAgOk5NTU4vIC5tTU1NTU1OZCstYCAgIC1OTU1NeXlkbU5OTk1NTU1NTU1kLlxuICAgICAgICAgICAgICAgICAgICAgICAgaE1NTXkgICAtbU1NTU46ICAgICAgICBzTU1NTU1NTU1OTm1oaE5NTU1vXG4gICAgICAgICAgICAgICAgICAgICAgIC1tTU1NLSAgICAtbU1NTXlgICAgICAgIC1OTU1NeSsvLS5gYCAvTk1NTi5cbiAgICAgICAgICAgICAgICAgICAgICAgL05NTU1gICAgICAtbU1NTXlgICAgICAgYGhNTU0rICAgICAgIHNNTU1oXG4gICAgICAgICAgICAgICAgICAgICAgIC1tTU1Nb2AgICAgIDptTU1Nc2AgICAgICBzTU1NZCAgICAgIC5OTU1OL1xuICAgICAgICAgICAgICAgICAgICAgICAgK05NTU55YCAgICAgOk5NTU5zICAgICAgL01NTW1gICAgICArTU1NZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICA6ZE1NTWQ6ICAgICA6Tk1NTW9gICAgIGBOTU1OLSAgICBgZE1NTW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnlNTU1OKyAgICAgOk5NTU5vICAgICBOTU1OLyAgICAvTk1NTS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGBvTk1NTnkuICAgIC9OTU1OKyAgICBkTU1NbyAgICB5TU1NaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bU1NTWQtICAgIC9OTU1OKyAgIHlNTU1zICAgYE5NTU4vXG4gICAgICAgICAgICAgICAgICAgICAgICAgYC06Ly9vaGhoaHkrLy8vL3ltTk1OLy4tc2hoZHM6LS0rbW1tZC5cbiAgICAgICAgICAgICAgICAgICAgICAgYC9vc29vKysrKysrKysrKytvb3NzaGRzc3Nvb29vb29vb29vc3NzKy8tYFxuICAgICAgICAgICAgICAgICAgICAgIGArc28vOjo6Ojo6Ojo6Ojo6Ojo6L29zc3MrOjo6Ojo6Ojo6Ojo6Ly8rb3MrLWBcbiAgICAgICAgICAgICAgICAgICAgICAtc3MvOi0tLS0tLS0tLS0tLS0tLS0vc3MrOi0tLS0tLS0tLS0tLS0tOjorc3MrLS5gYGBcbiAgICAgICAgICAgICAgICAgICAgICAuc3MrOjo6Ojo6Oi0tOjo6Ojo6Ojorc3NvOjotLS0tLS0tLS0tLS0tLS06Oitvc29vb28tXG4gICAgICAgICAgICAgICAgICAgICAgYCtzc28rKysvLy86Ojo6Ly8vKysrb29zc28rLy86Ojo6Ojo6LS0tLS0tLS06OjovK3NzLVxuICAgICAgICAgICAgICAgICAgICAgYC9zcysvOjo6Ojo6Ojo6Ojo6Ojo6Ojo6K3Nzc3Nvb29vb28rOi0tLS0tLS0tLS0tLS9zcy1cbiAgICAgICAgICAgICAgICAgICAgIC5vcys6LS0tLS0tLS0tLS0tLS0tLS0tLTpvc28tLi4uLm9zKy0tLS0tLS0tLS0tLS0vc3MtXG4gICAgICAgICAgICAgICAgICAgICBgK3NvOjotLS0tLS0tLS0tOjo6Ojo6Ly8rc3MrYCAgICArc286LS0tLS0tLS0tLS0tL3NzLVxuICAgICAgICAgICAgICAgICAgICAgIC4rc28rLy8vLy8vLy86Ojo6Oi8vLy8rKytvcysuICAgLXNzLy0tLS0tLS0tLS0tLS9zcy1cbiAgICAgICAgICAgICAgICAgICAgICAgYC1vc28vLzo6Ojo6LS0tLS0tLS0tLS0tOm9zKyAgIGAvc28vOi0tLS0tLS0tLS0vc3MtXG4gICAgICAgICAgICAgICAgICAgICAgICBgb3NvOi0tLS0tLS0tLS0tLS0tLS0tOjpvc28gICAgYCtzby86LS0tLS0tLS0tL3NzLVxuICAgICAgICAgICAgICAgICAgICAgICAgIDpzcys6Ojo6Ojo6Ojo6Ojo6Ojo6Ly8rb3NzLy4gIGBgL3NvKzotLS0tLS0tLS9zcy1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLStvc29vb29vbysrLy8vOjo6Ojo6OjovK3NvLSAtLmA6b3NvLzo6LS0tLS0vc3MtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi06Ojpvc286LS0tLS0tLS0tLS0tLTpvcytgIG8rIGA6b3NvKy86Ojo6L3NzLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3NvLzotLS0tLS0tLS0tLS06b3MrYCAvTXMuIGAtK3lzc3Nvb29zcy1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGArc28rLzo6Ojo6Ojo6Oi8rb3NvLiAgK01NZC0gIC5oTm1taC0tLS1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDorb29vb3Nzc3Nvb29vbys6YCAgIHlNTU15YCAgLU1NTU4vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4uOmRtbW0vLi4uYCAgICAgIDpOTU1NOiAgIHNNTU1tYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpNTU1tLiAgICAgICAgICAgeU1NTWggICAuZE1NTXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5TU1NeSAgICAgICBgYC46K3lNTU1OOiAgIDpOTU1OOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYG1NTU0vICBgYC0rc2htTU1NTU1NTk55ICAgIHNNTU1tYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL05NTU4tOm9obU1NTU1OTm1keW8rLy0tICAgIC5tTU1Nb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc01NTU1tTU1NTU5teW8vLmAgICBgLjovK29zc29kTU1NTjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1NTU1NTU5teSsuYCAgICBgLSt5bU5NTU1NTU1NTU1NTU1kYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6TU1NTU5zOmAgIGBgLi9veW1OTU1NTU5kaHlzc3lobU1NTU1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlNTU1OeW9vb3loZE5OTU1NTU5NTU1Nb2AgICAgICBgZE1NTWRgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1kTk1NTU1NTU1NTU5OTmR5KzpvTU1NTjogICAgYDpoTU1NTjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA6K3N5eXl5c28vOi5gICAgICB5TU1NbWAgYC9kTU1NTWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRNTU1ob21NTU1OaC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLU5NTU1NTU1OeS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtOTU1NbXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc01tb2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL2BcblxuKi9cblxuLy8gdmFyIGJyb3dzZXIgPSBicm93c2VyIHx8IGNocm9tZTtcblxuLy8gdmFyIGNoZWNrU2l0ZV9pbl9wcm9ncmVzcyA9IGZhbHNlO1xuXG52YXIgX2RlYnVnID0gMDsgLy8gMD1xdWlldCwgMT12ZXJib3NlLCAyPW1vcmUgdmVyYm9zZSwgMz0gdmVyeSB2ZXJ5IHZlcmJvc2UsIDQ9ZXZlbiBtb3JlLiA1IHZlcnkgdmVyeSB2ZXJib3NlXG5pZiAoX2RlYnVnKSB7XG4gICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oXCJERUJVRyBMRVZFTFwiLCBfZGVidWcpO1xufVxuXG52YXIgRE9NQUlOICAgICA9IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lO1xudmFyIG1haiAgICAgICAgPSAnMjAxODA5MDExODQ2JztcblxuLyoqKioqIGNvbnN0YW50cyBhbmQgdmFyaWFibGVzICoqKioqL1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gaW5jb25udSAgICAgOiBcIm5vbiBjbGFzc8OpXCIsXG4gY2FwaXRhbCAgICAgOiBcIkNlIG3DqWRpYSBkw6lwZW5kIGQnaW50w6lyw6p0cyBpbmR1c3RyaWVscywgZmluYW5jaWVycywgb3UgZGUgZ3JvdXBlIGRlIHByZXNzZS5cIixcbiBldGF0ICAgICAgICA6IFwiQ2UgbcOpZGlhIGTDqXBlbmQgZCd1biBvdSBwbHVzaWV1cnMgw6l0YXRzXCIsXG4gaW5kZXBlbmRhbnQgOiBcIkNlIG3DqWRpYSBlc3QgaW5kw6lwZW5kYW50IHZpcyDDoCB2aXMgZCdpbnTDqXLDqnRzIGluZHVzdHJpZWxzLCBmaW5hbmNpZXJzLCBncm91cGUgZGUgcHJlc3NlIG91IMOpdGF0aXF1ZS5cIixcbiByaWVuICAgICAgICA6IFwicmllblwiXG59O1xudmFyIGljb25lcyA9IHtcbmluY29ubnUgICAgIDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUEgQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQUIzUkpUVVVINGdFRER5b1F3UTBOQmdBQUNCbEpSRUZVV01PdGwxdHNIT1VWeDM4eiBzeGV2YjN1ejE5bmRyTzM0a2tBTTlzWW1KQ0doaUVvSnBWUXhOS2xBZVFIUkYwSWZtZ3BSY1pIb0d5QWVpdnBXQkNvVjdVUERBMGxWIDJoQURJcEFvSVkzeFpSK0lMN0c5cnVQTjJydmUyYlZuYi9iT2ZIMXd2UFd5dHBPSEhtbWttZlBkL3VmOHozZk9HV2wwZEZTd2hjaXkgektWTGw3QmFyZXpkdXhmRE1BQ1FKQWxKa2hEaWY4dlh2OSt0bUxZYWxDUUpUZE00ZS9ZVDZ1dnIyYk5uRHlhVENTRUVxVlNLVENhTiB3K0Vrbjg5ak5wdXhXcTBvaXZML0F5RExNa05EUTRSQ0lXcHFhcG1jbk1CdWQ5RFhkNTZMRjc4QkpGNTQ0U1NSeUN5YWxxYXRyWTNkIHUzZGpzVmlLUU83a0ZXa3JDZ3pENE8yMzN5SWNua0tTSkd3Mkc5bHNGbDNYQ1FhRGZQMzExeHc5MnN2RER6OU1LclhJMHRJUzQrT2ogN055NWkrYm1IZGp0ZG1wcWFyWUVZZHJxOEtHaFFRWUhCM2orK1YvaWNEaDQvZlhYT0h6NE1HKzg4VHNhRzVzNGRlclhYTHAwRVUzVCBtSmlZWUdFaFRqUWE1ZVdYZjh2VnExY3hESU9ISGpxQTM3OTlVeER5WnR6UHpjM3h4UmRma012bDZPb0s4c1FUUCtPZWUrN0I1WExUIDJOaUVvaWgwZFhVUmlVVHdlcjI4K3Vxcm5EejVJblYxZGJoY0xoWVhVMFNqdC9qODg4KzVjZVBHNWpUL1VDR0VJQlFLb1drYWdVQUEgSVFUNWZKNjZ1anFPSC84RlgzNzVKYUhRTUFCTlRVM1liRGFPSEhtTUF3Y2VZbkZ4RWFmVGlTd3I1SEk1WkZsRzB6UXVYdnlHY0RpTSBKRWxiQTVBa2lYQTR6TGZmWG1Gd2NJRHU3aDU4UGo4ZmZmUm5VcWtVUjQvMjRuRFlPWDM2TkFBZWp3ZUFXR3dlZ0pHUkVRS0JSckxaIERMcXVGL2RNcDlOY3VYS1pSQ0pSQmtKZWY3aW1hZlQzOTdPOHZFd3NGbU4yZHBZVEowNHdPRGpJWC83eUVUNmZqMlBIanRQWGQ1N3Ygdi84ZWg4T0IyV3dtbVV5U3lXUUloNmRvYm00bW1VeVZjQzVKRW9sRWdvR0I3eWdVQ3B0N1lHeHNqRmhzdnBoa3hzZkhjRHBkUFA3NCBUL253d3ovUjMzK05wNTc2T2RYVjFadysvVGZNWmd0V3E1VlVLc1hjM0J5SlJBS2Z6MDh5cVpaWktra1NrNU5UM0xvVktSbVQxd1l6IG1RdzNib3lYSUM4VUNnd05EOVBVdkFPdno4L3Bqei9tK3ZYcjNIZC9GeGN1WEtDLy96dDgvZ0R6c1FVdVg3bEtUYTBUcTlXS3Bta2IgOHAzUDV4Z2RIU3RtVTdpZEIyUlpKaHllNHR5NWMwWHVBQVRnclY2azJ6OUxoZGxZWFNnRWMrbGF2cnB1WjBlRG9Nc1hwMkJJNUFzbSBFaGtiYzhzQjRzbkM3ZFhsQVY1YmE2ZTN0eGU3M1k0UVlqVVBDQ0dJUnVjb0ZBb2x5Q1hnUnp1bU9OQTRqU0drb2k1WE1LRm1IMkJmIFlKbzl2bGwwWTVYSkZVTmhMRGJOMmV2M0UwdFhvVWlsSUZZRFVpT1JXTURoY0NDRVdLWEFNQXhVVlMxTEZrSkl6S1FjNUFvbURDRVYgbi9TeUJXM1p3clRxSktaVnNwUzNrQytZVUNTRDNRM3pQSDMvRUVGdkJKTnNsSGxCMTNWVU5WbjhOcTBwczlsczJXU3pvdU91VExPZSBUUUZVVy9NY2FwcmtuK05kM0Z5NUQxRkk4MEI5aUFjRE14aENvczI5UUswMXozVFNTU3BuUTZLMFltWXk2YUt4OHByU01QUVM5d3ZBIGFpclE1bDdBck9nbHdDeUtqcjgyU1ozTHlWTW5UdEcrcDVka3JxSmtMUktVaCtHcXJLd1VTZ0hBYXVVcnVidEFldG5DcHlQM0VsMnEgUVpMV1d5RlJZZEtwRmxORWIwVm9ibTRpbHF0blJaZTVHekdaVEVWajVUVkZSWVd0UEdxQjJVVTdCVU5Ha1FUeWJSQUNjRmRsdU5jMSB4Y1RFT0lIdGZ2SzJUcVpWZTNIT1ppSkpFcFdWdGxJQXNpempkRHJLa3dlUUw1aTRPdFBFU016RFJNSk52ckJhUUhWRHhxUkFkRHBFIFFrM1F2Zjh3RjJmdUk1bTFyb0psWXlDS291QndPSXZmeFVUazhUUmdNcFZYWjBOSVhQNVBFKzlmMjBmZitFNEVGT25vOWtmb3FMN00gOE5BZ3dXQVgvczVuT0R2NklDTXhEL05hRmJvaHdROENzTEt5RXJmYlhhUzdtQWNhR2hwd09CekU0L0VOczFqQmtOR1dyU1N6dG1KdyBHUUtXOGxZcUxWWVVXZWJJa1NQOFM5ZjV3OTgvcG5YSGRyS0ZUTmtOOEhxOUpVMUtFVUJWVlJVdExhM0U0L0VOWFNkTGd1aFNEWDhOIEhhRFNsR0ZscFVDdHcwMlZwNU5IOXU0dHVuZFBNTWdISDd6UHdVZU9vT1hIUytxQ3hXS2h2YjBkUlZGS0FhekpybDI3bUppNHdjTEMgd29aZUVFTGc5QWNaSGc2UnkyWjU4MWV2NDNJNXNWb3N4VGsrbjQrMjFsYkd4MFlKQkFLb2F1SjI5MnpRMk5qRTl1MkJrdHNtcjkvYyBicmZUM2QyRDJXemVzSVdTSkFtWDAwbGtkZ2EvMzR0M1cwUEo0VXRMUzh6TnpkSFIwY0h3OEJCdWR4MFdpNlZZQTNwNlZ2ZGVMNllmIFd0alcxb2FxcWd3TWZGY0d3bUt4SU1zUzgvTnp0TFkrV2RUSFlqRSsrK3djWjg1OFFpUVNRZGNObHBZV1dWeE00WEs1VUZXVi9mdjMgNC9GNHl2WXNDM3RGVWVqcDZVSFhkVUtoWVhSZEwvNkFWRlZWa2Nsa1NLZlRiTnUyamRIUlVmcjZ6dlBwcC85Z1pHU0VRNGNPY2ZMayBpOXk4ZVpNelp6NWhjSENRZ3djUFlqYWJhV3RyMzlDclpRQ0VFSmpOWnZidDIwZDFkUlVEQXdOb21nYUEzVzRuSG8ramFScnZ2dnQ3IFlyRVl5OHZMZEhVRmFXOXZwNk9qZzJlZmZRNkFscFlXM252dmp4dzdkaHl2MTd0cFY3eGhXeTZFUUZFVU9qdTc4SGdhQ0lXR0NZZkQgMk8xMjV1Zm5jYnZkU0pMTVk0LzloR0F3U0VQRE5xNWQremZuejMvR2M4ODlqOC9ubzZhbWxuZzhUandldysvM2wvUVpkd1N3WHJ4ZSBML1gxOVVTalVVd21oWW9LR3krOTlESjFkWFdvcXNyVTFCU1RrNU8wdDdlanFpb1hMbnhGYzNNejc3enpOdTN0TzJsc2JDcnBnTW9DICswNC9wK3R2QUt5V2JrVlJTQ2FUcUtvS0NDb3FiTlRXMXZMV1cyOHlNelBEeXNveVhxK1hVNmQrUXlEUWhCQ2JBN2k3OG5XYkZpRkUgc1dvNkhBNWFXbHBvYVdrdFpyZEhILzB4dDI1RjJMbHpGNis4OGhxTmpWc2ZmbGNVM0FuUW1oaUdRV2RuSjA4Ly9ReTl2VTlTWDErLyBwZXZYNUw4Yk9Nc0V1eitDbmdBQUFCbDBSVmgwUTI5dGJXVnVkQUJEY21WaGRHVmtJSGRwZEdnZ1IwbE5VRmVCRGhjQUFBQWxkRVZZIGRHUmhkR1U2WTNKbFlYUmxBREl3TVRndE1ERXRNRE5VTVRZNk5EQTZORFVyTURFNk1ERGU3VVowQUFBQUpYUkZXSFJrWVhSbE9tMXYgWkdsbWVRQXlNREU0TFRBeExUQXpWREUyT2pRd09qUTFLekF4T2pBd3I3RCt5QUFBQUFCSlJVNUVya0pnZ2c9PScsXG5jYXBpdGFsICAgICA6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTiBBQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBIENYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUFCM1JKVFVVSDRnRUREeW9Rd1EwTkJnQUFDQmxKUkVGVVdNT3RsMXRzSE9VVngzOHogc3hldmIzdXoxOW5kck8zNGtrQU05c1ltSkNHaGlFb0pwVlF4TktsQWVRSFJGMElmbWdwUmNaSG9HeUFlaXZwV0JDb1Y3VVBEQTBsViAyaEFESXBBb0lZM3haUitJTDdHOXJ1UE4ycnZlMmJWbmIvYk9mSDF3dlBXeXRwT0hIbW1rbWZQZC91Zjh6M2ZPR1dsMGRGU3doY2l5IHpLVkxsN0JhcmV6ZHV4ZkRNQUNRSkFsSmtoRGlmOHZYdjkrdG1MWWFsQ1FKVGRNNGUvWVQ2dXZyMmJObkR5YVRDU0VFcVZTS1RDYU4gdytFa244OWpOcHV4V3Ewb2l2TC9BeURMTWtORFE0UkNJV3BxYXBtY25NQnVkOURYZDU2TEY3OEJKRjU0NFNTUnlDeWFscWF0clkzZCB1M2Rqc1ZpS1FPN2tGV2tyQ2d6RDRPMjMzeUljbmtLU0pHdzJHOWxzRmwzWENRYURmUDMxMXh3OTJzdkREejlNS3JYSTB0SVM0K09qIDdOeTVpK2JtSGRqdGRtcHFhcllFWWRycThLR2hRUVlIQjNqKytWL2ljRGg0L2ZYWE9IejRNRys4OFRzYUc1czRkZXJYWExwMEVVM1QgbUppWVlHRWhUalFhNWVXWGY4dlZxMWN4RElPSEhqcUEzNzk5VXhEeVp0elB6YzN4eFJkZmtNdmw2T29LOHNRVFArT2VlKzdCNVhMVCAyTmlFb2loMGRYVVJpVVR3ZXIyOCt1cXJuRHo1SW5WMWRiaGNMaFlYVTBTanQvajg4OCs1Y2VQRzVqVC9VQ0dFSUJRS29Xa2FnVUFBIElRVDVmSjY2dWpxT0gvOEZYMzc1SmFIUU1BQk5UVTNZYkRhT0hIbU1Bd2NlWW5GeEVhZlRpU3dyNUhJNVpGbEcwelF1WHZ5R2NEaU0gSkVsYkE1QWtpWEE0ekxmZlhtRndjSUR1N2g1OFBqOGZmZlJuVXFrVVI0LzI0bkRZT1gzNk5BQWVqd2VBV0d3ZWdKR1JFUUtCUnJMWiBETHF1Ri9kTXA5TmN1WEtaUkNKUkJrSmVmN2ltYWZUMzk3Tzh2RXdzRm1OMmRwWVRKMDR3T0RqSVgvN3lFVDZmajJQSGp0UFhkNTd2IHYvOGVoOE9CMld3bW1VeVN5V1FJaDZkb2JtNG1tVXlWY0M1SkVvbEVnb0dCN3lnVUNwdDdZR3hzakZoc3ZwaGt4c2ZIY0RwZFBQNzQgVC9ud3d6L1IzMytOcDU3Nk9kWFYxWncrL1RmTVpndFdxNVZVS3NYYzNCeUpSQUtmejA4eXFaWlpLa2tTazVOVDNMb1ZLUm1UMXdZeiBtUXczYm95WElDOFVDZ3dORDlQVXZBT3Z6OC9wanovbSt2WHIzSGQvRnhjdVhLQy8venQ4L2dEenNRVXVYN2xLVGEwVHE5V0twbWtiIDhwM1A1eGdkSFN0bVU3aWRCMlJaSmh5ZTR0eTVjMFh1QUFUZ3JWNmsyejlMaGRsWVhTZ0VjK2xhdnJwdVowZURvTXNYcDJCSTVBc20gRWhrYmM4c0I0c25DN2RYbEFWNWJhNmUzdHhlNzNZNFFZalVQQ0NHSVJ1Y29GQW9seUNYZ1J6dW1PTkE0alNHa29pNVhNS0ZtSDJCZiBZSm85dmxsMFk1WEpGVU5oTERiTjJldjNFMHRYb1VpbElGWURVaU9SV01EaGNDQ0VXS1hBTUF4VVZTMUxGa0pJektRYzVBb21EQ0VWIG4vU3lCVzNad3JUcUpLWlZzcFMza0MrWVVDU0QzUTN6UEgzL0VFRnZCSk5zbEhsQjEzVlVOVm44TnEwcHM5bHMyV1N6b3VPdVRMT2UgVFFGVVcvTWNhcHJrbitOZDNGeTVEMUZJODBCOWlBY0RNeGhDb3MyOVFLMDF6M1RTU1NwblE2SzBZbVl5NmFLeDhwclNNUFFTOXd2QSBhaXJRNWw3QXJPZ2x3Q3lLanI4MlNaM0x5Vk1uVHRHK3A1ZGtycUprTFJLVWgrR3FyS3dVU2dIQWF1VXJ1YnRBZXRuQ3B5UDNFbDJxIFFaTFdXeUZSWWRLcEZsTkViMFZvYm00aWxxdG5SWmU1R3pHWlRFVmo1VFZGUllXdFBHcUIyVVU3QlVOR2tRVHliUkFDY0ZkbHVOYzEgeGNURU9JSHRmdksyVHFaVmUzSE9aaUpKRXBXVnRsSUFzaXpqZERyS2t3ZVFMNWk0T3RQRVNNekRSTUpOdnJCYVFIVkR4cVJBZERwRSBRazNRdmY4d0YyZnVJNW0xcm9KbFl5Q0tvdUJ3T0l2ZnhVVGs4VFJnTXBWWFowTklYUDVQRSs5ZjIwZmYrRTRFRk9ubzlrZm9xTDdNIDhOQWd3V0FYL3M1bk9EdjZJQ014RC9OYUZib2h3UThDc0xLeUVyZmJYYVM3bUFjYUdocHdPQnpFNC9FTnMxakJrTkdXclNTenRtSncgR1FLVzhsWXFMVllVV2ViSWtTUDhTOWY1dzk4L3BuWEhkcktGVE5rTjhIcTlKVTFLRVVCVlZSVXRMYTNFNC9FTlhTZExndWhTRFg4TiBIYURTbEdGbHBVQ3R3MDJWcDVOSDl1NHR1bmRQTU1nSEg3elB3VWVPb09YSFMrcUN4V0todmIwZFJWRktBYXpKcmwyN21KaTR3Y0xDIHdvWmVFRUxnOUFjWkhnNlJ5Mlo1ODFldjQzSTVzVm9zeFRrK240KzIxbGJHeDBZSkJBS29hdUoyOTJ6UTJOakU5dTJCa3RzbXI5L2MgYnJmVDNkMkQyV3plc0lXU0pBbVgwMGxrZGdhLzM0dDNXMFBKNFV0TFM4ek56ZEhSMGNIdzhCQnVkeDBXaTZWWUEzcDZWdmRlTDZZZiBXdGpXMW9hcXFnd01mRmNHd21LeElNc1M4L056dExZK1dkVEhZakUrKyt3Y1o4NThRaVFTUWRjTmxwWVdXVnhNNFhLNVVGV1YvZnYzIDQvRjR5dllzQzN0RlVlanA2VUhYZFVLaFlYUmRMLzZBVkZWVmtjbGtTS2ZUYk51MmpkSFJVZnI2enZQcHAvOWdaR1NFUTRjT2NmTGsgaTl5OGVaTXpaejVoY0hDUWd3Y1BZamFiYVd0cjM5Q3JaUUNFRUpqTlp2YnQyMGQxZFJVREF3Tm9tZ2FBM1c0bkhvK2phUnJ2dnZ0NyBZckVZeTh2TGRIVUZhVzl2cDZPamcyZWZmUTZBbHBZVzNudnZqeHc3ZGh5djE3dHBWN3hoV3k2RVFGRVVPanU3OEhnYUNJV0dDWWZEIDJPMTI1dWZuY2J2ZFNKTE1ZNC85aEdBd1NFUEROcTVkK3pmbnozL0djODg5ajgvbm82YW1sbmc4VGp3ZXcrLzNsL1FaZHdTd1hyeGUgTC9YMTlVU2pVVXdtaFlvS0d5Kzk5REoxZFhXb3FzclUxQlNUazVPMHQ3ZWpxaW9YTG54RmMzTXo3N3p6TnUzdE8ybHNiQ3JwZ01vQyArMDQvcCt0dkFLeVdia1ZSU0NhVHFLb0tDQ29xYk5UVzF2TFdXMjh5TXpQRHlzb3lYcStYVTZkK1F5RFFoQkNiQTdpNzhuV2JGaUZFIHNXbzZIQTVhV2xwb2FXa3RacmRISC8weHQyNUYyTGx6RjYrODhocU5qVnNmZmxjVTNBblFtaGlHUVdkbkowOC8vUXk5dlU5U1gxKy8gcGV2WDVMOGJPTXNFdXorQ25nQUFBQmwwUlZoMFEyOXRiV1Z1ZEFCRGNtVmhkR1ZrSUhkcGRHZ2dSMGxOVUZlQkRoY0FBQUFsZEVWWSBkR1JoZEdVNlkzSmxZWFJsQURJd01UZ3RNREV0TUROVU1UWTZOREE2TkRVck1ERTZNRERlN1VaMEFBQUFKWFJGV0hSa1lYUmxPbTF2IFpHbG1lUUF5TURFNExUQXhMVEF6VkRFMk9qUXdPalExS3pBeE9qQXdyN0QreUFBQUFBQkpSVTVFcmtKZ2dnPT0nLFxuZXRhdCAgICAgICAgOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQSBDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFBQjNSSlRVVUg0Z0VERHlvUXdRME5CZ0FBQ0JsSlJFRlVXTU90bDF0c0hPVVZ4Mzh6IHN4ZXZiM3V6MTluZHJPMzRra0FNOXNZbUpDR2hpRW9KcFZReE5LbEFlUUhSRjBJZm1ncFJjWkhvR3lBZWl2cFdCQ29WN1VQREEwbFYgMmhBRElwQW9JWTN4WlIrSUw3RzlydVBOMnJ2ZTJiVm5iL2JPZkgxd3ZQV3l0cE9ISG1ta21mUGQvdWY4ejNmT0dXbDBkRlN3aGNpeSB6S1ZMbDdCYXJlemR1eGZETUFDUUpBbEpraERpZjh2WHY5K3RtTFlhbENRSlRkTTRlL1lUNnV2cjJiTm5EeWFUQ1NFRXFWU0tUQ2FOIHcrRWtuODlqTnB1eFdxMG9pdkwvQXlETE1rTkRRNFJDSVdwcWFwbWNuTUJ1ZDlEWGQ1NkxGNzhCSkY1NDRTU1J5Q3lhbHFhdHJZM2QgdTNkanNWaUtRTzdrRldrckNnekQ0TzIzM3lJY25rS1NKR3cyRzlsc0ZsM1hDUWFEZlAzMTF4dzkyc3ZERHo5TUtyWEkwdElTNCtPaiA3Tnk1aStibUhkanRkbXBxYXJZRVlkcnE4S0doUVFZSEIzaisrVi9pY0RoNC9mWFhPSHo0TUcrODhUc2FHNXM0ZGVyWFhMcDBFVTNUIG1KaVlZR0VoVGpRYTVlV1hmOHZWcTFjeERJT0hIanFBMzc5OVV4RHladHpQemMzeHhSZGZrTXZsNk9vSzhzUVRQK09lZSs3QjVYTFQgMk5pRW9paDBkWFVSaVVUd2VyMjgrdXFybkR6NUluVjFkYmhjTGhZWFUwU2p0L2o4ODgrNWNlUEc1alQvVUNHRUlCUUtvV2thZ1VBQSBJUVQ1Zko2NnVqcU9ILzhGWDM3NUphSFFNQUJOVFUzWWJEYU9ISG1NQXdjZVluRnhFYWZUaVN3cjVISTVaRmxHMHpRdVh2eUdjRGlNIEpFbGJBNUFraVhBNHpMZmZYbUZ3Y0lEdTdoNThQajhmZmZSblVxa1VSNC8yNG5EWU9YMzZOQUFlandlQVdHd2VnSkdSRVFLQlJyTFogRExxdUYvZE1wOU5jdVhLWlJDSlJCa0plZjdpbWFmVDM5N084dkV3c0ZtTjJkcFlUSjA0d09EaklYLzd5RVQ2ZmoyUEhqdFBYZDU3diB2LzhlaDhPQjJXd21tVXlTeVdRSWg2ZG9ibTRtbVV5VmNDNUpFb2xFZ29HQjd5Z1VDcHQ3WUd4c2pGaHN2cGhreHNmSGNEcGRQUDc0IFQvbnd3ei9SMzMrTnA1NzZPZFhWMVp3Ky9UZk1aZ3RXcTVWVUtzWGMzQnlKUkFLZnowOHlxWlpaS2trU2s1TlQzTG9WS1JtVDF3WXogbVF3M2JveVhJQzhVQ2d3TkQ5UFV2QU92ejgvcGp6L20rdlhyM0hkL0Z4Y3VYS0MvL3p0OC9nRHpzUVV1WDdsS1RhMFRxOVdLcG1rYiA4cDNQNXhnZEhTdG1VN2lkQjJSWkpoeWU0dHk1YzBYdUFBVGdyVjZrMno5TGhkbFlYU2dFYytsYXZycHVaMGVEb01zWHAyQkk1QXNtIEVoa2JjOHNCNHNuQzdkWGxBVjViYTZlM3R4ZTczWTRRWWpVUENDR0lSdWNvRkFvbHlDWGdSenVtT05BNGpTR2tvaTVYTUtGbUgyQmYgWUpvOXZsbDBZNVhKRlVOaExEYk4yZXYzRTB0WG9VaWxJRllEVWlPUldNRGhjQ0NFV0tYQU1BeFVWUzFMRmtKSXpLUWM1QW9tRENFViBuL1N5QlczWndyVHFKS1pWc3BTM2tDK1lVQ1NEM1EzelBIMy9FRUZ2QkpOc2xIbEIxM1ZVTlZuOE5xMHBzOWxzMldTem91T3VUTE9lIFRRRlVXL01jYXBya24rTmQzRnk1RDFGSTgwQjlpQWNETXhoQ29zMjlRSzAxejNUU1NTcG5RNkswWW1ZeTZhS3g4cHJTTVBRUzl3dkEgYWlyUTVsN0FyT2dsd0N5S2pyODJTWjNMeVZNblR0RytwNWRrcnFKa0xSS1VoK0dxckt3VVNnSEFhdVVydWJ0QWV0bkNweVAzRWwycSBRWkxXV3lGUllkS3BGbE5FYjBWb2JtNGlscXRuUlplNUd6R1pURVZqNVRWRlJZV3RQR3FCMlVVN0JVTkdrUVR5YlJBQ2NGZGx1TmMxIHhjVEVPSUh0ZnZLMlRxWlZlM0hPWmlKSkVwV1Z0bElBc2l6amREcktrd2VRTDVpNE90UEVTTXpEUk1KTnZyQmFRSFZEeHFSQWREcEUgUWszUXZmOHdGMmZ1STVtMXJvSmxZeUNLb3VCd09JdmZ4VVRrOFRSZ01wVlhaME5JWFA1UEUrOWYyMGZmK0U0RUZPbm85a2ZvcUw3TSA4TkFnd1dBWC9zNW5PRHY2SUNNeEQvTmFGYm9od1E4Q3NMS3lFcmZiWGFTN21BY2FHaHB3T0J6RTQvRU5zMWpCa05HV3JTU3p0bUp3IEdRS1c4bFlxTFZZVVdlYklrU1A4UzlmNXc5OC9wblhIZHJLRlROa044SHE5SlUxS0VVQlZWUlV0TGEzRTQvRU5YU2RMZ3VoU0RYOE4gSGFEU2xHRmxwVUN0dzAyVnA1Tkg5dTR0dW5kUE1NZ0hIN3pQd1VlT29PWEhTK3FDeFdLaHZiMGRSVkZLQWF6SnJsMjdtSmk0d2NMQyB3b1plRUVMZzlBY1pIZzZSeTJaNTgxZXY0M0k1c1Zvc3hUaytuNCsyMWxiR3gwWUpCQUtvYXVKMjkyelEyTmpFOXUyQmt0c21yOS9jIGJyZlQzZDJEMld6ZXNJV1NKQW1YMDBsa2RnYS8zNHQzVzBQSjRVdExTOHpOemRIUjBjSHc4QkJ1ZHgwV2k2VllBM3A2VnZkZUw2WWYgV3RqVzFvYXFxZ3dNZkZjR3dtS3hJTXNTOC9OenRMWStXZFRIWWpFKysrd2NaODU4UWlRU1FkY05scFlXV1Z4TTRYSzVVRldWL2Z2MyA0L0Y0eXZZc0MzdEZVZWpwNlVIWGRVS2hZWFJkTC82QVZGVlZrY2xrU0tmVGJOdTJqZEhSVWZyNnp2UHBwLzlnWkdTRVE0Y09jZkxrIGk5eThlWk16Wno1aGNIQ1Fnd2NQWWphYmFXdHIzOUNyWlFDRUVKak5admJ0MjBkMWRSVURBd05vbWdhQTNXNG5IbytqYVJydnZ2dDcgWXJFWXk4dkxkSFVGYVc5dnA2T2pnMmVmZlE2QWxwWVczbnZ2anh3N2RoeXYxN3RwVjd4aFd5NkVRRkVVT2p1NzhIZ2FDSVdHQ1lmRCAyTzEyNXVmbmNidmRTSkxNWTQvOWhHQXdTRVBETnE1ZCt6Zm56My9HYzg4OWo4L25vNmFtbG5nOFRqd2V3Ky8zbC9RWmR3U3dYcnhlIEwvWDE5VVNqVVV3bWhZb0tHeSs5OURKMWRYV29xc3JVMUJTVGs1TzB0N2VqcWlvWExueEZjM016Nzd6ek51M3RPMmxzYkNycGdNb0MgKzA0L3ArdHZBS3lXYmtWUlNDYVRxS29LQ0NvcWJOVFcxdkxXVzI4eU16UER5c295WHErWFU2ZCtReURRaEJDYkE3aTc4bldiRmlGRSBzV282SEE1YVdscG9hV2t0WnJkSEgvMHh0MjVGMkxsekY2Kzg4aHFOalZzZmZsY1UzQW5RbWhpR1FXZG5KMDgvL1F5OXZVOVNYMSsvIHBldlg1TDhiT01zRXV6K0NuZ0FBQUJsMFJWaDBRMjl0YldWdWRBQkRjbVZoZEdWa0lIZHBkR2dnUjBsTlVGZUJEaGNBQUFBbGRFVlkgZEdSaGRHVTZZM0psWVhSbEFESXdNVGd0TURFdE1ETlVNVFk2TkRBNk5EVXJNREU2TUREZTdVWjBBQUFBSlhSRldIUmtZWFJsT20xdiBaR2xtZVFBeU1ERTRMVEF4TFRBelZERTJPalF3T2pRMUt6QXhPakF3cjdEK3lBQUFBQUJKUlU1RXJrSmdnZz09JyxcbmluZGVwZW5kYW50IDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUEgQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQUIzUkpUVVVINGdFRER5b1F3UTBOQmdBQUNCbEpSRUZVV01PdGwxdHNIT1VWeDM4eiBzeGV2YjN1ejE5bmRyTzM0a2tBTTlzWW1KQ0doaUVvSnBWUXhOS2xBZVFIUkYwSWZtZ3BSY1pIb0d5QWVpdnBXQkNvVjdVUERBMGxWIDJoQURJcEFvSVkzeFpSK0lMN0c5cnVQTjJydmUyYlZuYi9iT2ZIMXd2UFd5dHBPSEhtbWttZlBkL3VmOHozZk9HV2wwZEZTd2hjaXkgektWTGw3QmFyZXpkdXhmRE1BQ1FKQWxKa2hEaWY4dlh2OSt0bUxZYWxDUUpUZE00ZS9ZVDZ1dnIyYk5uRHlhVENTRUVxVlNLVENhTiB3K0Vrbjg5ak5wdXhXcTBvaXZML0F5RExNa05EUTRSQ0lXcHFhcG1jbk1CdWQ5RFhkNTZMRjc4QkpGNTQ0U1NSeUN5YWxxYXRyWTNkIHUzZGpzVmlLUU83a0ZXa3JDZ3pENE8yMzN5SWNua0tTSkd3Mkc5bHNGbDNYQ1FhRGZQMzExeHc5MnN2RER6OU1LclhJMHRJUzQrT2ogN055NWkrYm1IZGp0ZG1wcWFyWUVZZHJxOEtHaFFRWUhCM2orK1YvaWNEaDQvZlhYT0h6NE1HKzg4VHNhRzVzNGRlclhYTHAwRVUzVCBtSmlZWUdFaFRqUWE1ZVdYZjh2VnExY3hESU9ISGpxQTM3OTlVeER5WnR6UHpjM3h4UmRma012bDZPb0s4c1FUUCtPZWUrN0I1WExUIDJOaUVvaWgwZFhVUmlVVHdlcjI4K3Vxcm5EejVJblYxZGJoY0xoWVhVMFNqdC9qODg4KzVjZVBHNWpUL1VDR0VJQlFLb1drYWdVQUEgSVFUNWZKNjZ1anFPSC84RlgzNzVKYUhRTUFCTlRVM1liRGFPSEhtTUF3Y2VZbkZ4RWFmVGlTd3I1SEk1WkZsRzB6UXVYdnlHY0RpTSBKRWxiQTVBa2lYQTR6TGZmWG1Gd2NJRHU3aDU4UGo4ZmZmUm5VcWtVUjQvMjRuRFlPWDM2TkFBZWp3ZUFXR3dlZ0pHUkVRS0JSckxaIERMcXVGL2RNcDlOY3VYS1pSQ0pSQmtKZWY3aW1hZlQzOTdPOHZFd3NGbU4yZHBZVEowNHdPRGpJWC83eUVUNmZqMlBIanRQWGQ1N3Ygdi84ZWg4T0IyV3dtbVV5U3lXUUloNmRvYm00bW1VeVZjQzVKRW9sRWdvR0I3eWdVQ3B0N1lHeHNqRmhzdnBoa3hzZkhjRHBkUFA3NCBUL253d3ovUjMzK05wNTc2T2RYVjFadysvVGZNWmd0V3E1VlVLc1hjM0J5SlJBS2Z6MDh5cVpaWktra1NrNU5UM0xvVktSbVQxd1l6IG1RdzNib3lYSUM4VUNnd05EOVBVdkFPdno4L3Bqei9tK3ZYcjNIZC9GeGN1WEtDLy96dDgvZ0R6c1FVdVg3bEtUYTBUcTlXS3Bta2IgOHAzUDV4Z2RIU3RtVTdpZEIyUlpKaHllNHR5NWMwWHVBQVRnclY2azJ6OUxoZGxZWFNnRWMrbGF2cnB1WjBlRG9Nc1hwMkJJNUFzbSBFaGtiYzhzQjRzbkM3ZFhsQVY1YmE2ZTN0eGU3M1k0UVlqVVBDQ0dJUnVjb0ZBb2x5Q1hnUnp1bU9OQTRqU0drb2k1WE1LRm1IMkJmIFlKbzl2bGwwWTVYSkZVTmhMRGJOMmV2M0UwdFhvVWlsSUZZRFVpT1JXTURoY0NDRVdLWEFNQXhVVlMxTEZrSkl6S1FjNUFvbURDRVYgbi9TeUJXM1p3clRxSktaVnNwUzNrQytZVUNTRDNRM3pQSDMvRUVGdkJKTnNsSGxCMTNWVU5WbjhOcTBwczlsczJXU3pvdU91VExPZSBUUUZVVy9NY2FwcmtuK05kM0Z5NUQxRkk4MEI5aUFjRE14aENvczI5UUswMXozVFNTU3BuUTZLMFltWXk2YUt4OHByU01QUVM5d3ZBIGFpclE1bDdBck9nbHdDeUtqcjgyU1ozTHlWTW5UdEcrcDVka3JxSmtMUktVaCtHcXJLd1VTZ0hBYXVVcnVidEFldG5DcHlQM0VsMnEgUVpMV1d5RlJZZEtwRmxORWIwVm9ibTRpbHF0blJaZTVHekdaVEVWajVUVkZSWVd0UEdxQjJVVTdCVU5Ha1FUeWJSQUNjRmRsdU5jMSB4Y1RFT0lIdGZ2SzJUcVpWZTNIT1ppSkpFcFdWdGxJQXNpempkRHJLa3dlUUw1aTRPdFBFU016RFJNSk52ckJhUUhWRHhxUkFkRHBFIFFrM1F2Zjh3RjJmdUk1bTFyb0psWXlDS291QndPSXZmeFVUazhUUmdNcFZYWjBOSVhQNVBFKzlmMjBmZitFNEVGT25vOWtmb3FMN00gOE5BZ3dXQVgvczVuT0R2NklDTXhEL05hRmJvaHdROENzTEt5RXJmYlhhUzdtQWNhR2hwd09CekU0L0VOczFqQmtOR1dyU1N6dG1KdyBHUUtXOGxZcUxWWVVXZWJJa1NQOFM5ZjV3OTgvcG5YSGRyS0ZUTmtOOEhxOUpVMUtFVUJWVlJVdExhM0U0L0VOWFNkTGd1aFNEWDhOIEhhRFNsR0ZscFVDdHcwMlZwNU5IOXU0dHVuZFBNTWdISDd6UHdVZU9vT1hIUytxQ3hXS2h2YjBkUlZGS0FhekpybDI3bUppNHdjTEMgd29aZUVFTGc5QWNaSGc2UnkyWjU4MWV2NDNJNXNWb3N4VGsrbjQrMjFsYkd4MFlKQkFLb2F1SjI5MnpRMk5qRTl1MkJrdHNtcjkvYyBicmZUM2QyRDJXemVzSVdTSkFtWDAwbGtkZ2EvMzR0M1cwUEo0VXRMUzh6TnpkSFIwY0h3OEJCdWR4MFdpNlZZQTNwNlZ2ZGVMNllmIFd0alcxb2FxcWd3TWZGY0d3bUt4SU1zUzgvTnp0TFkrV2RUSFlqRSsrK3djWjg1OFFpUVNRZGNObHBZV1dWeE00WEs1VUZXVi9mdjMgNC9GNHl2WXNDM3RGVWVqcDZVSFhkVUtoWVhSZEwvNkFWRlZWa2Nsa1NLZlRiTnUyamRIUlVmcjZ6dlBwcC85Z1pHU0VRNGNPY2ZMayBpOXk4ZVpNelp6NWhjSENRZ3djUFlqYWJhV3RyMzlDclpRQ0VFSmpOWnZidDIwZDFkUlVEQXdOb21nYUEzVzRuSG8ramFScnZ2dnQ3IFlyRVl5OHZMZEhVRmFXOXZwNk9qZzJlZmZRNkFscFlXM252dmp4dzdkaHl2MTd0cFY3eGhXeTZFUUZFVU9qdTc4SGdhQ0lXR0NZZkQgMk8xMjV1Zm5jYnZkU0pMTVk0LzloR0F3U0VQRE5xNWQremZuejMvR2M4ODlqOC9ubzZhbWxuZzhUandldysvM2wvUVpkd1N3WHJ4ZSBML1gxOVVTalVVd21oWW9LR3krOTlESjFkWFdvcXNyVTFCU1RrNU8wdDdlanFpb1hMbnhGYzNNejc3enpOdTN0TzJsc2JDcnBnTW9DICswNC9wK3R2QUt5V2JrVlJTQ2FUcUtvS0NDb3FiTlRXMXZMV1cyOHlNelBEeXNveVhxK1hVNmQrUXlEUWhCQ2JBN2k3OG5XYkZpRkUgc1dvNkhBNWFXbHBvYVdrdFpyZEhILzB4dDI1RjJMbHpGNis4OGhxTmpWc2ZmbGNVM0FuUW1oaUdRV2RuSjA4Ly9ReTl2VTlTWDErLyBwZXZYNUw4Yk9Nc0V1eitDbmdBQUFCbDBSVmgwUTI5dGJXVnVkQUJEY21WaGRHVmtJSGRwZEdnZ1IwbE5VRmVCRGhjQUFBQWxkRVZZIGRHUmhkR1U2WTNKbFlYUmxBREl3TVRndE1ERXRNRE5VTVRZNk5EQTZORFVyTURFNk1ERGU3VVowQUFBQUpYUkZXSFJrWVhSbE9tMXYgWkdsbWVRQXlNREU0TFRBeExUQXpWREUyT2pRd09qUTFLekF4T2pBd3I3RCt5QUFBQUFCSlJVNUVya0pnZ2c9PScsXG5yaWVuICAgICAgICA6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTiBBQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBIENYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUFCM1JKVFVVSDRnRUREeW9Rd1EwTkJnQUFDQmxKUkVGVVdNT3RsMXRzSE9VVngzOHogc3hldmIzdXoxOW5kck8zNGtrQU05c1ltSkNHaGlFb0pwVlF4TktsQWVRSFJGMElmbWdwUmNaSG9HeUFlaXZwV0JDb1Y3VVBEQTBsViAyaEFESXBBb0lZM3haUitJTDdHOXJ1UE4ycnZlMmJWbmIvYk9mSDF3dlBXeXRwT0hIbW1rbWZQZC91Zjh6M2ZPR1dsMGRGU3doY2l5IHpLVkxsN0JhcmV6ZHV4ZkRNQUNRSkFsSmtoRGlmOHZYdjkrdG1MWWFsQ1FKVGRNNGUvWVQ2dXZyMmJObkR5YVRDU0VFcVZTS1RDYU4gdytFa244OWpOcHV4V3Ewb2l2TC9BeURMTWtORFE0UkNJV3BxYXBtY25NQnVkOURYZDU2TEY3OEJKRjU0NFNTUnlDeWFscWF0clkzZCB1M2Rqc1ZpS1FPN2tGV2tyQ2d6RDRPMjMzeUljbmtLU0pHdzJHOWxzRmwzWENRYURmUDMxMXh3OTJzdkREejlNS3JYSTB0SVM0K09qIDdOeTVpK2JtSGRqdGRtcHFhcllFWWRycThLR2hRUVlIQjNqKytWL2ljRGg0L2ZYWE9IejRNRys4OFRzYUc1czRkZXJYWExwMEVVM1QgbUppWVlHRWhUalFhNWVXWGY4dlZxMWN4RElPSEhqcUEzNzk5VXhEeVp0elB6YzN4eFJkZmtNdmw2T29LOHNRVFArT2VlKzdCNVhMVCAyTmlFb2loMGRYVVJpVVR3ZXIyOCt1cXJuRHo1SW5WMWRiaGNMaFlYVTBTanQvajg4OCs1Y2VQRzVqVC9VQ0dFSUJRS29Xa2FnVUFBIElRVDVmSjY2dWpxT0gvOEZYMzc1SmFIUU1BQk5UVTNZYkRhT0hIbU1Bd2NlWW5GeEVhZlRpU3dyNUhJNVpGbEcwelF1WHZ5R2NEaU0gSkVsYkE1QWtpWEE0ekxmZlhtRndjSUR1N2g1OFBqOGZmZlJuVXFrVVI0LzI0bkRZT1gzNk5BQWVqd2VBV0d3ZWdKR1JFUUtCUnJMWiBETHF1Ri9kTXA5TmN1WEtaUkNKUkJrSmVmN2ltYWZUMzk3Tzh2RXdzRm1OMmRwWVRKMDR3T0RqSVgvN3lFVDZmajJQSGp0UFhkNTd2IHYvOGVoOE9CMld3bW1VeVN5V1FJaDZkb2JtNG1tVXlWY0M1SkVvbEVnb0dCN3lnVUNwdDdZR3hzakZoc3ZwaGt4c2ZIY0RwZFBQNzQgVC9ud3d6L1IzMytOcDU3Nk9kWFYxWncrL1RmTVpndFdxNVZVS3NYYzNCeUpSQUtmejA4eXFaWlpLa2tTazVOVDNMb1ZLUm1UMXdZeiBtUXczYm95WElDOFVDZ3dORDlQVXZBT3Z6OC9wanovbSt2WHIzSGQvRnhjdVhLQy8venQ4L2dEenNRVXVYN2xLVGEwVHE5V0twbWtiIDhwM1A1eGdkSFN0bVU3aWRCMlJaSmh5ZTR0eTVjMFh1QUFUZ3JWNmsyejlMaGRsWVhTZ0VjK2xhdnJwdVowZURvTXNYcDJCSTVBc20gRWhrYmM4c0I0c25DN2RYbEFWNWJhNmUzdHhlNzNZNFFZalVQQ0NHSVJ1Y29GQW9seUNYZ1J6dW1PTkE0alNHa29pNVhNS0ZtSDJCZiBZSm85dmxsMFk1WEpGVU5oTERiTjJldjNFMHRYb1VpbElGWURVaU9SV01EaGNDQ0VXS1hBTUF4VVZTMUxGa0pJektRYzVBb21EQ0VWIG4vU3lCVzNad3JUcUpLWlZzcFMza0MrWVVDU0QzUTN6UEgzL0VFRnZCSk5zbEhsQjEzVlVOVm44TnEwcHM5bHMyV1N6b3VPdVRMT2UgVFFGVVcvTWNhcHJrbitOZDNGeTVEMUZJODBCOWlBY0RNeGhDb3MyOVFLMDF6M1RTU1NwblE2SzBZbVl5NmFLeDhwclNNUFFTOXd2QSBhaXJRNWw3QXJPZ2x3Q3lLanI4MlNaM0x5Vk1uVHRHK3A1ZGtycUprTFJLVWgrR3FyS3dVU2dIQWF1VXJ1YnRBZXRuQ3B5UDNFbDJxIFFaTFdXeUZSWWRLcEZsTkViMFZvYm00aWxxdG5SWmU1R3pHWlRFVmo1VFZGUllXdFBHcUIyVVU3QlVOR2tRVHliUkFDY0ZkbHVOYzEgeGNURU9JSHRmdksyVHFaVmUzSE9aaUpKRXBXVnRsSUFzaXpqZERyS2t3ZVFMNWk0T3RQRVNNekRSTUpOdnJCYVFIVkR4cVJBZERwRSBRazNRdmY4d0YyZnVJNW0xcm9KbFl5Q0tvdUJ3T0l2ZnhVVGs4VFJnTXBWWFowTklYUDVQRSs5ZjIwZmYrRTRFRk9ubzlrZm9xTDdNIDhOQWd3V0FYL3M1bk9EdjZJQ014RC9OYUZib2h3UThDc0xLeUVyZmJYYVM3bUFjYUdocHdPQnpFNC9FTnMxakJrTkdXclNTenRtSncgR1FLVzhsWXFMVllVV2ViSWtTUDhTOWY1dzk4L3BuWEhkcktGVE5rTjhIcTlKVTFLRVVCVlZSVXRMYTNFNC9FTlhTZExndWhTRFg4TiBIYURTbEdGbHBVQ3R3MDJWcDVOSDl1NHR1bmRQTU1nSEg3elB3VWVPb09YSFMrcUN4V0todmIwZFJWRktBYXpKcmwyN21KaTR3Y0xDIHdvWmVFRUxnOUFjWkhnNlJ5Mlo1ODFldjQzSTVzVm9zeFRrK240KzIxbGJHeDBZSkJBS29hdUoyOTJ6UTJOakU5dTJCa3RzbXI5L2MgYnJmVDNkMkQyV3plc0lXU0pBbVgwMGxrZGdhLzM0dDNXMFBKNFV0TFM4ek56ZEhSMGNIdzhCQnVkeDBXaTZWWUEzcDZWdmRlTDZZZiBXdGpXMW9hcXFnd01mRmNHd21LeElNc1M4L056dExZK1dkVEhZakUrKyt3Y1o4NThRaVFTUWRjTmxwWVdXVnhNNFhLNVVGV1YvZnYzIDQvRjR5dllzQzN0RlVlanA2VUhYZFVLaFlYUmRMLzZBVkZWVmtjbGtTS2ZUYk51MmpkSFJVZnI2enZQcHAvOWdaR1NFUTRjT2NmTGsgaTl5OGVaTXpaejVoY0hDUWd3Y1BZamFiYVd0cjM5Q3JaUUNFRUpqTlp2YnQyMGQxZFJVREF3Tm9tZ2FBM1c0bkhvK2phUnJ2dnZ0NyBZckVZeTh2TGRIVUZhVzl2cDZPamcyZWZmUTZBbHBZVzNudnZqeHc3ZGh5djE3dHBWN3hoV3k2RVFGRVVPanU3OEhnYUNJV0dDWWZEIDJPMTI1dWZuY2J2ZFNKTE1ZNC85aEdBd1NFUEROcTVkK3pmbnozL0djODg5ajgvbm82YW1sbmc4VGp3ZXcrLzNsL1FaZHdTd1hyeGUgTC9YMTlVU2pVVXdtaFlvS0d5Kzk5REoxZFhXb3FzclUxQlNUazVPMHQ3ZWpxaW9YTG54RmMzTXo3N3p6TnUzdE8ybHNiQ3JwZ01vQyArMDQvcCt0dkFLeVdia1ZSU0NhVHFLb0tDQ29xYk5UVzF2TFdXMjh5TXpQRHlzb3lYcStYVTZkK1F5RFFoQkNiQTdpNzhuV2JGaUZFIHNXbzZIQTVhV2xwb2FXa3RacmRISC8weHQyNUYyTGx6RjYrODhocU5qVnNmZmxjVTNBblFtaGlHUVdkbkowOC8vUXk5dlU5U1gxKy8gcGV2WDVMOGJPTXNFdXorQ25nQUFBQmwwUlZoMFEyOXRiV1Z1ZEFCRGNtVmhkR1ZrSUhkcGRHZ2dSMGxOVUZlQkRoY0FBQUFsZEVWWSBkR1JoZEdVNlkzSmxZWFJsQURJd01UZ3RNREV0TUROVU1UWTZOREE2TkRVck1ERTZNRERlN1VaMEFBQUFKWFJGV0hSa1lYUmxPbTF2IFpHbG1lUUF5TURFNExUQXhMVEF6VkRFMk9qUXdPalExS3pBeE9qQXdyN0QreUFBQUFBQkpSVTVFcmtKZ2dnPT0nLFxufTtcblxudmFyIGJhbmRlYXVfbXNncyA9IHtcbiAgICBpbmNvbm51ICAgICA6IFwiSW5jb25udVwiLFxuICAgIGNhcGl0YWwgICAgIDogXCJMaWVucyBjYXBpdGFsaXN0aXF1ZXNcIixcbiAgICBldGF0ICAgICAgICA6IFwiTGllbnMgw6l0YXRpcXVlc1wiLFxuICAgIGluZGVwZW5kYW50IDogXCJJbmTDqXBlbmRhbnQgZmluYW5jacOocmVtZW50XCIsXG4gICAgcmllbiAgICAgICAgOiBcInJpZW5cIlxufTtcblxudmFyIG93bmVyX21zZ3MgPSB7XG4gICAgaW5jb25udSAgICAgOiBcIkNlIHNpdGUgbidlc3QgcGFzIHLDqWbDqXJlbmPDqSBkYW5zIG5vdHJlIGJhc2UgZGUgZG9ubsOpZXMuXCIsXG4gICAgY2FwaXRhbCAgICAgOiBcIlZvaWNpIGxlcyBsaWVucyBjYXBpdGFsaXN0aXF1ZXMgYXZlYyBsZXMgcHJpbmNpcGF1eCBhY3Rpb25uYWlyZXMgZHUgbcOpZGlhIHF1ZSB2b3VzIGNvbnN1bHRleiA6XCIsXG4gICAgZXRhdCAgICAgICAgOiBcIkNlIG3DqWRpYSBlc3QgbGEgcHJvcHJpw6l0w6kgZHUgb3UgZGVzIMOpdGF0cyBzdWl2YW50cyA6XCIsXG4gICAgaW5kZXBlbmRhbnQgOiBcIkNlIHNpdGUgbidhIHBhcyBkZSBsaWVuIGNhcGl0YWxpc3RpcXVlIG91IMOpdGF0aXF1ZSDDoCBub3RyZSBjb25uYWlzc2FuY2VcIixcbiAgICByaWVuICAgICAgICA6IFwicmllblwiXG59O1xuXG4vLyB2YXJzIHRvIHNob3cgaW4gcHJlZnNcbnZhciBjb2xvcnMgPSB7XG4gICAgaW5jb25udSAgICAgOiBcIiMwMGE4NmJcIiwgLy8gYydlc3QgcXVlIGRlIGwnaW5mbyA6KVxuICAgIGNhcGl0YWwgICAgIDogXCIjMDBhODZiXCIsIC8vIGMnZXN0IHF1ZSBkZSBsJ2luZm8gOilcbiAgICBldGF0ICAgICAgICA6IFwiIzAwYTg2YlwiLCAvLyBjJ2VzdCBxdWUgZGUgbCdpbmZvIDopXG4gICAgaW5kZXBlbmRhbnQgOiBcIiMwMGE4NmJcIiwgLy8gYydlc3QgcXVlIGRlIGwnaW5mbyA6KVxuICAgIHJpZW4gICAgICAgIDogXCIjMDBhODZiXCIgLy8gYydlc3QgcXVlIGRlIGwnaW5mbyA6KVxuICAgIC8vXCIjQTJBOUFFXCIsIC8vIGdyaXNcbiAgICAvL1wiI0Q1MDMwM1wiLCAvLyByb3VnZVxuICAgIC8vXCIjRjVBNzI1XCIsIC8vIGphdW5lXG4gICAgLy9cIiMxMjlBRjBcIiwgLy8gYmxldVxuICAgIC8vXCIjNDY4ODQ3XCIsIC8vIHZlcnRcbiAgICAvL1wiIzQ2ODg0N1wiICAvLyBJTlNPVU1JUyBBVVNTSSA6RFxufTtcbi8vIGxldCBwb3NzZWRleF9jb2xvcnMgPSBbIFwiI0EyQTlBRVwiLCBcIiMxMjlBRjBcIiwgXCIjRDUwMzAzXCIsIFwiI0Y1QTcyNVwiLCBcIiM0Njg4NDdcIiBdO1xuLy8gbGV0IHBvc3NlZGV4X2Rlc2NzID0gWyBcImluY2xhc3NhYmxlXCIsIFwicGFyb2RpcXVlXCIsIFwicGFzIGZpYWJsZSBkdSB0b3V0XCIsIFwicGV1IGZpYWJsZVwiLCBcImZpYWJsZVwiIF07XG5cbnZhciBiYXNlX3VybCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiK2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lK1wiL21kaXBsby5qc29uP21haj1cIittYWo7XG5cbmV4cG9ydCB2YXIgUG9zc2VkZXggPSB7XG5cbiAgICBjdXJyZW50X2VudGl0eSA6IG51bGwsXG5cbiAgICBkYXRhIDoge30sXG4gICAgcmVnZXhfdXJsX3NldWxlIDogbmV3IFJlZ0V4cCgvXihodHRwW3NdPzpcXC9cXC8oW14vXSspXFwvW15cIiAsXSspW15cIl17MSwyfSQvZyksXG4gICAgcmVnZXhfdXJsX21hcmtkb3duIDogbmV3IFJlZ0V4cCgvXFxbKFteXFxdXSo/KVxcXVxcKChbXlxcKV0qPylcXClbLCBdezAsMn0vZ20pLFxuXG4gICAgbG9hZEpTT04gOiBmdW5jdGlvbihwYXRoLCBzdWNjZXNzLCBlcnJvcikge1xuICAgICAgICAvLyBoZXJlIHRvIGhlbHAgZGlmZiB3aXRoIGV4dGVuc2lvbiB2ZXJzaW9uXG4gICAgfSxcblxuICAgIHJlbW92ZUFmdGVyTGFzdFNsYXNoOiBmdW5jdGlvbih1cmwpe1xuICAgICAgICBpZih1cmwubGFzdEluZGV4T2YoJy8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKDAsIHVybC5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbGFzdFNsYXNoOiBmdW5jdGlvbih1cmwpIHsgLy8gcmVtb3ZlIHRoZSBsYXN0IHNsYXNoIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZ1xuICAgICAgICBpZih1cmwubGFzdEluZGV4T2YoJy8nKSA9PSB1cmwubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVybF9jbGVhbmVyIDogZnVuY3Rpb24odXJsKXtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgICAgICAgICAgLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgnd3d3LicsIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZShcImh0dHBzOi8vXCIsIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZShcIlxcblwiLCBcIlwiKTtcbiAgICB9LFxuXG4gICAgZXh0cmFjdFVybHNGcm9tUmF3IDogZnVuY3Rpb24ocmF3X3NvdXJjZXMpIHtcbiAgICAgICAgY29uc3Qgc291cmNlcyA9IFtdO1xuXG4gICAgICAgIC8vIE1hcmtkb3duIHN0eWxlXG4gICAgICAgIHZhciBtYXRjaCA9IHRoaXMucmVnZXhfdXJsX21hcmtkb3duLmV4ZWMocmF3X3NvdXJjZXMpO1xuICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgc291cmNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBcInVybFwiICAgOiBtYXRjaFsyXSxcbiAgICAgICAgICAgICAgICBcInRpdGxlXCIgOiBtYXRjaFsxXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXRjaCA9IHRoaXMucmVnZXhfdXJsX21hcmtkb3duLmV4ZWMocmF3X3NvdXJjZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVVJMIHRvdXRlIHNldWxlXG4gICAgICAgIG1hdGNoID0gdGhpcy5yZWdleF91cmxfc2V1bGUuZXhlYyhyYXdfc291cmNlcyk7XG4gICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIFwidXJsXCIgICA6IG1hdGNoWzFdLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIiA6IG1hdGNoWzJdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hdGNoID0gdGhpcy5yZWdleF91cmxfc2V1bGUuZXhlYyhyYXdfc291cmNlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc291cmNlcztcbiAgICB9LFxuXG4gICAgZ2V0QWxsQ2hpbGRyZW5Gb3JFbnRpdHk6IGZ1bmN0aW9uKGVudGl0eSwgbWVkaWFzID0gW10pIHtcbiAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmxvZyhcInN0YXJ0IGdldEFsbENoaWxkcmVuRm9yRW50aXR5XCIpO1xuICAgICAgICBmb3IobGV0IGl0ZW1faW5kZXggaW4gZW50aXR5LnBvc3Nlc3Npb25zKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGVudGl0eS5wb3NzZXNzaW9uc1tpdGVtX2luZGV4XTtcbiAgICAgICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5pbmZvKGl0ZW0pO1xuICAgICAgICAgICAgbGV0IGNoaWxkSWQgPSBQb3NzZWRleC5nZXRFbnRpdHlJZEZyb21Ob20oaXRlbS5ub20pO1xuICAgICAgICAgICAgbGV0IGNoaWxkRW50aXR5ID0gUG9zc2VkZXguZGF0YS5vYmpldHNbY2hpbGRJZF1cbiAgICAgICAgICAgIGlmIChjaGlsZEVudGl0eS50eXBlICE9IDMpIHtcbiAgICAgICAgICAgICAgICBtZWRpYXMgPSBQb3NzZWRleC5nZXRBbGxDaGlsZHJlbkZvckVudGl0eShjaGlsZEVudGl0eSwgbWVkaWFzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVkaWFzLnB1c2goY2hpbGRFbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZWRpYXM7XG4gICAgfSxcblxuICAgIGdldEFsbFBhcmVudHNGb3JFbnRpdHk6IGZ1bmN0aW9uKGVudGl0eSwgcHJvcHJpb3MpIHtcbiAgICAgICAgaWYgKDMgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwic3RhcnQgZ2V0QWxsUGFyZW50c0ZvckVudGl0eVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGl0ZW1faW5kZXggaW4gZW50aXR5LmVzdF9wb3NzZWRlKSB7XG4gICAgICAgICAgICBpZiAoMyA8PSBfZGVidWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuZ3JvdXAoXCJVbmUgYm91Y2xlIGRlIGVzdF9wb3NzZWRlIGRlIFwiICsgZW50aXR5Lm5vbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGVudGl0eS5lc3RfcG9zc2VkZVtpdGVtX2luZGV4XTtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJZCA9IFBvc3NlZGV4LmdldEVudGl0eUlkRnJvbU5vbShpdGVtLm5vbSk7XG4gICAgICAgICAgICBsZXQgcGFyZW50RW50aXR5ID0gUG9zc2VkZXguZGF0YS5vYmpldHNbcGFyZW50SWRdXG4gICAgICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5sb2coXCJEZWFsaW5nIHdpdGggaXRlbS5ub20gPSBcIitpdGVtLm5vbSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5sb2cocGFyZW50RW50aXR5KTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbnRpdHkudHlwZSAhPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKDMgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coXCJBIGNyZXVzZXIgcG91ciBcIiArIHBhcmVudEVudGl0eS5ub20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgYV9jcmV1c2VyID0gUG9zc2VkZXguZ2V0QWxsUGFyZW50c0ZvckVudGl0eShwYXJlbnRFbnRpdHksIHByb3ByaW9zKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoMyA8PSBfZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oXCJUaWVucywgY2V0dGUgZW50aXTDqSBlc3QgdW5lIHBlcnNvbm5lIHBoeXNpcXVlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKHBhcmVudEVudGl0eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3ByaW9zLnB1c2gocGFyZW50RW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgzIDw9IF9kZWJ1Zykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgzIDw9IF9kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oXCIoZmluIGRlIGdldEFsbFBhcmVudHNcIik7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhwcm9wcmlvcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3ByaW9zO1xuICAgIH0sXG5cbiAgICBnZXRFbnRpdHlJZEZyb21Ob206IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAvLyAxc3QgbG9vaywgY2hlY2sgdXJsLCBleGFjdCBtYXRjaFxuICAgICAgICBpZiAoUG9zc2VkZXguZGF0YS51cmxzLmhhc093blByb3BlcnR5KHN0cikpIHtcbiAgICAgICAgICAgIHJldHVybiBQb3NzZWRleC5kYXRhLnVybHNbc3RyXTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBAVE9ETzogY2hlY2sgdGhpcyB3b3JrcyBvbiBFZGdlXG4gICAgICAgICAgICAgICAgdmFyIHN0ckNsZWFuID0gc3RyLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKFwiVE9ETzogY29kZSBhbHRlcm5hdGl2ZSB0byBzdHIubm9ybWFsaXplKCdORkQnKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIHN0ckNsZWFuID0gc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl5cIitzdHJDbGVhbiwgJ2knKTtcblxuICAgICAgICAgICAgLy8gMm5kIGxvb2ssIGNoZWNrIHJlZ2V4IGFmdGVyIHJlbW92aW5nIGFjY2VudHNcbiAgICAgICAgICAgIGZvcihsZXQgaWRFbnRpdHkgaW4gUG9zc2VkZXguZGF0YS5vYmpldHMpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5sb2coXCJjaGVjayBpZEVudGl0eT1cIitpZCk7XG4gICAgICAgICAgICAgICAgaWYgKFBvc3NlZGV4LmRhdGEub2JqZXRzW2lkRW50aXR5XS5zbHVnID09IHN0ckNsZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZEVudGl0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDNyZCBsb29rLCBjaGVjayBwYXJ0aWFsIG1hdGNoXG4gICAgICAgICAgICBmb3IobGV0IGlkRW50aXR5IGluIFBvc3NlZGV4LmRhdGEub2JqZXRzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVnZXgudGVzdChQb3NzZWRleC5kYXRhLm9iamV0c1tpZEVudGl0eV0uc2x1ZykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZEVudGl0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHlvdXR1YmVDaGFubmVsOiBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdmFyIGVsbXMgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICAgICAgaWYoZWxtcy5sZW5ndGggPiAyKXtcbiAgICAgICAgICAgIHJldHVybiBlbG1zWzBdICsgJy8nICsgZWxtc1sxXSArIFwiL1wiICsgZWxtc1syXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkZWJ1bmtTaXRlOiBmdW5jdGlvbih1cmwpe1xuICAgICAgICAvLyB2YXIgb3duZXJfbXNnID0gJyc7XG4gICAgICAgIC8vIHZhciBwcm9wcmlldGFpcmVzID0gJyc7XG4gICAgICAgIC8vIHZhciBmb3J0dW5lcyAgICAgID0gJyc7XG4gICAgICAgIC8vIHZhciBtYXJxdWVzICAgICAgID0gJyc7XG4gICAgICAgIC8vIHZhciBpbnRlcmV0cyAgICAgID0gJyc7XG4gICAgICAgIC8vIHZhciBpbmZsdWVuY2VzICAgICAgPSAnJztcbiAgICAgICAgLy8gdmFyIGNvbmZsaXRzICAgICAgPSAnJztcbiAgICAgICAgLy8gdmFyIHN1YnZlbnRpb25zICAgPSAnJztcbiAgICAgICAgLy8gdmFyIHB1YmxpY2l0ZSAgICAgPSAnJztcbiAgICAgICAgLy8gdmFyIG5vdGUgICAgICAgICAgPSAnJztcbiAgICAgICAgLy8gdmFyIGRlY29kZXhfbm90ZSAgPSAnJztcbiAgICAgICAgLy8gdmFyIGNvbG9yICAgICAgICAgPSAnJztcbiAgICAgICAgLy8gdmFyIGRlY29kZXhfY29sb3IgPSAnJztcbiAgICAgICAgLy8gdmFyIGRlY29kZXhfZGVzYyAgPSAnJztcbiAgICAgICAgLy8gdmFyIG1lc3NhZ2UgICAgICAgPSAnJztcbiAgICAgICAgLy8gdmFyIGJhbmRlYXVfbXNnICAgPSAnJztcbiAgICAgICAgLy8gdmFyIGljb25lICAgICAgICAgPSAnJztcbiAgICAgICAgLy8gZW5kIElOSVQgdmFyc1xuICAgICAgICBpZiAoMyA8PSBfZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5ncm91cCgnU1RBUlQgZGVidW5rIHNpdGUgJyt1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5mb3NUb0dldCBpbiBleHRlbnNpb25cbiAgICAgICAgaWYgKDMgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhcImRlYnVua1NpdGUgOiB2YXIgcmVzdWx0c1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coXCJyZXN1bHRzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsID0gUG9zc2VkZXgubGFzdFNsYXNoKHVybCk7XG4gICAgICAgIHVybCA9IFBvc3NlZGV4LnVybF9jbGVhbmVyKHVybCk7XG4gICAgICAgIHVybCA9IHVybC50b0xvd2VyQ2FzZSgpOyAvLyB3aGVuIHVybCBjb250YWlucyBuYW1lc1xuXG4gICAgICAgIGNvbnN0IGVudGl0eV9pZCA9IFBvc3NlZGV4LmdldEVudGl0eUlkRnJvbU5vbSh1cmwpXG5cbiAgICAgICAgaWYgKGVudGl0eV9pZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgJChcIiNyZXN1bHRcIikuaHRtbCgnTm91cyBuXFwnYXZvbnMgYWN0dWVsbGVtZW50IGF1Y3VuZSBpbmZvcm1hdGlvbiBzdXIgY2Ugc2l0ZS4nKTtcbiAgICAgICAgICAgIGlmICgyIDw9IF9kZWJ1Zykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKFwic2l0ZSBub24gdHJvdXbDqVwiLCB1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coUG9zc2VkZXguZGF0YS51cmxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE9wdGlvbmFsIDogYWRkIGEgYmFkZ2UgdGV4dCBhbmQgYmFkZ2UgYmcgd2l0aCB0aGUgaWNvblxuICAgICAgICAgICAgLy9icm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHtcInRleHRcIiA6IFwiU291bWlzIDpwXCJ9KTtcbiAgICAgICAgICAgIC8vYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHsnY29sb3InIDogXCIjRDUwMzAzXCJ9KTtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKFwiUEVSRFVcIik7XG4gICAgICAgICAgICB0aGlzLnNlbmRUb091dHB1dChmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoMiA8PSBfZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKFwiU2l0ZSBpZCBwb3VyIFwiK3VybCtcIiwgZW50aXR5X2lkID0gXCIrZW50aXR5X2lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFBvc3NlZGV4LmN1cnJlbnRfZW50aXR5ID0gUG9zc2VkZXguZGF0YS5vYmpldHNbZW50aXR5X2lkXTtcbiAgICAgICAgaWYgKDIgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKCdjb250ZW51JywgUG9zc2VkZXguY3VycmVudF9lbnRpdHkpO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHZhciByYXdfc291cmNlcyA9IFBvc3NlZGV4LmRhdGEub2JqZXRzW2VudGl0eV9pZF0ucG9zc2VkZXguc291cmNlczsgICAgICAgICAgICAgICAgLy8gTm9zIHNvdXJjZXMgKHVybHMgc8OpcGFyw6lzIHBhciB2aXJndWxlIGV0L291IGVzcGFjZSlcblxuICAgICAgICBjb25zdCBzb3VyY2VzICAgICAgID0gdGhpcy5leHRyYWN0VXJsc0Zyb21SYXcocmF3X3NvdXJjZXMpO1xuXG5cbiAgICAgICAgaWYgKDMgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwic291cmNlcyBhcHJlcyB1cmxzIHNpbXBsZXNcIiwgc291cmNlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3VwZGF0ZWRfaHVtYW4gID0gdXBkYXRlZC50b0xvY2FsZVN0cmluZygnZnInKTtcblxuICAgICAgICBpZiAoMiA8PSBfZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5ncm91cChcInRvdXQgcydlc3QgYmllbiBwYXNzw6lcIik7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKCdub20gICAgICAgICAgICA9JyxQb3NzZWRleC5jdXJyZW50X2VudGl0eS5ub20gICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZygncG9zc2VkZXggICAgICAgPScsUG9zc2VkZXguY3VycmVudF9lbnRpdHkucG9zc2VkZXgpO1xuICAgICAgICAgICAgLy9jb25zb2xlICYmIGNvbnNvbGUubG9nKCdzbHVnICAgICAgICAgICA9JyxlbnRpdHkucG9zc2VkZXguc2x1ZyAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vY29uc29sZSAmJiBjb25zb2xlLmxvZygncHJvcHJpZXRhaXJlcyAgPScsZW50aXR5LnBvc3NlZGV4LnByb3ByaWV0YWlyZXMgICk7XG4gICAgICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5sb2coJ2luZmx1ZW5jZXMgICAgID0nLGVudGl0eS5wb3NzZWRleC5pbmZsdWVuY2VzICAgICApO1xuICAgICAgICAgICAgLy9jb25zb2xlICYmIGNvbnNvbGUubG9nKCdjb25mbGl0cyAgICAgICA9JyxlbnRpdHkucG9zc2VkZXguY29uZmxpdHMgICAgICAgKTtcbiAgICAgICAgICAgIC8vY29uc29sZSAmJiBjb25zb2xlLmxvZygnc3VidmVudGlvbnMgICAgPScsZW50aXR5LnBvc3NlZGV4LnN1YnZlbnRpb25zICAgICk7XG4gICAgICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5sb2coJ3NvdXJjZXMgICAgICAgID0nLGVudGl0eS5wb3NzZWRleC5zb3VyY2VzICAgICAgICApO1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwiZW50aXR5IHJldG91cm7DqWVcIiwgUG9zc2VkZXguY3VycmVudF9lbnRpdHkpO1xuICAgICAgICAvLyBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhlbnRpdHkpO1xuICAgICAgICAvLyBkaXNwbGF5IHJlc3VsdHNcbiAgICAgICAgUG9zc2VkZXguc2VuZFRvT3V0cHV0KFBvc3NlZGV4LmN1cnJlbnRfZW50aXR5KTtcblxuXG4gICAgICAgIC8vaWYocmVzdWx0cy5pbmZvYnVsbGVzW2NsYXNzZW1lbnRdID09IHRydWUpeyAgLy8gbm90ZVxuICAgICAgICAvLyAgICBicm93c2VyLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAgICAgLy8gICAgICAgIC8vIHNlbmRNZXNzYWdlIHRvIHRoZSBjb250ZW50LmpzIGxpc3RlbmVyXG4gICAgICAgIC8vICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xuICAgICAgICAvLyAgICAgICAgICAgIHNob3dfcG9wdXAgIDogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgICBub3RlICAgICAgICA6IGluc291bWlzX25vdGUsXG4gICAgICAgIC8vICAgICAgICAgICAgY29sb3IgICAgICAgOiBjb2xvcnNbaW5zb3VtaXNfbm90ZV0sXG4gICAgICAgIC8vICAgICAgICAgICAgbWVzc2FnZSAgICAgOiBtZXNzYWdlc1tpbnNvdW1pc19ub3RlXSxcbiAgICAgICAgLy8gICAgICAgICAgICBiYW5kZWF1X21zZyA6IGJhbmRlYXVfbXNnc1tpbnNvdW1pc19ub3RlXSxcbiAgICAgICAgLy8gICAgICAgICAgICBpY29uZSAgICAgICA6IGljb25lc1tpbnNvdW1pc19ub3RlXSxcbiAgICAgICAgLy8gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8vIG5vdGVcbiAgICAgICAgLy8gICAgICAgIH0pO1xuICAgICAgICAvLyAgICB9KTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgaWYgKHVybC5tYXRjaCgveW91dHViZS5jb20vKSkge1xuXG4gICAgICAgICAgICBpZiAobnVsbCA9PSBjbGFzc2VtZW50KVxuICAgICAgICAgICAgICAgIHZhciBjbGFzc2VtZW50ICA9ICcnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcHJpw6l0YWlyZXNcblxuXG4gICAgICAgICAgICBpZiAoXCJcIiA9PSBwcm9wcmlldGFpcmVzKVxuICAgICAgICAgICAgICAgIHByb3ByaWV0YWlyZXMgID0gXCJZb3V0dWJlIGVzdCB1bmUgcHJvcHJpw6l0w6kgZGUgbGEgSG9sZGluZyBBbHBoYWJldCAoR29vZ2xlKVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcHJpw6l0YWlyZXNcbiAgICAgICAgICAgIGlmIChcIlwiID09IGluZmx1ZW5jZXMpXG4gICAgICAgICAgICAgICAgaW5mbHVlbmNlcyAgICAgICA9IFwiTGUgZ3JvdXBlIEFscGhhYmV0KEdvb2dsZSkgYSBkZSBub21icmV1eCBpbnTDqXLDqnRzIGludGVybmF0aW9ubmF1eC4gU29uIGJ1c2luZXNzIG1vZGVsIGVzdCBmb3J0ZW1lbnQgYmFzw6kgc3VyIGxhIHB1YmxpY2l0w6kgZXQgc29uIHF1YXNpLW1vbm9wb2xlIGRlIGxhIHB1YmxpY2l0w6kuIEdvb2dsZSBleGVyY2UgZGUgbm9tYnJldXNlcyBwcmVzc2lvbnMgc3VyIGxlcyDDqXRhdHMgZXQgbCdVbmlvbiBFdXJvcMOpZW5uZS5cIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50w6lyZXRzXG4gICAgICAgICAgICBpZiAoXCJcIiA9PSBjb25mbGl0cylcbiAgICAgICAgICAgICAgICBjb25mbGl0cyAgICAgICA9IFwiWW91dHViZSBwZXV0IMOqdHJlIHVuIG91dGlsIGRlIHBhcnRhZ2UgZGUgY29ubmFpc3NhbmNlcy4gTGVzIHZpZMOpYXN0ZXMgZXQgdXRpbGlzYXRldXJzIGRlIGxhIHBsYXRlZm9ybWUgeW91dHViZSBuZSBzb250IHBhcyBmb3Jjw6ltZW50IHNvdW1pcyDDoCBHb29nbGUsIG1haXPigKYgXCI7ICAvLyBleGVtcGxlIGRlIGNvbmZsaXRzIC8gY29tcGxpY2l0w6kgaWTDqW9sb2dpcXVlXG4gICAgICAgICAgICBpZiAoXCJcIiA9PSBzdWJ2ZW50aW9ucylcbiAgICAgICAgICAgICAgICBzdWJ2ZW50aW9ucyAgICA9IFwiXCI7ICAgICAgICAgICAgIC8vIE1vbnRhbnQgZGVzIHN1YnZlbnRpb25zIGQnw6l0YXRcbiAgICAgICAgICAgIGlmIChcIlwiID09IHNvdXJjZXMpXG4gICAgICAgICAgICAgICAgc291cmNlcyAgICAgICAgPSBcIlwiOyAgICAgICAgICAgICAvLyBOb3Mgc291cmNlcyAodXJscyBzw6lwYXLDqXMgcGFyIHZpcmd1bGUgZXQvb3UgZXNwYWNlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKDMgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZW5kVG9PdXRwdXQgOiBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmxvZyhcInNlbmQgdG8gb3V0cHV0IChwb3NzZWRleCBjbGFzcylcIik7XG4gICAgICAgICQoXCIjcmVzdWx0XCIpLmh0bWwoJzxkaXYgaWQ9XCJpbmZvc1wiPicpO1xuICAgICAgICAkKFwiI2luZm9zXCIpLmFwcGVuZChcIjxsYWJlbD5cIitlbnRpdHkudHlwZUxpYmVsbGUrXCI8L2xhYmVsPlwiKTtcbiAgICAgICAgJChcIiNpbmZvc1wiKS5hcHBlbmQoXCI8cD5cIlxuICAgICAgICAgICAgLy8rZW50aXR5Lm5vbVxuICAgICAgICAgICAgKycgPGEgY2xhc3M9XCJkZXRhaWwtbWVkaWFcIiBocmVmPVwiJysgZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKycvLycrRE9NQUlOKycjJytlbnRpdHkubm9tKydcIj4nXG4gICAgICAgICAgICArIGVudGl0eS5ub21cbiAgICAgICAgICAgICsgJzwvYT4nXG4gICAgICAgICAgICArXCI8L3A+XCIpO1xuXG4gICAgICAgICQoXCIjaW5mb3NcIikuYXBwZW5kKFwiPGxhYmVsPlNpdGUocyk8L2xhYmVsPlwiKTtcbiAgICAgICAgdmFyIHVybHMgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCB1cmxfaWQgaW4gZW50aXR5LnVybHMpIHtcbiAgICAgICAgICAgIHVybHMgKz0gJyA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArZW50aXR5LnVybHNbdXJsX2lkXSsnXCI+J1xuICAgICAgICAgICAgICAgICsgZW50aXR5LnVybHNbdXJsX2lkXSArICc8L2E+J1xuICAgICAgICB9XG4gICAgICAgICQoXCIjaW5mb3NcIikuYXBwZW5kKFwiPHA+XCJcbiAgICAgICAgICAgIC8vK2VudGl0eS5ub21cbiAgICAgICAgICAgICsgdXJsc1xuICAgICAgICAgICAgK1wiPC9wPlwiKTtcbiAgICAgICAgLy8gJChcIiNyZXN1bHRcIikuYXBwZW5kKFwiPGxhYmVsPk5vdGUgTGVNb25kZSAob3V0ZGF0ZWQpPC9sYWJlbD48cD5cIitkZWNvZGV4X25vdGUrXCI8L3A+XCIpO1xuICAgICAgICAvLyAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+Q2xhc3NlbWVudCBQb3NzZWRleDwvbGFiZWw+PHA+XCIrbWVzc2FnZXNbY2xhc3NlbWVudF0rXCI8L3A+XCIpO1xuICAgICAgICAvLyAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPjxwPlwiK25vdHVsZStcIjwvcD5cIik7XG4gICAgICAgIC8vICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5pZGVudGlmaWFudCjDoCBtYXNxdWVyIHBsdXMgdGFyZCk8L2xhYmVsPjxwPlwiK3NsdWcrXCI8L3A+XCIpO1xuICAgICAgICBpZiAoZW50aXR5Lmhhc093blByb3BlcnR5KCdlc3RfcG9zc2VkZScpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcmlldGFpcmVzID0gW11cbiAgICAgICAgICAgIGVudGl0eS5lc3RfcG9zc2VkZS5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHJpZXRhaXJlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAnIDxhIGNsYXNzPVwiZGV0YWlsLW93bmVyXCIgaHJlZj1cIicgKyBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgK0RPTUFJTisnIycrZWwubm9tKydcIj4nXG4gICAgICAgICAgICAgICAgICAgICtlbC5ub21cbiAgICAgICAgICAgICAgICAgICAgKyc8L2E+J1xuICAgICAgICAgICAgICAgICAgICArICcgKCcrZWwudmFsZXVyXG4gICAgICAgICAgICAgICAgICAgICsocGFyc2VJbnQoZWwudmFsZXVyKT8nJSc6JycpXG4gICAgICAgICAgICAgICAgICAgICsnKSdcbiAgICAgICAgICAgICAgICAgICAgLy8rIFwiIChcIiArIGZvcnR1bmVzMSArIFwiKVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAocHJvcHJpZXRhaXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+UHJvcHJpw6l0YWlyZXM8L2xhYmVsPjxwPlwiK3Byb3ByaWV0YWlyZXMrXCI8L3A+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGl0eS5oYXNPd25Qcm9wZXJ0eSgncG9zc2Vzc2lvbnMnKSkge1xuICAgICAgICAgICAgY29uc3QgcG9zc2Vzc2lvbnMgPSBbXVxuICAgICAgICAgICAgZW50aXR5LnBvc3Nlc3Npb25zLmZvckVhY2goZnVuY3Rpb24oZWwsIGkpIHtcbiAgICAgICAgICAgICAgICBwb3NzZXNzaW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAnIDxhIGNsYXNzPVwiZGV0YWlsLW93bmVyXCIgaHJlZj1cIicgKyBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgK0RPTUFJTisnIycrZWwubm9tKydcIj4nXG4gICAgICAgICAgICAgICAgICAgICtlbC5ub21cbiAgICAgICAgICAgICAgICAgICAgKyc8L2E+J1xuICAgICAgICAgICAgICAgICAgICArICcgKCcrZWwudmFsZXVyKyclKSdcbiAgICAgICAgICAgICAgICAgICAgLy8rIFwiIChcIiArIGZvcnR1bmVzMSArIFwiKVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAocG9zc2Vzc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChcIiNyZXN1bHRcIikuYXBwZW5kKFwiPGxhYmVsPlBvc3PDqGRlIG91IGNvbnRyw7RsZTwvbGFiZWw+PHA+XCIrcG9zc2Vzc2lvbnMuam9pbihcIiwgXCIpK1wiPC9wPlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRpdHkucG9zc2VkZXguaW5mbHVlbmNlcyAmJiBlbnRpdHkucG9zc2VkZXguaW5mbHVlbmNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5JbnTDqXLDqnRzPC9sYWJlbD48cD5cIitlbnRpdHkucG9zc2VkZXguaW5mbHVlbmNlcytcIjwvcD5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudGl0eS5wb3NzZWRleC5tYXJxdWVzICYmIGVudGl0eS5wb3NzZWRleC5tYXJxdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIiNyZXN1bHRcIikuYXBwZW5kKFwiPGxhYmVsPk1hcnF1ZXM8L2xhYmVsPjxwPlwiK2VudGl0eS5wb3NzZWRleC5tYXJxdWVzK1wiPC9wPlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50aXR5LnBvc3NlZGV4LnN1YnZlbnRpb25zKSB7XG4gICAgICAgICAgICAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+U3VidmVudGlvbnMgcHVibGlxdWVzPC9sYWJlbD48cD5cIitlbnRpdHkucG9zc2VkZXguc3VidmVudGlvbnMrXCI8L3A+XCIpO1xuICAgICAgICAgICAgLy9jb25zb2xlICYmIGNvbnNvbGUubG9nKCdzdWJ2ZW50aW9ucyAgICA9JyxlbnRpdHkucG9zc2VkZXguc3VidmVudGlvbnMgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUgJiYgY29uc29sZS5sb2coXCJ0eXBlIDFcIik7XG4gICAgICAgIC8vIGNvbnNvbGUgJiYgY29uc29sZS5sb2coZW50aXR5KTtcbiAgICAgICAgY29uc3QgbWVkaWFzID0gW107XG4gICAgICAgIFBvc3NlZGV4LmdldEFsbENoaWxkcmVuRm9yRW50aXR5KGVudGl0eSwgbWVkaWFzKTtcbiAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZyhcImxlcyBlbmZhbnRzXCIpO1xuICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKG1lZGlhcyk7XG5cbiAgICAgICAgY29uc3QgcHJvcHJpb3MgPSBQb3NzZWRleC5nZXRBbGxQYXJlbnRzRm9yRW50aXR5KGVudGl0eSk7XG4gICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKFwibGVzIHBhcmVudHNcIik7XG4gICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKHByb3ByaW9zKTtcblxuICAgICAgICBpZiAocHJvcHJpb3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcmlvc19kaXNwbGF5ID0gW11cbiAgICAgICAgICAgIHByb3ByaW9zLmZvckVhY2goZnVuY3Rpb24oZWwsIGkpIHtcbiAgICAgICAgICAgICAgICBwcm9wcmlvc19kaXNwbGF5LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICcgPGEgY2xhc3M9XCJkZXRhaWwtb3duZXJcIiBocmVmPVwiJyArIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArRE9NQUlOKycjJytlbC5ub20rJ1wiPidcbiAgICAgICAgICAgICAgICAgICAgK2VsLm5vbVxuICAgICAgICAgICAgICAgICAgICArJzwvYT4nXG4gICAgICAgICAgICAgICAgICAgICsnPHA+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPlNlY3RldXIgZFxcJ2FjdGl2aXTDqTogJ1xuICAgICAgICAgICAgICAgICAgICArIGVsLnBvc3NlZGV4LmFjdGl2aXRlXG4gICAgICAgICAgICAgICAgICAgICsnPC9zbWFsbD48L3A+J1xuICAgICAgICAgICAgICAgICAgICArJzwvZGl2PidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5BdSBib3V0IGRlIGxhIGNoYcOubmUgYWxpbWVudGFpcmXigKY8L2xhYmVsPjxwPlwiXG4gICAgICAgICAgICAgICAgK3Byb3ByaW9zX2Rpc3BsYXkuam9pbihcIiwgXCIpXG4gICAgICAgICAgICAgICAgK1wiPC9wPlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZWRpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAobWVkaWFzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lZGlhc190aXRsZSA9IFwiQSBkZSBsJ2luZmx1ZW5jZSBkYW5zIGNlIG3DqWRpYVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVkaWFzX3RpdGxlID0gXCJBIGRlIGwnaW5mbHVlbmNlIGRhbnMgY2VzIG3DqWRpYXNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1lZGlhc19kaXNwbGF5ID0gW11cbiAgICAgICAgICAgIG1lZGlhcy5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpKSB7XG4gICAgICAgICAgICAgICAgbWVkaWFzX2Rpc3BsYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgJyA8YSBjbGFzcz1cImRldGFpbC1vd25lclwiIGhyZWY9XCInICsgZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICtET01BSU4rJyMnK2VsLm5vbSsnXCI+J1xuICAgICAgICAgICAgICAgICAgICArZWwubm9tXG4gICAgICAgICAgICAgICAgICAgICsnPC9hPidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5cIittZWRpYXNfdGl0bGUrXCI8L2xhYmVsPjxwPlwiXG4gICAgICAgICAgICAgICAgK21lZGlhc19kaXNwbGF5LmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICAgICtcIjwvcD5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmICh0cnVlIHx8IGFjdGl2aXRlLmxlbmd0aCkge31cbiAgICAgICAgLy8gQFRPRE8gbmV0b1xuICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhcImFjdGl2aXRlXCIpO1xuICAgICAgICBpZiAoZW50aXR5LnBvc3NlZGV4LmFjdGl2aXRlKSB7XG4gICAgICAgICAgICAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWwgc3R5bGU9J2NvbG9yOnJlZCc+RXQgYSBjb21tZSBwb3RlbnRpZWxzIGNvbmZsaXRzIGQnaW50w6lyw6p0c+KApjwvbGFiZWw+PHAgPlwiXG4gICAgICAgICAgICAgICAgK2VudGl0eS5wb3NzZWRleC5hY3Rpdml0ZVxuICAgICAgICAgICAgICAgICtcIjwvcD5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCJBdWN1bmUgYWN0aXZpdMOpIGFpbGxldXJzID8gb09cIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlICYmIGNvbnNvbGUubG9nKGVudGl0eSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlICYmIGNvbnNvbGUubG9nKGVudGl0eS5ub20pO1xuICAgICAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmxvZyhlbnRpdHkucG9zc2VkZXgpO1xuICAgICAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmxvZyhlbnRpdHlbJ3Bvc3NlZGV4J10pO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyQoXCIjcmVzdWx0XCIpLmFwcGVuZChzb3VyY2VzKTtcbiAgICAgICAgLy8kKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+RGVybmnDqHJlIG1pc2Ugw6Agam91cjwvbGFiZWw+PHA+XCJcbiAgICAgICAgLy8gICAgKyBuZXcgRGF0ZShkYXRhLnByb3ByaWV0YWlyZXNbbm9tXS51cGRhdGVkKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgIC8vICAgICtcIjwvcD5cIik7XG4gICAgfVxufTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUG9zc2VkZXggfSBmcm9tIFwiLi9Qb3NzZWRleFwiO1xuXG4oJy4vUG9zc2VkZXguanMnKTtcblxuLy8gaW1wb3J0IENsb2NrIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xvY2tcIlxuLy8gaW1wb3J0IEluY3JlbWVudGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSW5jcmVtZW50ZXJcIjtcbi8vIGltcG9ydCBNYW51YWxJbmNyZW1lbnRlciBmcm9tIFwiLi9jb21wb25lbnRzL01hbnVhbEluY3JlbWVudGVyXCI7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1NlYXJjaEZvcm1cIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4vY29tcG9uZW50cy9SZXN1bHRcIjtcblxuXG5jb25zdCBlID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcblxuY29uc3QgRE9NQUlOICAgICA9IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lXG5jb25zdCBiYXNlX3VybCAgID0gXCIvbWRpcGxvLmpzb25cIlxuXG5cbi8vIGZ1bmN0aW9uIFJlY2hlcmNoZUZ1bmMoe25hbWUsIGNoaWxkcmVufSkge1xuLy8gICAgIHJldHVybiA8ZGl2PlxuLy8gICAgICAgICA8aDI+UmVjaGVyY2hlIHBvdXIge25hbWV9IOKApiA8L2gyPlxuLy8gICAgICAgICA8cD57Y2hpbGRyZW59PC9wPlxuLy8gICAgIDwvZGl2PlxuLy8gfVxuUmVhY3RET00ucmVuZGVyKDxTZWFyY2hGb3JtIGJhc2VfdXJsPXtiYXNlX3VybH0gLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWNoZXJjaGVyJykpO1xuXG5cbi8vIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4vLyAgIHRlc3QrK1xuLy8gICByZW5kZXIoKTtcbi8vIH0sIDEwMDAwKVxuLy8gcmVuZGVyKCk7XG5cbi8vUmVhY3RET00ucmVuZGVyKGUsIGRvbUNvbnRhaW5lcik7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgJChcIiNsb2dvXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoJChcIiNtZW51cG9wdXBcIikuaXMoXCI6aGlkZGVuXCIpKXtcbiAgICAgICAgICAgICQoXCIjbWVudXBvcHVwXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICAgIH1cblxuICAgIH0pO1xuICAgICQoXCIucXVpdCwgLm5hdi1saW5rLCAubmF2LXNvY2lhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjbWVudXBvcHVwXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgfSk7XG5cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBGaW5hbE93bmVyKHtwcm9wcmlvcywgb25DbGlja1NlYXJjaH0pIHtcblxuICAgIGlmICghcHJvcHJpb3MubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGtleT1cImZpbmFsT3duZXJcIj5cbiAgICAgICAgPGxhYmVsPkF1IGJvdXQgZGUgbGEgY2hhw65uZSBhbGltZW50YWlyZeKApjwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cHJvcHJpb3MubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrU2VhcmNofSBjbGFzc05hbWU9XCJkZXRhaWwtb3duZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIitkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSsnIycrZWwubm9tfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5ub219XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlY3RldXIgZCdhY3Rpdml0w6k6IHtlbC5wb3NzZWRleC5hY3Rpdml0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufVxuZnVuY3Rpb24gIEluZmx1ZW5jZXMoe21lZGlhcywgb25DbGlja1NlYXJjaH0pIHtcbiAgICBpZiAobWVkaWFzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBrZXk9XCJpbmZsdWVuY2VzXCIgY2xhc3NOYW1lPVwiaW5mbHVlbmNlc1wiPlxuICAgICAgICA8bGFiZWw+e1wiQSBkZSBsJ2luZmx1ZW5jZSBkYW5zIGNlXCJcbiAgICAgICAgKyAobWVkaWFzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIilcbiAgICAgICAgKyBcIiBtw6lkaWFcIlxuICAgICAgICArIChtZWRpYXMubGVuZ3RoID09PSAxID8gXCJcIiA6IFwic1wiKVxuICAgICAgICB9PC9sYWJlbD5cblxuICAgICAgICA8cD5cbiAgICAgICAgICAgIHttZWRpYXMubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPHNwYW4ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWwtb3duZXJcIiBocmVmPXtkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArICcvLycrZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUrJyMnK2VsLm5vbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWwubm9tfTwvYT57aSA8IG1lZGlhcy5sZW5ndGgtMSA/IFwiLCBcIiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxufVxuXG5mdW5jdGlvbiBJbnRlcmV0cyh7YWN0aXZpdGV9KSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17e2NvbG9yOidyZWQnfX0+RXQgYSBjb21tZSBwb3RlbnRpZWxzIGNvbmZsaXRzIGQnaW50w6lyw6p0c+KApjwvbGFiZWw+XG4gICAgICAgIDxwPnthY3Rpdml0ZSA/IGFjdGl2aXRlIDogPHNtYWxsPmJhc2UgZGUgZG9ubsOpZXMgw6AgY29tcGzDqXRlcjwvc21hbGw+fTwvcD5cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVCb3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja1NlYXJjaCA9IHRoaXMuaGFuZGxlQ2xpY2tTZWFyY2guYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrU2VhcmNoKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBoYXNoUG9zID0gZS50YXJnZXQuaHJlZi5pbmRleE9mKCcjJylcbiAgICAgICAgY29uc3Qgbm9tID0gZS50YXJnZXQuaHJlZi5zdWJzdHIoaGFzaFBvcysxKTtcbiAgICAgICAgLy8gaWYgKCdwLycgPT0gbm9tLnN1YnN0cigwLCAyKSkge1xuICAgICAgICAvLyAgICAgJChcIiNkb21haW4tb3Itb3duZXJcIikudmFsKFwib3duZXJcIik7XG4gICAgICAgIC8vICAgICAkKFwiI3VybFwiKS52YWwoZGVjb2RlVVJJQ29tcG9uZW50KG5vbS5zdWJzdHIoMikpKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICQoXCIjZG9tYWluLW9yLW93bmVyXCIpLnZhbChcImRvbWFpblwiKTtcbiAgICAgICAgLy8gICAgICQoXCIjdXJsXCIpLnZhbChkZWNvZGVVUklDb21wb25lbnQobm9tKSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrU2VhcmNoKGRlY29kZVVSSUNvbXBvbmVudChub20pKVxuICAgICAgICAvLyQoXCIjZm9ybS1wb3NzZWRleFwiKS5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtlbnRpdHksIFBvc3NlZGV4fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IG1lZGlhcyA9IFtdO1xuICAgICAgICBQb3NzZWRleC5nZXRBbGxDaGlsZHJlbkZvckVudGl0eShlbnRpdHksIG1lZGlhcyk7XG5cbiAgICAgICAgY29uc3QgcHJvcHJpb3MgPSBbXTtcbiAgICAgICAgUG9zc2VkZXguZ2V0QWxsUGFyZW50c0ZvckVudGl0eShlbnRpdHksIHByb3ByaW9zKTtcblxuICAgICAgICBjb25zdCBpbmZsdWVuY2VzID0gW107XG5cblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhdWJvdXRcIj5cbiAgICAgICAgICAgIDxGaW5hbE93bmVyIHByb3ByaW9zPXtwcm9wcmlvc30gb25DbGlja1NlYXJjaD17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5mbHVlbmNlcyBtZWRpYXM9e21lZGlhc30gb25DbGlja1NlYXJjaD17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0vPlxuICAgICAgICAgICAge3BhcnNlSW50KGVudGl0eS50eXBlKSA9PT0gMVxuICAgICAgICAgICAgICAgID8gPEludGVyZXRzIGFjdGl2aXRlPXtlbnRpdHkucG9zc2VkZXguYWN0aXZpdGV9Lz5cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgLy8gQFRPRE8gbmV0b1xuICAgICAgICAvLyQoXCIjcmVzdWx0XCIpLmFwcGVuZChzb3VyY2VzKTtcbiAgICAgICAgLy8kKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+RGVybmnDqHJlIG1pc2Ugw6Agam91cjwvbGFiZWw+PHA+XCJcbiAgICAgICAgLy8gICAgKyBuZXcgRGF0ZShkYXRhLnByb3ByaWV0YWlyZXNbbm9tXS51cGRhdGVkKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgIC8vICAgICtcIjwvcD5cIik7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0aWVzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tTZWFyY2ggPSB0aGlzLmhhbmRsZUNsaWNrU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tTZWFyY2goZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGhhc2hQb3MgPSBlLnRhcmdldC5ocmVmLmluZGV4T2YoJyMnKVxuICAgICAgICBjb25zdCBub20gPSBlLnRhcmdldC5ocmVmLnN1YnN0cihoYXNoUG9zKzEpO1xuICAgICAgICAvLyBpZiAoJ3AvJyA9PSBub20uc3Vic3RyKDAsIDIpKSB7XG4gICAgICAgIC8vICAgICAkKFwiI2RvbWFpbi1vci1vd25lclwiKS52YWwoXCJvd25lclwiKTtcbiAgICAgICAgLy8gICAgICQoXCIjdXJsXCIpLnZhbChkZWNvZGVVUklDb21wb25lbnQobm9tLnN1YnN0cigyKSkpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgJChcIiNkb21haW4tb3Itb3duZXJcIikudmFsKFwiZG9tYWluXCIpO1xuICAgICAgICAvLyAgICAgJChcIiN1cmxcIikudmFsKGRlY29kZVVSSUNvbXBvbmVudChub20pKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2tTZWFyY2goZGVjb2RlVVJJQ29tcG9uZW50KG5vbSkpXG4gICAgICAgIC8vJChcIiNmb3JtLXBvc3NlZGV4XCIpLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7bGlzdCwgbGFiZWwsIGRldGFpbENsYXNzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxzcGFuIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGtleT17aX0gY2xhc3NOYW1lPVwiZGV0YWlsLW93bmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyAnIycgKyBlbC5ub219XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5ub219ICh7ZWwudmFsZXVyICsgKHBhcnNlSW50KGVsLnZhbGV1cikgPyAnJScgOiAnJyl9KVxuICAgICAgICAgICAgICAgICAgICA8L2E+e2kgPCBsaXN0Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIGxvZ0Vycm9yVG9NeVNlcnZpY2UoZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IsIGVycm9ySW5mbyk7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2hhc0Vycm9yOiBmYWxzZX07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgICAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUkuXG4gICAgICAgIHJldHVybiB7aGFzRXJyb3I6IHRydWV9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcbiAgICAgICAgLy8gWW91IGNhbiBhbHNvIGxvZyB0aGUgZXJyb3IgdG8gYW4gZXJyb3IgcmVwb3J0aW5nIHNlcnZpY2VcbiAgICAgICAgbG9nRXJyb3JUb015U2VydmljZShlcnJvciwgZXJyb3JJbmZvKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gcmVuZGVyIGFueSBjdXN0b20gZmFsbGJhY2sgVUlcbiAgICAgICAgICAgIHJldHVybiA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmcuPC9oMT47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBFbnRpdGllc0xpc3QgZnJvbSBcIi4vRW50aXRpZXNMaXN0XCI7XG5pbXBvcnQgQXVCb3V0IGZyb20gXCIuL0F1Qm91dFwiO1xuXG5mdW5jdGlvbiBTaXRlcyh7dXJsc30pIHtcbiAgICBpZiAoIXVybHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAge3VybHMgP1xuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+U2l0ZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7dXJscy5tYXAoKHVybCwgdXJsX2lkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXt1cmxfaWR9IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2RvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHVybHNbdXJsX2lkXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgPC9kaXY+XG59XG5cbmZ1bmN0aW9uIFBvc3NlZGV4SW5mbyh7cG9zc2VkZXh9KSB7XG4gICAgY29uc29sZS5pbmZvKFwicG9zc2VkZXhcIilcbiAgICBjb25zb2xlLmxvZyhwb3NzZWRleClcbiAgICByZXR1cm4gPD5cbiAgICAgICAgey8qIFRPRE86IHJlZm9ybWF0ZXIgbGEgc29ydGllIGRlIGxhIGNsYXNzZSovfVxuXG4gICAgICAgIHtwb3NzZWRleC5pbmZsdWVuY2VzICYmIHBvc3NlZGV4LmluZmx1ZW5jZXMubGVuZ3RoID8gPD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW50w6lyw6p0czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3NlZGV4LmluZmx1ZW5jZXN9PC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7cG9zc2VkZXgubWFycXVlcyAmJiBwb3NzZWRleC5tYXJxdWVzLmxlbmd0aCA/IDw+XG4gICAgICAgICAgICA8bGFiZWw+TWFycXVlczwvbGFiZWw+XG4gICAgICAgICAgICA8cD57cG9zc2VkZXgubWFycXVlc308L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDpudWxsXG4gICAgICAgIH1cbiAgICAgICAge3Bvc3NlZGV4LnN1YnZlbnRpb25zICYmIHBvc3NlZGV4LnN1YnZlbnRpb25zLmxlbmd0aCA/IDw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlN1YnZlbnRpb25zIHB1YmxpcXVlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3NlZGV4LnN1YnZlbnRpb25zfTwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICA8Lz5cbn1cblxuLy9mdW5jdGlvbiBQb3NzZXNzaW9uc0xpc3Qoe2xpc3QsIGxhYmVsLCBkZXRhaWxDbGFzc30pIHtcbi8vICAgIHJldHVybiA8ZGl2PlxuLy8gICAgICAgIDxsYWJlbD57bGFiZWx9PC9sYWJlbD5cbi8vICAgICAgICA8cD5cbi8vICAgICAgICAgICAge2xpc3QubWFwKChlbCwgaSkgPT5cbi8vICAgICAgICAgICAgICAgIDxhIGtleT17aX0gY2xhc3NOYW1lPXtcImRldGFpbFwiICsgZGV0YWlsQ2xhc3N9IGhyZWY9e1wiI1wiICsgZWwubm9tfT5cbi8vICAgICAgICAgICAgICAgICAgICB7ZWwubm9tfSAoe2VsLnZhbGV1ciArIChwYXJzZUludChlbC52YWxldXIpID8gJyUnIDogJycpfSlcbi8vICAgICAgICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgICAgKX1cbi8vICAgICAgICA8L3A+XG4vLyAgICA8L2Rpdj5cbi8vfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLmRvbWFpbiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKFwicHJvcHNcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrU2VhcmNoID0gdGhpcy5oYW5kbGVDbGlja1NlYXJjaC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tTZWFyY2goc2VhcmNoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGlja1NlYXJjaChzZWFyY2gpXG5cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKFwicmVuZGVyIHJlc3VsdFwiKTtcbiAgICAgICAgY29uc3Qge2VudGl0eX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWVudGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgaWQ9XCJyZXN1bHRcIiBzdHlsZT17e2NsZWFyOlwiYm90aFwifX0gLz5cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbnRpdHkpO1xuICAgICAgICAvLyBjb25zb2xlLmluZm8oXCJwcm9wcyBkYW5zIGxlIGVsc2UgZGUgcmVuZGVyXCIpO1xuICAgICAgICByZXR1cm4gPGRpdiBpZD1cInJlc3VsdFwiIHN0eWxlPXt7Y2xlYXI6XCJib3RoXCJ9fT5cbiAgICAgICAgICAgIHsvKntjb25zb2xlLmxvZyhcImNvdWNvdVwiKX0qL31cbiAgICAgICAgICAgIHsvKntjb25zb2xlLmxvZyhlbnRpdHkpfSovfVxuICAgICAgICAgICAgPGRpdiBpZD1cImluZm9zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntlbnRpdHkudHlwZUxpYmVsbGV9PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZXRhaWwtbWVkaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIFwiI1wiICsgZW50aXR5Lm5vbX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAge2VudGl0eS5ub219XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAge2VudGl0eS5oYXNPd25Qcm9wZXJ0eSgndXJscycpXG4gICAgICAgICAgICAgICAgICAgID8gPFNpdGVzIHVybHM9e2VudGl0eS51cmxzfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge2VudGl0eS5oYXNPd25Qcm9wZXJ0eSgnZXN0X3Bvc3NlZGUnKVxuICAgICAgICAgICAgICAgICAgICA/IDxFbnRpdGllc0xpc3Qgb25DbGlja1NlYXJjaD17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0gbGFiZWw9XCJQcm9wcmnDqXRhaXJlc1wiIGRldGFpbENsYXNzPVwib3duZXJcIiBsaXN0PXtlbnRpdHkuZXN0X3Bvc3NlZGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge2VudGl0eS5oYXNPd25Qcm9wZXJ0eSgncG9zc2Vzc2lvbnMnKVxuICAgICAgICAgICAgICAgICAgICA/IDxFbnRpdGllc0xpc3Qgb25DbGlja1NlYXJjaD17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0gbGFiZWw9XCJQb3Nzw6hkZSBvdSBjb250csO0bGVcIiBkZXRhaWxDbGFzcz1cIm93bmVyXCIgbGlzdD17ZW50aXR5LnBvc3Nlc3Npb25zfS8+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtlbnRpdHkucG9zc2VkZXhcbiAgICAgICAgICAgICAgICAgICAgPyA8UG9zc2VkZXhJbmZvIHBvc3NlZGV4PXtlbnRpdHkucG9zc2VkZXh9IG9uQ2xpY2tTZWFyY2g9e3RoaXMuaGFuZGxlQ2xpY2tTZWFyY2h9IC8+XG4gICAgICAgICAgICAgICAgICAgIDogPGRpdj5JbmZvIHBvc3PDqWRleCBtYW5xdWFudGU8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8QXVCb3V0IGVudGl0eT17ZW50aXR5fSBQb3NzZWRleD17dGhpcy5wcm9wcy5Qb3NzZWRleH0gb25DbGlja1NlYXJjaD17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0gIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL1Jlc3VsdFwiO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSBcIi4vRXJyb3JCb3VuZGFyeVwiO1xuaW1wb3J0IHsgUG9zc2VkZXggfSBmcm9tIFwiLi4vUG9zc2VkZXhcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaCA6IFwiXCIsXG4gICAgICAgICAgICBlbnRpdHk6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja1NlYXJjaCA9IHRoaXMuaGFuZGxlQ2xpY2tTZWFyY2guYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUtleVVwID0gdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZG9TZWFyY2ggPSB0aGlzLmRvU2VhcmNoLmJpbmQodGhpcylcblxuICAgICAgICBQb3NzZWRleC5zZW5kVG9PdXRwdXQgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInNlbmQgdG8gb3V0cHV0XCIsIGVudGl0eSlcbiAgICAgICAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBsb2FkRnJvbUhhc2goKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgYSBkaXJlY3QgcmVxdWVzdFxuICAgICAgICBjb25zdCBjdXJyZW50X2xvY2F0aW9uID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjsgLy8gZnVsbCB1cmw7XG4gICAgICAgIGNvbnN0IHBvcyA9IGN1cnJlbnRfbG9jYXRpb24uaW5kZXhPZignIycpO1xuICAgICAgICBpZiAocG9zID4gLTEpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2ggPSBjdXJyZW50X2xvY2F0aW9uLnN1YnN0cmluZyhwb3MrMSk7XG4gICAgICAgICAgICBpZiAoJ3AvJyA9PSBzZWFyY2guc3Vic3RyKDAsIDIpKSB7XG4gICAgICAgICAgICAgICAgLy8kKFwiI2RvbWFpbi1vci1vd25lclwiKS52YWwoXCJvd25lclwiKTtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSBkZWNvZGVVUklDb21wb25lbnQoc2VhcmNoLnN1YnN0cigyKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vJChcIiNkb21haW4tb3Itb3duZXJcIikudmFsKFwiZG9tYWluXCIpO1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9IGRlY29kZVVSSUNvbXBvbmVudChzZWFyY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kb1NlYXJjaChzZWFyY2gpO1xuICAgICAgICAgICAgLy8kKFwiI3N1Ym1pdC1wb3NzZWRleFwiKS5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IFNlYXJjaEZvcm0gZGlkIG1vdW50IC0gbG9hZGluZyBkYlwiKVxuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmJhc2VfdXJsKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgUG9zc2VkZXguZGF0YSA9IGRhdGFcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YTonLCBkYXRhKVxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEZyb21IYXNoKClcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9TZWFyY2goKVxuICAgIH1cblxuICAgIGRvU2VhcmNoKHNlYXJjaCkge1xuICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5sb2coZSk7XG4gICAgICAgIC8vIGNvbnNvbGUgJiYgY29uc29sZS5sb2coJ3ByZXZlbnQgZGVmYXVsdCcpO1xuXG4gICAgICAgIC8vIHZhciBzZWFyY2ggPSB0aGlzLnN0YXRlLnNlYXJjaFxuICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVE9ETzogdXNlRWZmZWN0ID8gXCIgKyBzZWFyY2gpO1xuICAgICAgICAgICAgLy8gVE9ETzogdXNlRWZmZWN0XG4gICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gICAgc2VhcmNoX291dHB1dCA6IFwicmVjaGVyY2hlIGRlIFwiICsgc2VhcmNoLFxuICAgICAgICAgICAgLy99KTtcbiAgICAgICAgICAgIFBvc3NlZGV4LmRlYnVua1NpdGUoc2VhcmNoKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWFyY2hfb3V0cHV0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaCA6IHNlYXJjaH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhbGVydChcIlNhaXNpc3NleiBkJ2Fib3JkIHVuZSB1cmwgOikgXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tTZWFyY2goc2VhcmNoKSB7XG4gICAgICAgIHRoaXMuZG9TZWFyY2goc2VhcmNoKTtcbiAgICB9XG5cbiAgICAvL3Nob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICAvLyAgICBpZiAobmV4dFN0YXRlLnNlYXJjaCAhPT0gdGhpcy5zdGF0ZS5zZWFyY2gpIHtcbiAgICAvLyAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgfVxuXG4gICAgLy99XG5cbiAgICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgIC8vIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSAnUXVpIHBvc3PDqGRlIFwiJyt0aGlzLnN0YXRlLnNlYXJjaCsnXCIgPyAtIFBvc3NlZGV4JztcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9IHRoaXMuc3RhdGUuc2VhcmNoO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vICAgICBkb2N1bWVudC50aXRsZSA9ICdRdWkgcG9zc8OoZGUgXCInK3RoaXMuc3RhdGUuc2VhcmNoKydcIiA/IC0gUG9zc2VkZXgnO1xuICAgICAgICAvLyAgICAgLy8gZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9IHRoaXMuc3RhdGUuc2VhcmNoO1xuICAgICAgICAvLyB9KVxuICAgICAgICBjb25zb2xlLmluZm8oXCJyZW5kZXIgc2VhcmNoZm9ybVwiKVxuICAgICAgICBjb25zdCB7ZW50aXR5LCBmb3VuZH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwic2l0ZS10aXRsZVwiIGNsYXNzTmFtZT1cIlwiPlBvc3PDqWRleDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD5DaGVyY2hleiB1biBtw6lkaWEgcG91ciB0cm91dmVyIHNvbiBwcm9wcmnDqXRhaXJlLCBvdSB1biBtaWxsaWFyZGFpcmUgcG91ciB0cm91dmVyIHNlcyBtw6lkaWFzLjwvcD5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm0tcG9zc2VkZXhcIiBtZXRob2Q9XCJHRVRcIiBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhlbXBsZXMgOiBMZSBNb25kZSwgaHVtYW5pdGUuZnIsIEJvbGxvcsOpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0qL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXQtcG9zc2VkZXhcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCIgdHlwZT1cImJ1dHRvblwiIG9uU3VibWl0PXt0aGlzLmRvU2VhcmNofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIGQtc20tbm9uZVwiPiZyYXJyOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9ja1wiPkNoZXJjaGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB7ZW50aXR5ID9cbiAgICAgICAgICAgICAgICA8UmVzdWx0IFBvc3NlZGV4PXtQb3NzZWRleH0gb25DbGlja1NlYXJjaD17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0gaWQ9XCJyZXN1bHRcIiBlbnRpdHk9e2VudGl0eX0gLz5cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==