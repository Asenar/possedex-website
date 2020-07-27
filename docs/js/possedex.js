/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/base-possedex.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/base-possedex.js":
/*!*********************************!*\
  !*** ./assets/base-possedex.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  rien: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gEDDyoQwQ0NBgAACBlJREFUWMOtl1tsHOUVx38z sxevb3uz19ndrO34kkAM9sYmJCGhiEoJpVQxNKlAeQHRF0IfmgpRcZHoGyAeivpWBCoV7UPDA0lV 2hADIpAoIY3xZR+IL7G9ruPN2rve2bVnb/bOfH1wvPWytpOHHmmkmfPd/uf8z3fOGWl0dFSwhciy zKVLl7BarezduxfDMACQJAlJkhDif8vXv9+tmLYalCQJTdM4e/YT6uvr2bNnDyaTCSEEqVSKTCaN w+Ekn89jNpuxWq0oivL/AyDLMkNDQ4RCIWpqapmcnMBud9DXd56LF78BJF544SSRyCyalqatrY3d u3djsViKQO7kFWkrCgzD4O233yIcnkKSJGw2G9lsFl3XCQaDfP311xw92svDDz9MKrXI0tIS4+Oj 7Ny5i+bmHdjtdmpqarYEYdrq8KGhQQYHB3j++V/icDh4/fXXOHz4MG+88TsaG5s4derXXLp0EU3T mJiYYGEhTjQa5eWXf8vVq1cxDIOHHjqA3799UxDyZtzPzc3xxRdfkMvl6OoK8sQTP+Oee+7B5XLT 2NiEoih0dXURiUTwer28+uqrnDz5InV1dbhcLhYXU0Sjt/j888+5cePG5jT/UCGEIBQKoWkagUAA IQT5fJ66ujqOH/8FX375JaHQMABNTU3YbDaOHHmMAwceYnFxEafTiSwr5HI5ZFlG0zQuXvyGcDiM JElbA5AkiXA4zLffXmFwcIDu7h58Pj8fffRnUqkUR4/24nDYOX36NAAejweAWGwegJGREQKBRrLZ DLquF/dMp9NcuXKZRCJRBkJef7imafT397O8vEwsFmN2dpYTJ04wODjIX/7yET6fj2PHjtPXd57v v/8eh8OB2WwmmUySyWQIh6dobm4mmUyVcC5JEolEgoGB7ygUCpt7YGxsjFhsvphkxsfHcDpdPP74 T/nwwz/R33+Np576OdXV1Zw+/TfMZgtWq5VUKsXc3ByJRAKfz08yqZZZKkkSk5NT3LoVKRmT1wYz mQw3boyXIC8UCgwND9PUvAOvz8/pjz/m+vXr3Hd/FxcuXKC//zt8/gDzsQUuX7lKTa0Tq9WKpmkb 8p3P5xgdHStmU7idB2RZJhye4ty5c0XuAATgrV6k2z9LhdlYXSgEc+lavrpuZ0eDoMsXp2BI5Asm Ehkbc8sB4snC7dXlAV5ba6e3txe73Y4QYjUPCCGIRucoFAolyCXgRzumONA4jSGkoi5XMKFmH2Bf YJo9vll0Y5XJFUNhLDbN2ev3E0tXoUilIFYDUiORWMDhcCCEWKXAMAxUVS1LFkJIzKQc5AomDCEV n/SyBW3ZwrTqJKZVspS3kC+YUCSD3Q3zPH3/EEFvBJNslHlB13VUNVn8Nq0ps9ls2WSzouOuTLOe TQFUW/Mcaprkn+Nd3Fy5D1FI80B9iAcDMxhCos29QK01z3TSSSpnQ6K0YmYy6aKx8prSMPQS9wvA airQ5l7ArOglwCyKjr82SZ3LyVMnTtG+p5dkrqJkLRKUh+GqrKwUSgHAauUrubtAetnCpyP3El2q QZLWWyFRYdKpFlNEb0Vobm4ilqtnRZe5GzGZTEVj5TVFRYWtPGqB2UU7BUNGkQTybRACcFdluNc1 xcTEOIHtfvK2TqZVe3HOZiJJEpWVtlIAsizjdDrKkweQL5i4OtPESMzDRMJNvrBaQHVDxqRAdDpE Qk3Qvf8wF2fuI5m1roJlYyCKouBwOIvfxUTk8TRgMpVXZ0NIXP5PE+9f20ff+E4EFOno9kfoqL7M 8NAgwWAX/s5nODv6ICMxD/NaFbohwQ8CsLKyErfbXaS7mAcaGhpwOBzE4/ENs1jBkNGWrSSztmJw GQKW8lYqLVYUWebIkSP8S9f5w98/pnXHdrKFTNkN8Hq9JU1KEUBVVRUtLa3E4/ENXSdLguhSDX8N HaDSlGFlpUCtw02Vp5NH9u4tundPMMgHH7zPwUeOoOXHS+qCxWKhvb0dRVFKAazJrl27mJi4wcLC woZeEELg9AcZHg6Ry2Z581ev43I5sVosxTk+n4+21lbGx0YJBAKoauJ292zQ2NjE9u2Bktsmr9/c brfT3d2D2WzesIWSJAmX00lkdga/34t3W0PJ4UtLS8zNzdHR0cHw8BBudx0Wi6VYA3p6VvdeL6Yf WtjW1oaqqgwMfFcGwmKxIMsS8/NztLY+WdTHYjE+++wcZ858QiQSQdcNlpYWWVxM4XK5UFWV/fv3 4/F4yvYsC3tFUejp6UHXdUKhYXRdL/6AVFVVkclkSKfTbNu2jdHRUfr6zvPpp/9gZGSEQ4cOcfLk i9y8eZMzZz5hcHCQgwcPYjabaWtr39CrZQCEEJjNZvbt20d1dRUDAwNomgaA3W4nHo+jaRrvvvt7 YrEYy8vLdHUFaW9vp6Ojg2effQ6AlpYW3nvvjxw7dhyv17tpV7xhWy6EQFEUOju78HgaCIWGCYfD 2O125ufncbvdSJLMY4/9hGAwSEPDNq5d+zfnz3/Gc889j8/no6amlng8Tjwew+/3l/QZdwSwXrxe L/X19USjUUwmhYoKGy+99DJ1dXWoqsrU1BSTk5O0t7ejqioXLnxFc3Mz77zzNu3tO2lsbCrpgMoC +04/p+tvAKyWbkVRSCaTqKoKCCoqbNTW1vLWW28yMzPDysoyXq+XU6d+QyDQhBCbA7i78nWbFiFE sWo6HA5aWlpoaWktZrdHH/0xt25F2LlzF6+88hqNjVsfflcU3AnQmhiGQWdnJ08//Qy9vU9SX1+/ pevX5L8bOMsEuz+CngAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAldEVY dGRhdGU6Y3JlYXRlADIwMTgtMDEtMDNUMTY6NDA6NDUrMDE6MDDe7UZ0AAAAJXRFWHRkYXRlOm1v ZGlmeQAyMDE4LTAxLTAzVDE2OjQwOjQ1KzAxOjAwr7D+yAAAAABJRU5ErkJggg=='
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

var base_url = "https://" + DOMAIN + "/mdiplo.json?maj=" + maj;
var Possedex = {
  data: {},
  regex_url_seule: new RegExp(/^(http[s]?:\/\/([^/]+)\/[^" ,]+)[^"]{1,2}$/g),
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
  getAllChildrenForEntity: function getAllChildrenForEntity(entity) {
    var medias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    // console && console.log("start getAllChildrenForEntity");
    for (item_index in entity.possessions) {
      item = entity.possessions[item_index];
      console && console.info(item);
      childId = Possedex.getEntityIdFromNom(item.nom);
      childEntity = Possedex.data.objets[childId];

      if (childEntity.type != 3) {
        medias = Possedex.getAllChildrenForEntity(childEntity, medias);
      } else {
        medias.push(childEntity);
      }
    }

    return medias;
  },
  getAllParentsForEntity: function getAllParentsForEntity(entity) {
    var proprios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    console && console.log("start getAllParentsForEntity");

    for (item_index in entity.est_possede) {
      console && console.group("Une boucle de est_possede de " + entity.nom);
      item = entity.est_possede[item_index];
      parentId = Possedex.getEntityIdFromNom(item.nom);
      parentEntity = Possedex.data.objets[parentId]; //console && console.log("Dealing with item.nom = "+item.nom);
      //console && console.log(parentEntity);

      if (parentEntity.type != 1) {
        console && console.log("A creuser pour " + parentEntity.nom);
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
  getEntityIdFromNom: function getEntityIdFromNom(str) {
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

      var regex = new RegExp("^" + strClean, 'i'); // 2nd look, check regex after removing accents

      for (idEntity in Possedex.data.objets) {
        //console && console.log("check idEntity="+id);
        if (Possedex.data.objets[idEntity].slug == strClean) {
          return idEntity;
        }
      } // 3rd look, check partial match


      for (idEntity in Possedex.data.objets) {
        if (regex.test(Possedex.data.objets[idEntity].slug)) return idEntity;
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
    // INIT vars
    var owner_msg = '';
    var proprietaires = '';
    var fortunes = '';
    var marques = '';
    var interets = '';
    var influences = '';
    var conflits = '';
    var subventions = '';
    var publicite = '';
    var sources = [];
    var note = '';
    var decodex_note = '';
    var color = '';
    var decodex_color = '';
    var decodex_desc = '';
    var message = '';
    var bandeau_msg = '';
    var icone = ''; // end INIT vars

    if (3 <= _debug) {
      console && console.group('START debunk site ' + url);
    } // infosToGet in extension


    if (3 <= _debug) {
      console && console.info("debunkSite : var results");
      console && console.log("results");
    }

    sites = Possedex.data.objets;
    objets = Possedex.data.objets;
    url = Possedex.lastSlash(url);
    url = Possedex.url_cleaner(url);
    url = url.toLowerCase(); // when url contains names

    entity_id = Possedex.getEntityIdFromNom(url);

    if (entity_id == false) {
      $("#result").html('Nous n\'avons actuellement aucune information sur ce site.');

      if (2 <= _debug) {
        console && console.info("site non trouvé", url);
        console && console.log(Possedex.data.urls);
      } // Optional : add a badge text and badge bg with the icon
      //browser.browserAction.setBadgeText({"text" : "Soumis :p"});
      //browser.browserAction.setBadgeBackgroundColor({'color' : "#D50303"});


      return;
    }

    if (2 <= _debug) {
      console && console.info("Site id pour " + url + ", entity_id = " + entity_id);
    }

    entity = Possedex.data.objets[entity_id];

    if (2 <= _debug) {
      console && console.log('contenu', Possedex.data.objets[entity_id]);
    } //var proprietaire1  = Possedex.data.objets[entity_id][col_proprietaire1];      // propriétaires
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


    var raw_sources = Possedex.data.objets[entity_id].possedex.sources; // Nos sources (urls séparés par virgule et/ou espace)
    // Markdown style

    var regex = new RegExp(/\[([^\]]*?)\]\(([^\)]*?)\)[, ]{0,2}/gm);
    match = regex.exec(raw_sources);
    sources = [];

    while (match != null) {
      sources.push({
        "url": match[2],
        "title": match[1]
      });
      match = regex.exec(raw_sources);
    } // URL toute seule


    match = Possedex.regex_url_seule.exec(raw_sources);

    while (match != null) {
      sources.push({
        "url": match[1],
        "title": match[2]
      });
      match = regex.exec(raw_sources);
    }

    if (3 <= _debug) {
      console && console.log("sources apres urls simples", sources);
    } //updated_human  = updated.toLocaleString('fr');


    if (2 <= _debug) {
      console && console.group("tout s'est bien passé");
      console && console.log('nom            =', entity.nom);
      console && console.log('desc           =', entity.possedex.description);
      console && console.log('slug           =', entity.possedex.slug);
      console && console.log('proprietaires  =', entity.possedex.proprietaires);
      console && console.log('influences     =', entity.possedex.influences);
      console && console.log('conflits       =', entity.possedex.conflits);
      console && console.log('subventions    =', entity.possedex.subventions);
      console && console.log('sources        =', entity.possedex.sources);
      console && console.groupEnd();
    } // display results


    Possedex.sendToOutput(entity); //if(results.infobulles[classement] == true){  // note
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
      if (null == classement) classement = ''; // propriétaires

      if ("" == proprietaires) proprietaires = "Youtube est une propriété de la Holding Alphabet (Google)"; // propriétaires

      if ("" == influences) influences = "Le groupe Alphabet(Google) a de nombreux intérêts internationnaux. Son business model est fortement basé sur la publicité et son quasi-monopole de la publicité. Google exerce de nombreuses pressions sur les états et l'Union Européenne."; // intérets

      if ("" == conflits) conflits = "Youtube peut être un outil de partage de connaissances. Les vidéastes et utilisateurs de la plateforme youtube ne sont pas forcément soumis à Google, mais… "; // exemple de conflits / complicité idéologique

      if ("" == subventions) subventions = ""; // Montant des subventions d'état

      if ("" == sources) sources = ""; // Nos sources (urls séparés par virgule et/ou espace)
    }

    if (3 <= _debug) {
      console && console.groupEnd();
    }
  },
  sendToOutput: function sendToOutput(entity) {
    $("#result").html('<div id="infos">');
    $("#infos").append("<label>" + entity.typeLibelle + "</label>");
    $("#infos").append("<p>" //+entity.nom
    + ' <a class="detail-media" href="http://' + DOMAIN + '#' + entity.nom + '">' + entity.nom + '</a>' + "</p>");
    $("#infos").append("<label>Site(s)</label>");
    urls = "";

    for (url_id in entity.urls) {
      urls += ' <a target="_blank" href="http://' + entity.urls[url_id] + '">' + entity.urls[url_id] + '</a>';
    }

    $("#infos").append("<p>" //+entity.nom
    + urls + "</p>"); // $("#result").append("<label>Note LeMonde (outdated)</label><p>"+decodex_note+"</p>");
    // $("#result").append("<label>Classement Possedex</label><p>"+messages[classement]+"</p>");
    // $("#result").append("<label>Description</label><p>"+notule+"</p>");
    // $("#result").append("<label>identifiant(à masquer plus tard)</label><p>"+slug+"</p>");

    if (entity.hasOwnProperty('est_possede')) {
      proprietaires = [];
      entity.est_possede.forEach(function (el, i) {
        proprietaires.push(' <a class="detail-owner" href="http://' + DOMAIN + '#' + el.nom + '">' + el.nom + '</a>' + ' (' + el.valeur + (parseInt(el.valeur) ? '%' : '') + ')' //+ " (" + fortunes1 + ")"
        );
      });

      if (proprietaires.length) {
        $("#result").append("<label>Propriétaires</label><p>" + proprietaires + "</p>");
      }
    }

    if (entity.hasOwnProperty('possessions')) {
      possessions = [];
      entity.possessions.forEach(function (el, i) {
        possessions.push(' <a class="detail-owner" href="http://' + DOMAIN + '#' + el.nom + '">' + el.nom + '</a>' + ' (' + el.valeur + '%)' //+ " (" + fortunes1 + ")"
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


    medias = [];
    Possedex.getAllChildrenForEntity(entity, medias); // console && console.log("les enfants");
    // console && console.log(medias);

    proprios = Possedex.getAllParentsForEntity(entity); // console && console.info("les parents");
    // console && console.info(proprios);

    if (proprios.length) {
      proprios_display = [];
      proprios.forEach(function (el, i) {
        proprios_display.push(' <a class="detail-owner" href="http://' + DOMAIN + '#' + el.nom + '">' + el.nom + '</a>' + '<p><small class="text-muted">Secteur d\'activité: ' + el.possedex.activite + '</small></p>' + '</div>');
      });
      $("#result").append("<label>Au bout de la chaîne alimentaire…</label><p>" + proprios_display.join(", ") + "</p>");
    }

    if (medias.length) {
      if (medias.length == 1) {
        medias_title = "A de l'influence dans ce média";
      } else {
        medias_title = "A de l'influence dans ces médias";
      }

      medias_display = [];
      medias.forEach(function (el, i) {
        medias_display.push(' <a class="detail-owner" href="http://' + DOMAIN + '#' + el.nom + '">' + el.nom + '</a>');
      });
      $("#result").append("<label>" + medias_title + "</label><p>" + medias_display.join(", ") + "</p>");
    } //if (true || activite.length) {
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
$(document).ready(function () {
  $("#logo").on("click", function () {
    if ($("#menupopup").is(":hidden")) {
      $("#menupopup").removeClass("d-none");
    }
  });
  $(".quit, .nav-link, .nav-social").on("click", function () {
    $("#menupopup").addClass("d-none");
  });
  $("#form-possedex").on("submit", function (e) {
    e.preventDefault();
    var url = $("#url").val();

    if (url.length > 0) {
      $.getJSON(base_url, function (data) {
        Possedex.data = data;
        document.title = 'Qui possède "' + url + '" ? - Possedex';
        document.location.hash = url;
        Possedex.debunkSite(url);
      });
    } else {
      alert("Saisissez d'abord une url :) ");
    }
  });
  $("#submit-possedex").on("click", function (e) {
    e.preventDefault();
    $("#form-possedex").submit();
  });
  $(document).on("click", ".detail-owner,.detail-media", function (e) {
    e.preventDefault();
    var nom = this.href.replace('http://' + DOMAIN + "/#", '');

    if ('p/' == nom.substr(0, 2)) {
      $("#domain-or-owner").val("owner");
      $("#url").val(decodeURIComponent(nom.substr(2)));
    } else {
      $("#domain-or-owner").val("domain");
      $("#url").val(decodeURIComponent(nom));
    }

    $("#form-possedex").submit();
  }); // check if this is a direct request

  var current_location = document.location.href; // full url;

  if ((pos = current_location.indexOf('#')) > -1) {
    url = current_location.substring(pos + 1);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jhc2UtcG9zc2VkZXguanMiXSwibmFtZXMiOlsiX2RlYnVnIiwiY29uc29sZSIsImluZm8iLCJET01BSU4iLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJtYWoiLCJtZXNzYWdlcyIsImluY29ubnUiLCJjYXBpdGFsIiwiZXRhdCIsImluZGVwZW5kYW50IiwicmllbiIsImljb25lcyIsImJhbmRlYXVfbXNncyIsIm93bmVyX21zZ3MiLCJjb2xvcnMiLCJiYXNlX3VybCIsIlBvc3NlZGV4IiwiZGF0YSIsInJlZ2V4X3VybF9zZXVsZSIsIlJlZ0V4cCIsImxvYWRKU09OIiwicGF0aCIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZUFmdGVyTGFzdFNsYXNoIiwidXJsIiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCJsYXN0U2xhc2giLCJsZW5ndGgiLCJ1cmxfY2xlYW5lciIsInJlcGxhY2UiLCJnZXRBbGxDaGlsZHJlbkZvckVudGl0eSIsImVudGl0eSIsIm1lZGlhcyIsIml0ZW1faW5kZXgiLCJwb3NzZXNzaW9ucyIsIml0ZW0iLCJjaGlsZElkIiwiZ2V0RW50aXR5SWRGcm9tTm9tIiwibm9tIiwiY2hpbGRFbnRpdHkiLCJvYmpldHMiLCJ0eXBlIiwicHVzaCIsImdldEFsbFBhcmVudHNGb3JFbnRpdHkiLCJwcm9wcmlvcyIsImxvZyIsImVzdF9wb3NzZWRlIiwiZ3JvdXAiLCJwYXJlbnRJZCIsInBhcmVudEVudGl0eSIsImFfY3JldXNlciIsImdyb3VwRW5kIiwid2FybiIsInN0ciIsInVybHMiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ckNsZWFuIiwibm9ybWFsaXplIiwiZSIsInJlZ2V4IiwiaWRFbnRpdHkiLCJzbHVnIiwidGVzdCIsInlvdXR1YmVDaGFubmVsIiwiZWxtcyIsInNwbGl0IiwiZGVidW5rU2l0ZSIsIm93bmVyX21zZyIsInByb3ByaWV0YWlyZXMiLCJmb3J0dW5lcyIsIm1hcnF1ZXMiLCJpbnRlcmV0cyIsImluZmx1ZW5jZXMiLCJjb25mbGl0cyIsInN1YnZlbnRpb25zIiwicHVibGljaXRlIiwic291cmNlcyIsIm5vdGUiLCJkZWNvZGV4X25vdGUiLCJjb2xvciIsImRlY29kZXhfY29sb3IiLCJkZWNvZGV4X2Rlc2MiLCJtZXNzYWdlIiwiYmFuZGVhdV9tc2ciLCJpY29uZSIsInNpdGVzIiwidG9Mb3dlckNhc2UiLCJlbnRpdHlfaWQiLCIkIiwiaHRtbCIsInJhd19zb3VyY2VzIiwicG9zc2VkZXgiLCJtYXRjaCIsImV4ZWMiLCJkZXNjcmlwdGlvbiIsInNlbmRUb091dHB1dCIsImNsYXNzZW1lbnQiLCJhcHBlbmQiLCJ0eXBlTGliZWxsZSIsInVybF9pZCIsImZvckVhY2giLCJlbCIsImkiLCJ2YWxldXIiLCJwYXJzZUludCIsImpvaW4iLCJwcm9wcmlvc19kaXNwbGF5IiwiYWN0aXZpdGUiLCJtZWRpYXNfdGl0bGUiLCJtZWRpYXNfZGlzcGxheSIsInJlYWR5Iiwib24iLCJpcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInZhbCIsImdldEpTT04iLCJ0aXRsZSIsImhhc2giLCJhbGVydCIsInN1Ym1pdCIsImhyZWYiLCJzdWJzdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjdXJyZW50X2xvY2F0aW9uIiwicG9zIiwiaW5kZXhPZiIsImNsaWNrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFj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Q0gsR0FYRCxFQWhDd0IsQ0E2Q3hCOztBQUNBLE1BQUlJLGdCQUFnQixHQUFHOUgsUUFBUSxDQUFDQyxRQUFULENBQWtCMEgsSUFBekMsQ0E5Q3dCLENBOEN1Qjs7QUFDL0MsTUFBSSxDQUFDSSxHQUFHLEdBQUdELGdCQUFnQixDQUFDRSxPQUFqQixDQUF5QixHQUF6QixDQUFQLElBQXdDLENBQUMsQ0FBN0MsRUFBZ0Q7QUFDNUN4RyxPQUFHLEdBQUdzRyxnQkFBZ0IsQ0FBQ3BHLFNBQWpCLENBQTJCcUcsR0FBRyxHQUFDLENBQS9CLENBQU47O0FBQ0EsUUFBSSxRQUFRdkcsR0FBRyxDQUFDb0csTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQVosRUFBOEI7QUFDMUJuQyxPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRCLEdBQXRCLENBQTBCLE9BQTFCO0FBQ0E3RixTQUFHLEdBQUdBLEdBQUcsQ0FBQ29HLE1BQUosQ0FBVyxDQUFYLENBQU47QUFDQW5DLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTRCLEdBQVYsQ0FBY1Esa0JBQWtCLENBQUNyRyxHQUFELENBQWhDO0FBQ0gsS0FKRCxNQUlPO0FBQ0hpRSxPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRCLEdBQXRCLENBQTBCLFFBQTFCO0FBQ0E1QixPQUFDLENBQUMsTUFBRCxDQUFELENBQVU0QixHQUFWLENBQWNRLGtCQUFrQixDQUFDckcsR0FBRCxDQUFoQztBQUNIOztBQUNEaUUsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J3QyxLQUF0QjtBQUNIO0FBS0osQ0EvREQsRSIsImZpbGUiOiJwb3NzZWRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9iYXNlLXBvc3NlZGV4LmpzXCIpO1xuIiwiLyogICAgICAgICAgUE9TU0VERVhcbiAgICAgICAgICAgIFZFUlNJT04gMSAvIE1BUlMgMjAxN1xuICAgICAgICAgICAgVkVSU0lPTiAyIC8gSkFOVklFUiAyMDE4XG4gICAgICAgICAgICBWRVJTSU9OIDMgLyBBT1VUIDIwMThcbiAgICAgICAgICAgIFJFTUVSQ0lFTUVOVCBBIEwnRVFVSVBFIExFUyBERUNPREVVUlMgRFUgTU9OREVcbiAgICAgICAgICAgIElORklOSU1FTlQgTUVSQ0kgQVUgTU9OREUgRElQTE9NQVRJUVVFIFFVSSBBIFBVQkxJw4kgU0EgQkFTRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAueS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtZE1tLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1NTU1kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZE1NTU1NZC4gICAgIC46K295eXNvLVxuICAgICAgICAgICAgICAgICAgICAgICAgIGBoTU1NTU1NTWRgIC1vZE5NTU1NTU1NTnlgICAgICAgICAgICAgIGAuLlxuICAgICAgICAgICAgICAgICAgICAgICAgIHNNTU1tOmRNTU1kZE5NTU1NbXlvb21NTU1oICAgIGAuLS8rb3lkbW1OOlxuICAgICAgICAgICAgICAgICAgICAgICAgOk5NTU4vIC5tTU1NTU1OZCstYCAgIC1OTU1NeXlkbU5OTk1NTU1NTU1kLlxuICAgICAgICAgICAgICAgICAgICAgICAgaE1NTXkgICAtbU1NTU46ICAgICAgICBzTU1NTU1NTU1OTm1oaE5NTU1vXG4gICAgICAgICAgICAgICAgICAgICAgIC1tTU1NLSAgICAtbU1NTXlgICAgICAgIC1OTU1NeSsvLS5gYCAvTk1NTi5cbiAgICAgICAgICAgICAgICAgICAgICAgL05NTU1gICAgICAtbU1NTXlgICAgICAgYGhNTU0rICAgICAgIHNNTU1oXG4gICAgICAgICAgICAgICAgICAgICAgIC1tTU1Nb2AgICAgIDptTU1Nc2AgICAgICBzTU1NZCAgICAgIC5OTU1OL1xuICAgICAgICAgICAgICAgICAgICAgICAgK05NTU55YCAgICAgOk5NTU5zICAgICAgL01NTW1gICAgICArTU1NZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICA6ZE1NTWQ6ICAgICA6Tk1NTW9gICAgIGBOTU1OLSAgICBgZE1NTW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnlNTU1OKyAgICAgOk5NTU5vICAgICBOTU1OLyAgICAvTk1NTS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGBvTk1NTnkuICAgIC9OTU1OKyAgICBkTU1NbyAgICB5TU1NaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bU1NTWQtICAgIC9OTU1OKyAgIHlNTU1zICAgYE5NTU4vXG4gICAgICAgICAgICAgICAgICAgICAgICAgYC06Ly9vaGhoaHkrLy8vL3ltTk1OLy4tc2hoZHM6LS0rbW1tZC5cbiAgICAgICAgICAgICAgICAgICAgICAgYC9vc29vKysrKysrKysrKytvb3NzaGRzc3Nvb29vb29vb29vc3NzKy8tYFxuICAgICAgICAgICAgICAgICAgICAgIGArc28vOjo6Ojo6Ojo6Ojo6Ojo6L29zc3MrOjo6Ojo6Ojo6Ojo6Ly8rb3MrLWBcbiAgICAgICAgICAgICAgICAgICAgICAtc3MvOi0tLS0tLS0tLS0tLS0tLS0vc3MrOi0tLS0tLS0tLS0tLS0tOjorc3MrLS5gYGBcbiAgICAgICAgICAgICAgICAgICAgICAuc3MrOjo6Ojo6Oi0tOjo6Ojo6Ojorc3NvOjotLS0tLS0tLS0tLS0tLS06Oitvc29vb28tXG4gICAgICAgICAgICAgICAgICAgICAgYCtzc28rKysvLy86Ojo6Ly8vKysrb29zc28rLy86Ojo6Ojo6LS0tLS0tLS06OjovK3NzLVxuICAgICAgICAgICAgICAgICAgICAgYC9zcysvOjo6Ojo6Ojo6Ojo6Ojo6Ojo6K3Nzc3Nvb29vb28rOi0tLS0tLS0tLS0tLS9zcy1cbiAgICAgICAgICAgICAgICAgICAgIC5vcys6LS0tLS0tLS0tLS0tLS0tLS0tLTpvc28tLi4uLm9zKy0tLS0tLS0tLS0tLS0vc3MtXG4gICAgICAgICAgICAgICAgICAgICBgK3NvOjotLS0tLS0tLS0tOjo6Ojo6Ly8rc3MrYCAgICArc286LS0tLS0tLS0tLS0tL3NzLVxuICAgICAgICAgICAgICAgICAgICAgIC4rc28rLy8vLy8vLy86Ojo6Oi8vLy8rKytvcysuICAgLXNzLy0tLS0tLS0tLS0tLS9zcy1cbiAgICAgICAgICAgICAgICAgICAgICAgYC1vc28vLzo6Ojo6LS0tLS0tLS0tLS0tOm9zKyAgIGAvc28vOi0tLS0tLS0tLS0vc3MtXG4gICAgICAgICAgICAgICAgICAgICAgICBgb3NvOi0tLS0tLS0tLS0tLS0tLS0tOjpvc28gICAgYCtzby86LS0tLS0tLS0tL3NzLVxuICAgICAgICAgICAgICAgICAgICAgICAgIDpzcys6Ojo6Ojo6Ojo6Ojo6Ojo6Ly8rb3NzLy4gIGBgL3NvKzotLS0tLS0tLS9zcy1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLStvc29vb29vbysrLy8vOjo6Ojo6OjovK3NvLSAtLmA6b3NvLzo6LS0tLS0vc3MtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi06Ojpvc286LS0tLS0tLS0tLS0tLTpvcytgIG8rIGA6b3NvKy86Ojo6L3NzLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3NvLzotLS0tLS0tLS0tLS06b3MrYCAvTXMuIGAtK3lzc3Nvb29zcy1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGArc28rLzo6Ojo6Ojo6Oi8rb3NvLiAgK01NZC0gIC5oTm1taC0tLS1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDorb29vb3Nzc3Nvb29vbys6YCAgIHlNTU15YCAgLU1NTU4vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4uOmRtbW0vLi4uYCAgICAgIDpOTU1NOiAgIHNNTU1tYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpNTU1tLiAgICAgICAgICAgeU1NTWggICAuZE1NTXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5TU1NeSAgICAgICBgYC46K3lNTU1OOiAgIDpOTU1OOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYG1NTU0vICBgYC0rc2htTU1NTU1NTk55ICAgIHNNTU1tYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL05NTU4tOm9obU1NTU1OTm1keW8rLy0tICAgIC5tTU1Nb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc01NTU1tTU1NTU5teW8vLmAgICBgLjovK29zc29kTU1NTjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1NTU1NTU5teSsuYCAgICBgLSt5bU5NTU1NTU1NTU1NTU1kYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6TU1NTU5zOmAgIGBgLi9veW1OTU1NTU5kaHlzc3lobU1NTU1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlNTU1OeW9vb3loZE5OTU1NTU5NTU1Nb2AgICAgICBgZE1NTWRgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1kTk1NTU1NTU1NTU5OTmR5KzpvTU1NTjogICAgYDpoTU1NTjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA6K3N5eXl5c28vOi5gICAgICB5TU1NbWAgYC9kTU1NTWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRNTU1ob21NTU1OaC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLU5NTU1NTU1OeS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtOTU1NbXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc01tb2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL2BcblxuKi9cblxuLy8gdmFyIGJyb3dzZXIgPSBicm93c2VyIHx8IGNocm9tZTtcblxuLy8gdmFyIGNoZWNrU2l0ZV9pbl9wcm9ncmVzcyA9IGZhbHNlO1xuXG52YXIgX2RlYnVnID0gMDsgLy8gMD1xdWlldCwgMT12ZXJib3NlLCAyPW1vcmUgdmVyYm9zZSwgMz0gdmVyeSB2ZXJ5IHZlcmJvc2UsIDQ9ZXZlbiBtb3JlLiA1IHZlcnkgdmVyeSB2ZXJib3NlXG5pZiAoX2RlYnVnKSB7XG4gICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oXCJERUJVRyBMRVZFTFwiLCBfZGVidWcpO1xufVxuXG52YXIgRE9NQUlOICAgICA9IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lO1xudmFyIG1haiAgICAgICAgPSAnMjAxODA5MDExODQ2JztcblxuLyoqKioqIGNvbnN0YW50cyBhbmQgdmFyaWFibGVzICoqKioqL1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gaW5jb25udSAgICAgOiBcIm5vbiBjbGFzc8OpXCIsXG4gY2FwaXRhbCAgICAgOiBcIkNlIG3DqWRpYSBkw6lwZW5kIGQnaW50w6lyw6p0cyBpbmR1c3RyaWVscywgZmluYW5jaWVycywgb3UgZGUgZ3JvdXBlIGRlIHByZXNzZS5cIixcbiBldGF0ICAgICAgICA6IFwiQ2UgbcOpZGlhIGTDqXBlbmQgZCd1biBvdSBwbHVzaWV1cnMgw6l0YXRzXCIsXG4gaW5kZXBlbmRhbnQgOiBcIkNlIG3DqWRpYSBlc3QgaW5kw6lwZW5kYW50IHZpcyDDoCB2aXMgZCdpbnTDqXLDqnRzIGluZHVzdHJpZWxzLCBmaW5hbmNpZXJzLCBncm91cGUgZGUgcHJlc3NlIG91IMOpdGF0aXF1ZS5cIixcbiByaWVuICAgICAgICA6IFwicmllblwiXG59O1xudmFyIGljb25lcyA9IHtcbmluY29ubnUgICAgIDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUEgQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQUIzUkpUVVVINGdFRER5b1F3UTBOQmdBQUNCbEpSRUZVV01PdGwxdHNIT1VWeDM4eiBzeGV2YjN1ejE5bmRyTzM0a2tBTTlzWW1KQ0doaUVvSnBWUXhOS2xBZVFIUkYwSWZtZ3BSY1pIb0d5QWVpdnBXQkNvVjdVUERBMGxWIDJoQURJcEFvSVkzeFpSK0lMN0c5cnVQTjJydmUyYlZuYi9iT2ZIMXd2UFd5dHBPSEhtbWttZlBkL3VmOHozZk9HV2wwZEZTd2hjaXkgektWTGw3QmFyZXpkdXhmRE1BQ1FKQWxKa2hEaWY4dlh2OSt0bUxZYWxDUUpUZE00ZS9ZVDZ1dnIyYk5uRHlhVENTRUVxVlNLVENhTiB3K0Vrbjg5ak5wdXhXcTBvaXZML0F5RExNa05EUTRSQ0lXcHFhcG1jbk1CdWQ5RFhkNTZMRjc4QkpGNTQ0U1NSeUN5YWxxYXRyWTNkIHUzZGpzVmlLUU83a0ZXa3JDZ3pENE8yMzN5SWNua0tTSkd3Mkc5bHNGbDNYQ1FhRGZQMzExeHc5MnN2RER6OU1LclhJMHRJUzQrT2ogN055NWkrYm1IZGp0ZG1wcWFyWUVZZHJxOEtHaFFRWUhCM2orK1YvaWNEaDQvZlhYT0h6NE1HKzg4VHNhRzVzNGRlclhYTHAwRVUzVCBtSmlZWUdFaFRqUWE1ZVdYZjh2VnExY3hESU9ISGpxQTM3OTlVeER5WnR6UHpjM3h4UmRma012bDZPb0s4c1FUUCtPZWUrN0I1WExUIDJOaUVvaWgwZFhVUmlVVHdlcjI4K3Vxcm5EejVJblYxZGJoY0xoWVhVMFNqdC9qODg4KzVjZVBHNWpUL1VDR0VJQlFLb1drYWdVQUEgSVFUNWZKNjZ1anFPSC84RlgzNzVKYUhRTUFCTlRVM1liRGFPSEhtTUF3Y2VZbkZ4RWFmVGlTd3I1SEk1WkZsRzB6UXVYdnlHY0RpTSBKRWxiQTVBa2lYQTR6TGZmWG1Gd2NJRHU3aDU4UGo4ZmZmUm5VcWtVUjQvMjRuRFlPWDM2TkFBZWp3ZUFXR3dlZ0pHUkVRS0JSckxaIERMcXVGL2RNcDlOY3VYS1pSQ0pSQmtKZWY3aW1hZlQzOTdPOHZFd3NGbU4yZHBZVEowNHdPRGpJWC83eUVUNmZqMlBIanRQWGQ1N3Ygdi84ZWg4T0IyV3dtbVV5U3lXUUloNmRvYm00bW1VeVZjQzVKRW9sRWdvR0I3eWdVQ3B0N1lHeHNqRmhzdnBoa3hzZkhjRHBkUFA3NCBUL253d3ovUjMzK05wNTc2T2RYVjFadysvVGZNWmd0V3E1VlVLc1hjM0J5SlJBS2Z6MDh5cVpaWktra1NrNU5UM0xvVktSbVQxd1l6IG1RdzNib3lYSUM4VUNnd05EOVBVdkFPdno4L3Bqei9tK3ZYcjNIZC9GeGN1WEtDLy96dDgvZ0R6c1FVdVg3bEtUYTBUcTlXS3Bta2IgOHAzUDV4Z2RIU3RtVTdpZEIyUlpKaHllNHR5NWMwWHVBQVRnclY2azJ6OUxoZGxZWFNnRWMrbGF2cnB1WjBlRG9Nc1hwMkJJNUFzbSBFaGtiYzhzQjRzbkM3ZFhsQVY1YmE2ZTN0eGU3M1k0UVlqVVBDQ0dJUnVjb0ZBb2x5Q1hnUnp1bU9OQTRqU0drb2k1WE1LRm1IMkJmIFlKbzl2bGwwWTVYSkZVTmhMRGJOMmV2M0UwdFhvVWlsSUZZRFVpT1JXTURoY0NDRVdLWEFNQXhVVlMxTEZrSkl6S1FjNUFvbURDRVYgbi9TeUJXM1p3clRxSktaVnNwUzNrQytZVUNTRDNRM3pQSDMvRUVGdkJKTnNsSGxCMTNWVU5WbjhOcTBwczlsczJXU3pvdU91VExPZSBUUUZVVy9NY2FwcmtuK05kM0Z5NUQxRkk4MEI5aUFjRE14aENvczI5UUswMXozVFNTU3BuUTZLMFltWXk2YUt4OHByU01QUVM5d3ZBIGFpclE1bDdBck9nbHdDeUtqcjgyU1ozTHlWTW5UdEcrcDVka3JxSmtMUktVaCtHcXJLd1VTZ0hBYXVVcnVidEFldG5DcHlQM0VsMnEgUVpMV1d5RlJZZEtwRmxORWIwVm9ibTRpbHF0blJaZTVHekdaVEVWajVUVkZSWVd0UEdxQjJVVTdCVU5Ha1FUeWJSQUNjRmRsdU5jMSB4Y1RFT0lIdGZ2SzJUcVpWZTNIT1ppSkpFcFdWdGxJQXNpempkRHJLa3dlUUw1aTRPdFBFU016RFJNSk52ckJhUUhWRHhxUkFkRHBFIFFrM1F2Zjh3RjJmdUk1bTFyb0psWXlDS291QndPSXZmeFVUazhUUmdNcFZYWjBOSVhQNVBFKzlmMjBmZitFNEVGT25vOWtmb3FMN00gOE5BZ3dXQVgvczVuT0R2NklDTXhEL05hRmJvaHdROENzTEt5RXJmYlhhUzdtQWNhR2hwd09CekU0L0VOczFqQmtOR1dyU1N6dG1KdyBHUUtXOGxZcUxWWVVXZWJJa1NQOFM5ZjV3OTgvcG5YSGRyS0ZUTmtOOEhxOUpVMUtFVUJWVlJVdExhM0U0L0VOWFNkTGd1aFNEWDhOIEhhRFNsR0ZscFVDdHcwMlZwNU5IOXU0dHVuZFBNTWdISDd6UHdVZU9vT1hIUytxQ3hXS2h2YjBkUlZGS0FhekpybDI3bUppNHdjTEMgd29aZUVFTGc5QWNaSGc2UnkyWjU4MWV2NDNJNXNWb3N4VGsrbjQrMjFsYkd4MFlKQkFLb2F1SjI5MnpRMk5qRTl1MkJrdHNtcjkvYyBicmZUM2QyRDJXemVzSVdTSkFtWDAwbGtkZ2EvMzR0M1cwUEo0VXRMUzh6TnpkSFIwY0h3OEJCdWR4MFdpNlZZQTNwNlZ2ZGVMNllmIFd0alcxb2FxcWd3TWZGY0d3bUt4SU1zUzgvTnp0TFkrV2RUSFlqRSsrK3djWjg1OFFpUVNRZGNObHBZV1dWeE00WEs1VUZXVi9mdjMgNC9GNHl2WXNDM3RGVWVqcDZVSFhkVUtoWVhSZEwvNkFWRlZWa2Nsa1NLZlRiTnUyamRIUlVmcjZ6dlBwcC85Z1pHU0VRNGNPY2ZMayBpOXk4ZVpNelp6NWhjSENRZ3djUFlqYWJhV3RyMzlDclpRQ0VFSmpOWnZidDIwZDFkUlVEQXdOb21nYUEzVzRuSG8ramFScnZ2dnQ3IFlyRVl5OHZMZEhVRmFXOXZwNk9qZzJlZmZRNkFscFlXM252dmp4dzdkaHl2MTd0cFY3eGhXeTZFUUZFVU9qdTc4SGdhQ0lXR0NZZkQgMk8xMjV1Zm5jYnZkU0pMTVk0LzloR0F3U0VQRE5xNWQremZuejMvR2M4ODlqOC9ubzZhbWxuZzhUandldysvM2wvUVpkd1N3WHJ4ZSBML1gxOVVTalVVd21oWW9LR3krOTlESjFkWFdvcXNyVTFCU1RrNU8wdDdlanFpb1hMbnhGYzNNejc3enpOdTN0TzJsc2JDcnBnTW9DICswNC9wK3R2QUt5V2JrVlJTQ2FUcUtvS0NDb3FiTlRXMXZMV1cyOHlNelBEeXNveVhxK1hVNmQrUXlEUWhCQ2JBN2k3OG5XYkZpRkUgc1dvNkhBNWFXbHBvYVdrdFpyZEhILzB4dDI1RjJMbHpGNis4OGhxTmpWc2ZmbGNVM0FuUW1oaUdRV2RuSjA4Ly9ReTl2VTlTWDErLyBwZXZYNUw4Yk9Nc0V1eitDbmdBQUFCbDBSVmgwUTI5dGJXVnVkQUJEY21WaGRHVmtJSGRwZEdnZ1IwbE5VRmVCRGhjQUFBQWxkRVZZIGRHUmhkR1U2WTNKbFlYUmxBREl3TVRndE1ERXRNRE5VTVRZNk5EQTZORFVyTURFNk1ERGU3VVowQUFBQUpYUkZXSFJrWVhSbE9tMXYgWkdsbWVRQXlNREU0TFRBeExUQXpWREUyT2pRd09qUTFLekF4T2pBd3I3RCt5QUFBQUFCSlJVNUVya0pnZ2c9PScsXG5jYXBpdGFsICAgICA6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTiBBQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBIENYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUFCM1JKVFVVSDRnRUREeW9Rd1EwTkJnQUFDQmxKUkVGVVdNT3RsMXRzSE9VVngzOHogc3hldmIzdXoxOW5kck8zNGtrQU05c1ltSkNHaGlFb0pwVlF4TktsQWVRSFJGMElmbWdwUmNaSG9HeUFlaXZwV0JDb1Y3VVBEQTBsViAyaEFESXBBb0lZM3haUitJTDdHOXJ1UE4ycnZlMmJWbmIvYk9mSDF3dlBXeXRwT0hIbW1rbWZQZC91Zjh6M2ZPR1dsMGRGU3doY2l5IHpLVkxsN0JhcmV6ZHV4ZkRNQUNRSkFsSmtoRGlmOHZYdjkrdG1MWWFsQ1FKVGRNNGUvWVQ2dXZyMmJObkR5YVRDU0VFcVZTS1RDYU4gdytFa244OWpOcHV4V3Ewb2l2TC9BeURMTWtORFE0UkNJV3BxYXBtY25NQnVkOURYZDU2TEY3OEJKRjU0NFNTUnlDeWFscWF0clkzZCB1M2Rqc1ZpS1FPN2tGV2tyQ2d6RDRPMjMzeUljbmtLU0pHdzJHOWxzRmwzWENRYURmUDMxMXh3OTJzdkREejlNS3JYSTB0SVM0K09qIDdOeTVpK2JtSGRqdGRtcHFhcllFWWRycThLR2hRUVlIQjNqKytWL2ljRGg0L2ZYWE9IejRNRys4OFRzYUc1czRkZXJYWExwMEVVM1QgbUppWVlHRWhUalFhNWVXWGY4dlZxMWN4RElPSEhqcUEzNzk5VXhEeVp0elB6YzN4eFJkZmtNdmw2T29LOHNRVFArT2VlKzdCNVhMVCAyTmlFb2loMGRYVVJpVVR3ZXIyOCt1cXJuRHo1SW5WMWRiaGNMaFlYVTBTanQvajg4OCs1Y2VQRzVqVC9VQ0dFSUJRS29Xa2FnVUFBIElRVDVmSjY2dWpxT0gvOEZYMzc1SmFIUU1BQk5UVTNZYkRhT0hIbU1Bd2NlWW5GeEVhZlRpU3dyNUhJNVpGbEcwelF1WHZ5R2NEaU0gSkVsYkE1QWtpWEE0ekxmZlhtRndjSUR1N2g1OFBqOGZmZlJuVXFrVVI0LzI0bkRZT1gzNk5BQWVqd2VBV0d3ZWdKR1JFUUtCUnJMWiBETHF1Ri9kTXA5TmN1WEtaUkNKUkJrSmVmN2ltYWZUMzk3Tzh2RXdzRm1OMmRwWVRKMDR3T0RqSVgvN3lFVDZmajJQSGp0UFhkNTd2IHYvOGVoOE9CMld3bW1VeVN5V1FJaDZkb2JtNG1tVXlWY0M1SkVvbEVnb0dCN3lnVUNwdDdZR3hzakZoc3ZwaGt4c2ZIY0RwZFBQNzQgVC9ud3d6L1IzMytOcDU3Nk9kWFYxWncrL1RmTVpndFdxNVZVS3NYYzNCeUpSQUtmejA4eXFaWlpLa2tTazVOVDNMb1ZLUm1UMXdZeiBtUXczYm95WElDOFVDZ3dORDlQVXZBT3Z6OC9wanovbSt2WHIzSGQvRnhjdVhLQy8venQ4L2dEenNRVXVYN2xLVGEwVHE5V0twbWtiIDhwM1A1eGdkSFN0bVU3aWRCMlJaSmh5ZTR0eTVjMFh1QUFUZ3JWNmsyejlMaGRsWVhTZ0VjK2xhdnJwdVowZURvTXNYcDJCSTVBc20gRWhrYmM4c0I0c25DN2RYbEFWNWJhNmUzdHhlNzNZNFFZalVQQ0NHSVJ1Y29GQW9seUNYZ1J6dW1PTkE0alNHa29pNVhNS0ZtSDJCZiBZSm85dmxsMFk1WEpGVU5oTERiTjJldjNFMHRYb1VpbElGWURVaU9SV01EaGNDQ0VXS1hBTUF4VVZTMUxGa0pJektRYzVBb21EQ0VWIG4vU3lCVzNad3JUcUpLWlZzcFMza0MrWVVDU0QzUTN6UEgzL0VFRnZCSk5zbEhsQjEzVlVOVm44TnEwcHM5bHMyV1N6b3VPdVRMT2UgVFFGVVcvTWNhcHJrbitOZDNGeTVEMUZJODBCOWlBY0RNeGhDb3MyOVFLMDF6M1RTU1NwblE2SzBZbVl5NmFLeDhwclNNUFFTOXd2QSBhaXJRNWw3QXJPZ2x3Q3lLanI4MlNaM0x5Vk1uVHRHK3A1ZGtycUprTFJLVWgrR3FyS3dVU2dIQWF1VXJ1YnRBZXRuQ3B5UDNFbDJxIFFaTFdXeUZSWWRLcEZsTkViMFZvYm00aWxxdG5SWmU1R3pHWlRFVmo1VFZGUllXdFBHcUIyVVU3QlVOR2tRVHliUkFDY0ZkbHVOYzEgeGNURU9JSHRmdksyVHFaVmUzSE9aaUpKRXBXVnRsSUFzaXpqZERyS2t3ZVFMNWk0T3RQRVNNekRSTUpOdnJCYVFIVkR4cVJBZERwRSBRazNRdmY4d0YyZnVJNW0xcm9KbFl5Q0tvdUJ3T0l2ZnhVVGs4VFJnTXBWWFowTklYUDVQRSs5ZjIwZmYrRTRFRk9ubzlrZm9xTDdNIDhOQWd3V0FYL3M1bk9EdjZJQ014RC9OYUZib2h3UThDc0xLeUVyZmJYYVM3bUFjYUdocHdPQnpFNC9FTnMxakJrTkdXclNTenRtSncgR1FLVzhsWXFMVllVV2ViSWtTUDhTOWY1dzk4L3BuWEhkcktGVE5rTjhIcTlKVTFLRVVCVlZSVXRMYTNFNC9FTlhTZExndWhTRFg4TiBIYURTbEdGbHBVQ3R3MDJWcDVOSDl1NHR1bmRQTU1nSEg3elB3VWVPb09YSFMrcUN4V0todmIwZFJWRktBYXpKcmwyN21KaTR3Y0xDIHdvWmVFRUxnOUFjWkhnNlJ5Mlo1ODFldjQzSTVzVm9zeFRrK240KzIxbGJHeDBZSkJBS29hdUoyOTJ6UTJOakU5dTJCa3RzbXI5L2MgYnJmVDNkMkQyV3plc0lXU0pBbVgwMGxrZGdhLzM0dDNXMFBKNFV0TFM4ek56ZEhSMGNIdzhCQnVkeDBXaTZWWUEzcDZWdmRlTDZZZiBXdGpXMW9hcXFnd01mRmNHd21LeElNc1M4L056dExZK1dkVEhZakUrKyt3Y1o4NThRaVFTUWRjTmxwWVdXVnhNNFhLNVVGV1YvZnYzIDQvRjR5dllzQzN0RlVlanA2VUhYZFVLaFlYUmRMLzZBVkZWVmtjbGtTS2ZUYk51MmpkSFJVZnI2enZQcHAvOWdaR1NFUTRjT2NmTGsgaTl5OGVaTXpaejVoY0hDUWd3Y1BZamFiYVd0cjM5Q3JaUUNFRUpqTlp2YnQyMGQxZFJVREF3Tm9tZ2FBM1c0bkhvK2phUnJ2dnZ0NyBZckVZeTh2TGRIVUZhVzl2cDZPamcyZWZmUTZBbHBZVzNudnZqeHc3ZGh5djE3dHBWN3hoV3k2RVFGRVVPanU3OEhnYUNJV0dDWWZEIDJPMTI1dWZuY2J2ZFNKTE1ZNC85aEdBd1NFUEROcTVkK3pmbnozL0djODg5ajgvbm82YW1sbmc4VGp3ZXcrLzNsL1FaZHdTd1hyeGUgTC9YMTlVU2pVVXdtaFlvS0d5Kzk5REoxZFhXb3FzclUxQlNUazVPMHQ3ZWpxaW9YTG54RmMzTXo3N3p6TnUzdE8ybHNiQ3JwZ01vQyArMDQvcCt0dkFLeVdia1ZSU0NhVHFLb0tDQ29xYk5UVzF2TFdXMjh5TXpQRHlzb3lYcStYVTZkK1F5RFFoQkNiQTdpNzhuV2JGaUZFIHNXbzZIQTVhV2xwb2FXa3RacmRISC8weHQyNUYyTGx6RjYrODhocU5qVnNmZmxjVTNBblFtaGlHUVdkbkowOC8vUXk5dlU5U1gxKy8gcGV2WDVMOGJPTXNFdXorQ25nQUFBQmwwUlZoMFEyOXRiV1Z1ZEFCRGNtVmhkR1ZrSUhkcGRHZ2dSMGxOVUZlQkRoY0FBQUFsZEVWWSBkR1JoZEdVNlkzSmxZWFJsQURJd01UZ3RNREV0TUROVU1UWTZOREE2TkRVck1ERTZNRERlN1VaMEFBQUFKWFJGV0hSa1lYUmxPbTF2IFpHbG1lUUF5TURFNExUQXhMVEF6VkRFMk9qUXdPalExS3pBeE9qQXdyN0QreUFBQUFBQkpSVTVFcmtKZ2dnPT0nLFxuZXRhdCAgICAgICAgOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQSBDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFBQjNSSlRVVUg0Z0VERHlvUXdRME5CZ0FBQ0JsSlJFRlVXTU90bDF0c0hPVVZ4Mzh6IHN4ZXZiM3V6MTluZHJPMzRra0FNOXNZbUpDR2hpRW9KcFZReE5LbEFlUUhSRjBJZm1ncFJjWkhvR3lBZWl2cFdCQ29WN1VQREEwbFYgMmhBRElwQW9JWTN4WlIrSUw3RzlydVBOMnJ2ZTJiVm5iL2JPZkgxd3ZQV3l0cE9ISG1ta21mUGQvdWY4ejNmT0dXbDBkRlN3aGNpeSB6S1ZMbDdCYXJlemR1eGZETUFDUUpBbEpraERpZjh2WHY5K3RtTFlhbENRSlRkTTRlL1lUNnV2cjJiTm5EeWFUQ1NFRXFWU0tUQ2FOIHcrRWtuODlqTnB1eFdxMG9pdkwvQXlETE1rTkRRNFJDSVdwcWFwbWNuTUJ1ZDlEWGQ1NkxGNzhCSkY1NDRTU1J5Q3lhbHFhdHJZM2QgdTNkanNWaUtRTzdrRldrckNnekQ0TzIzM3lJY25rS1NKR3cyRzlsc0ZsM1hDUWFEZlAzMTF4dzkyc3ZERHo5TUtyWEkwdElTNCtPaiA3Tnk1aStibUhkanRkbXBxYXJZRVlkcnE4S0doUVFZSEIzaisrVi9pY0RoNC9mWFhPSHo0TUcrODhUc2FHNXM0ZGVyWFhMcDBFVTNUIG1KaVlZR0VoVGpRYTVlV1hmOHZWcTFjeERJT0hIanFBMzc5OVV4RHladHpQemMzeHhSZGZrTXZsNk9vSzhzUVRQK09lZSs3QjVYTFQgMk5pRW9paDBkWFVSaVVUd2VyMjgrdXFybkR6NUluVjFkYmhjTGhZWFUwU2p0L2o4ODgrNWNlUEc1alQvVUNHRUlCUUtvV2thZ1VBQSBJUVQ1Zko2NnVqcU9ILzhGWDM3NUphSFFNQUJOVFUzWWJEYU9ISG1NQXdjZVluRnhFYWZUaVN3cjVISTVaRmxHMHpRdVh2eUdjRGlNIEpFbGJBNUFraVhBNHpMZmZYbUZ3Y0lEdTdoNThQajhmZmZSblVxa1VSNC8yNG5EWU9YMzZOQUFlandlQVdHd2VnSkdSRVFLQlJyTFogRExxdUYvZE1wOU5jdVhLWlJDSlJCa0plZjdpbWFmVDM5N084dkV3c0ZtTjJkcFlUSjA0d09EaklYLzd5RVQ2ZmoyUEhqdFBYZDU3diB2LzhlaDhPQjJXd21tVXlTeVdRSWg2ZG9ibTRtbVV5VmNDNUpFb2xFZ29HQjd5Z1VDcHQ3WUd4c2pGaHN2cGhreHNmSGNEcGRQUDc0IFQvbnd3ei9SMzMrTnA1NzZPZFhWMVp3Ky9UZk1aZ3RXcTVWVUtzWGMzQnlKUkFLZnowOHlxWlpaS2trU2s1TlQzTG9WS1JtVDF3WXogbVF3M2JveVhJQzhVQ2d3TkQ5UFV2QU92ejgvcGp6L20rdlhyM0hkL0Z4Y3VYS0MvL3p0OC9nRHpzUVV1WDdsS1RhMFRxOVdLcG1rYiA4cDNQNXhnZEhTdG1VN2lkQjJSWkpoeWU0dHk1YzBYdUFBVGdyVjZrMno5TGhkbFlYU2dFYytsYXZycHVaMGVEb01zWHAyQkk1QXNtIEVoa2JjOHNCNHNuQzdkWGxBVjViYTZlM3R4ZTczWTRRWWpVUENDR0lSdWNvRkFvbHlDWGdSenVtT05BNGpTR2tvaTVYTUtGbUgyQmYgWUpvOXZsbDBZNVhKRlVOaExEYk4yZXYzRTB0WG9VaWxJRllEVWlPUldNRGhjQ0NFV0tYQU1BeFVWUzFMRmtKSXpLUWM1QW9tRENFViBuL1N5QlczWndyVHFKS1pWc3BTM2tDK1lVQ1NEM1EzelBIMy9FRUZ2QkpOc2xIbEIxM1ZVTlZuOE5xMHBzOWxzMldTem91T3VUTE9lIFRRRlVXL01jYXBya24rTmQzRnk1RDFGSTgwQjlpQWNETXhoQ29zMjlRSzAxejNUU1NTcG5RNkswWW1ZeTZhS3g4cHJTTVBRUzl3dkEgYWlyUTVsN0FyT2dsd0N5S2pyODJTWjNMeVZNblR0RytwNWRrcnFKa0xSS1VoK0dxckt3VVNnSEFhdVVydWJ0QWV0bkNweVAzRWwycSBRWkxXV3lGUllkS3BGbE5FYjBWb2JtNGlscXRuUlplNUd6R1pURVZqNVRWRlJZV3RQR3FCMlVVN0JVTkdrUVR5YlJBQ2NGZGx1TmMxIHhjVEVPSUh0ZnZLMlRxWlZlM0hPWmlKSkVwV1Z0bElBc2l6amREcktrd2VRTDVpNE90UEVTTXpEUk1KTnZyQmFRSFZEeHFSQWREcEUgUWszUXZmOHdGMmZ1STVtMXJvSmxZeUNLb3VCd09JdmZ4VVRrOFRSZ01wVlhaME5JWFA1UEUrOWYyMGZmK0U0RUZPbm85a2ZvcUw3TSA4TkFnd1dBWC9zNW5PRHY2SUNNeEQvTmFGYm9od1E4Q3NMS3lFcmZiWGFTN21BY2FHaHB3T0J6RTQvRU5zMWpCa05HV3JTU3p0bUp3IEdRS1c4bFlxTFZZVVdlYklrU1A4UzlmNXc5OC9wblhIZHJLRlROa044SHE5SlUxS0VVQlZWUlV0TGEzRTQvRU5YU2RMZ3VoU0RYOE4gSGFEU2xHRmxwVUN0dzAyVnA1Tkg5dTR0dW5kUE1NZ0hIN3pQd1VlT29PWEhTK3FDeFdLaHZiMGRSVkZLQWF6SnJsMjdtSmk0d2NMQyB3b1plRUVMZzlBY1pIZzZSeTJaNTgxZXY0M0k1c1Zvc3hUaytuNCsyMWxiR3gwWUpCQUtvYXVKMjkyelEyTmpFOXUyQmt0c21yOS9jIGJyZlQzZDJEMld6ZXNJV1NKQW1YMDBsa2RnYS8zNHQzVzBQSjRVdExTOHpOemRIUjBjSHc4QkJ1ZHgwV2k2VllBM3A2VnZkZUw2WWYgV3RqVzFvYXFxZ3dNZkZjR3dtS3hJTXNTOC9OenRMWStXZFRIWWpFKysrd2NaODU4UWlRU1FkY05scFlXV1Z4TTRYSzVVRldWL2Z2MyA0L0Y0eXZZc0MzdEZVZWpwNlVIWGRVS2hZWFJkTC82QVZGVlZrY2xrU0tmVGJOdTJqZEhSVWZyNnp2UHBwLzlnWkdTRVE0Y09jZkxrIGk5eThlWk16Wno1aGNIQ1Fnd2NQWWphYmFXdHIzOUNyWlFDRUVKak5admJ0MjBkMWRSVURBd05vbWdhQTNXNG5IbytqYVJydnZ2dDcgWXJFWXk4dkxkSFVGYVc5dnA2T2pnMmVmZlE2QWxwWVczbnZ2anh3N2RoeXYxN3RwVjd4aFd5NkVRRkVVT2p1NzhIZ2FDSVdHQ1lmRCAyTzEyNXVmbmNidmRTSkxNWTQvOWhHQXdTRVBETnE1ZCt6Zm56My9HYzg4OWo4L25vNmFtbG5nOFRqd2V3Ky8zbC9RWmR3U3dYcnhlIEwvWDE5VVNqVVV3bWhZb0tHeSs5OURKMWRYV29xc3JVMUJTVGs1TzB0N2VqcWlvWExueEZjM016Nzd6ek51M3RPMmxzYkNycGdNb0MgKzA0L3ArdHZBS3lXYmtWUlNDYVRxS29LQ0NvcWJOVFcxdkxXVzI4eU16UER5c295WHErWFU2ZCtReURRaEJDYkE3aTc4bldiRmlGRSBzV282SEE1YVdscG9hV2t0WnJkSEgvMHh0MjVGMkxsekY2Kzg4aHFOalZzZmZsY1UzQW5RbWhpR1FXZG5KMDgvL1F5OXZVOVNYMSsvIHBldlg1TDhiT01zRXV6K0NuZ0FBQUJsMFJWaDBRMjl0YldWdWRBQkRjbVZoZEdWa0lIZHBkR2dnUjBsTlVGZUJEaGNBQUFBbGRFVlkgZEdSaGRHVTZZM0psWVhSbEFESXdNVGd0TURFdE1ETlVNVFk2TkRBNk5EVXJNREU2TUREZTdVWjBBQUFBSlhSRldIUmtZWFJsT20xdiBaR2xtZVFBeU1ERTRMVEF4TFRBelZERTJPalF3T2pRMUt6QXhPakF3cjdEK3lBQUFBQUJKUlU1RXJrSmdnZz09JyxcbmluZGVwZW5kYW50IDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUEgQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQUIzUkpUVVVINGdFRER5b1F3UTBOQmdBQUNCbEpSRUZVV01PdGwxdHNIT1VWeDM4eiBzeGV2YjN1ejE5bmRyTzM0a2tBTTlzWW1KQ0doaUVvSnBWUXhOS2xBZVFIUkYwSWZtZ3BSY1pIb0d5QWVpdnBXQkNvVjdVUERBMGxWIDJoQURJcEFvSVkzeFpSK0lMN0c5cnVQTjJydmUyYlZuYi9iT2ZIMXd2UFd5dHBPSEhtbWttZlBkL3VmOHozZk9HV2wwZEZTd2hjaXkgektWTGw3QmFyZXpkdXhmRE1BQ1FKQWxKa2hEaWY4dlh2OSt0bUxZYWxDUUpUZE00ZS9ZVDZ1dnIyYk5uRHlhVENTRUVxVlNLVENhTiB3K0Vrbjg5ak5wdXhXcTBvaXZML0F5RExNa05EUTRSQ0lXcHFhcG1jbk1CdWQ5RFhkNTZMRjc4QkpGNTQ0U1NSeUN5YWxxYXRyWTNkIHUzZGpzVmlLUU83a0ZXa3JDZ3pENE8yMzN5SWNua0tTSkd3Mkc5bHNGbDNYQ1FhRGZQMzExeHc5MnN2RER6OU1LclhJMHRJUzQrT2ogN055NWkrYm1IZGp0ZG1wcWFyWUVZZHJxOEtHaFFRWUhCM2orK1YvaWNEaDQvZlhYT0h6NE1HKzg4VHNhRzVzNGRlclhYTHAwRVUzVCBtSmlZWUdFaFRqUWE1ZVdYZjh2VnExY3hESU9ISGpxQTM3OTlVeER5WnR6UHpjM3h4UmRma012bDZPb0s4c1FUUCtPZWUrN0I1WExUIDJOaUVvaWgwZFhVUmlVVHdlcjI4K3Vxcm5EejVJblYxZGJoY0xoWVhVMFNqdC9qODg4KzVjZVBHNWpUL1VDR0VJQlFLb1drYWdVQUEgSVFUNWZKNjZ1anFPSC84RlgzNzVKYUhRTUFCTlRVM1liRGFPSEhtTUF3Y2VZbkZ4RWFmVGlTd3I1SEk1WkZsRzB6UXVYdnlHY0RpTSBKRWxiQTVBa2lYQTR6TGZmWG1Gd2NJRHU3aDU4UGo4ZmZmUm5VcWtVUjQvMjRuRFlPWDM2TkFBZWp3ZUFXR3dlZ0pHUkVRS0JSckxaIERMcXVGL2RNcDlOY3VYS1pSQ0pSQmtKZWY3aW1hZlQzOTdPOHZFd3NGbU4yZHBZVEowNHdPRGpJWC83eUVUNmZqMlBIanRQWGQ1N3Ygdi84ZWg4T0IyV3dtbVV5U3lXUUloNmRvYm00bW1VeVZjQzVKRW9sRWdvR0I3eWdVQ3B0N1lHeHNqRmhzdnBoa3hzZkhjRHBkUFA3NCBUL253d3ovUjMzK05wNTc2T2RYVjFadysvVGZNWmd0V3E1VlVLc1hjM0J5SlJBS2Z6MDh5cVpaWktra1NrNU5UM0xvVktSbVQxd1l6IG1RdzNib3lYSUM4VUNnd05EOVBVdkFPdno4L3Bqei9tK3ZYcjNIZC9GeGN1WEtDLy96dDgvZ0R6c1FVdVg3bEtUYTBUcTlXS3Bta2IgOHAzUDV4Z2RIU3RtVTdpZEIyUlpKaHllNHR5NWMwWHVBQVRnclY2azJ6OUxoZGxZWFNnRWMrbGF2cnB1WjBlRG9Nc1hwMkJJNUFzbSBFaGtiYzhzQjRzbkM3ZFhsQVY1YmE2ZTN0eGU3M1k0UVlqVVBDQ0dJUnVjb0ZBb2x5Q1hnUnp1bU9OQTRqU0drb2k1WE1LRm1IMkJmIFlKbzl2bGwwWTVYSkZVTmhMRGJOMmV2M0UwdFhvVWlsSUZZRFVpT1JXTURoY0NDRVdLWEFNQXhVVlMxTEZrSkl6S1FjNUFvbURDRVYgbi9TeUJXM1p3clRxSktaVnNwUzNrQytZVUNTRDNRM3pQSDMvRUVGdkJKTnNsSGxCMTNWVU5WbjhOcTBwczlsczJXU3pvdU91VExPZSBUUUZVVy9NY2FwcmtuK05kM0Z5NUQxRkk4MEI5aUFjRE14aENvczI5UUswMXozVFNTU3BuUTZLMFltWXk2YUt4OHByU01QUVM5d3ZBIGFpclE1bDdBck9nbHdDeUtqcjgyU1ozTHlWTW5UdEcrcDVka3JxSmtMUktVaCtHcXJLd1VTZ0hBYXVVcnVidEFldG5DcHlQM0VsMnEgUVpMV1d5RlJZZEtwRmxORWIwVm9ibTRpbHF0blJaZTVHekdaVEVWajVUVkZSWVd0UEdxQjJVVTdCVU5Ha1FUeWJSQUNjRmRsdU5jMSB4Y1RFT0lIdGZ2SzJUcVpWZTNIT1ppSkpFcFdWdGxJQXNpempkRHJLa3dlUUw1aTRPdFBFU016RFJNSk52ckJhUUhWRHhxUkFkRHBFIFFrM1F2Zjh3RjJmdUk1bTFyb0psWXlDS291QndPSXZmeFVUazhUUmdNcFZYWjBOSVhQNVBFKzlmMjBmZitFNEVGT25vOWtmb3FMN00gOE5BZ3dXQVgvczVuT0R2NklDTXhEL05hRmJvaHdROENzTEt5RXJmYlhhUzdtQWNhR2hwd09CekU0L0VOczFqQmtOR1dyU1N6dG1KdyBHUUtXOGxZcUxWWVVXZWJJa1NQOFM5ZjV3OTgvcG5YSGRyS0ZUTmtOOEhxOUpVMUtFVUJWVlJVdExhM0U0L0VOWFNkTGd1aFNEWDhOIEhhRFNsR0ZscFVDdHcwMlZwNU5IOXU0dHVuZFBNTWdISDd6UHdVZU9vT1hIUytxQ3hXS2h2YjBkUlZGS0FhekpybDI3bUppNHdjTEMgd29aZUVFTGc5QWNaSGc2UnkyWjU4MWV2NDNJNXNWb3N4VGsrbjQrMjFsYkd4MFlKQkFLb2F1SjI5MnpRMk5qRTl1MkJrdHNtcjkvYyBicmZUM2QyRDJXemVzSVdTSkFtWDAwbGtkZ2EvMzR0M1cwUEo0VXRMUzh6TnpkSFIwY0h3OEJCdWR4MFdpNlZZQTNwNlZ2ZGVMNllmIFd0alcxb2FxcWd3TWZGY0d3bUt4SU1zUzgvTnp0TFkrV2RUSFlqRSsrK3djWjg1OFFpUVNRZGNObHBZV1dWeE00WEs1VUZXVi9mdjMgNC9GNHl2WXNDM3RGVWVqcDZVSFhkVUtoWVhSZEwvNkFWRlZWa2Nsa1NLZlRiTnUyamRIUlVmcjZ6dlBwcC85Z1pHU0VRNGNPY2ZMayBpOXk4ZVpNelp6NWhjSENRZ3djUFlqYWJhV3RyMzlDclpRQ0VFSmpOWnZidDIwZDFkUlVEQXdOb21nYUEzVzRuSG8ramFScnZ2dnQ3IFlyRVl5OHZMZEhVRmFXOXZwNk9qZzJlZmZRNkFscFlXM252dmp4dzdkaHl2MTd0cFY3eGhXeTZFUUZFVU9qdTc4SGdhQ0lXR0NZZkQgMk8xMjV1Zm5jYnZkU0pMTVk0LzloR0F3U0VQRE5xNWQremZuejMvR2M4ODlqOC9ubzZhbWxuZzhUandldysvM2wvUVpkd1N3WHJ4ZSBML1gxOVVTalVVd21oWW9LR3krOTlESjFkWFdvcXNyVTFCU1RrNU8wdDdlanFpb1hMbnhGYzNNejc3enpOdTN0TzJsc2JDcnBnTW9DICswNC9wK3R2QUt5V2JrVlJTQ2FUcUtvS0NDb3FiTlRXMXZMV1cyOHlNelBEeXNveVhxK1hVNmQrUXlEUWhCQ2JBN2k3OG5XYkZpRkUgc1dvNkhBNWFXbHBvYVdrdFpyZEhILzB4dDI1RjJMbHpGNis4OGhxTmpWc2ZmbGNVM0FuUW1oaUdRV2RuSjA4Ly9ReTl2VTlTWDErLyBwZXZYNUw4Yk9Nc0V1eitDbmdBQUFCbDBSVmgwUTI5dGJXVnVkQUJEY21WaGRHVmtJSGRwZEdnZ1IwbE5VRmVCRGhjQUFBQWxkRVZZIGRHUmhkR1U2WTNKbFlYUmxBREl3TVRndE1ERXRNRE5VTVRZNk5EQTZORFVyTURFNk1ERGU3VVowQUFBQUpYUkZXSFJrWVhSbE9tMXYgWkdsbWVRQXlNREU0TFRBeExUQXpWREUyT2pRd09qUTFLekF4T2pBd3I3RCt5QUFBQUFCSlJVNUVya0pnZ2c9PScsXG5yaWVuICAgICAgICA6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTiBBQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBIENYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUFCM1JKVFVVSDRnRUREeW9Rd1EwTkJnQUFDQmxKUkVGVVdNT3RsMXRzSE9VVngzOHogc3hldmIzdXoxOW5kck8zNGtrQU05c1ltSkNHaGlFb0pwVlF4TktsQWVRSFJGMElmbWdwUmNaSG9HeUFlaXZwV0JDb1Y3VVBEQTBsViAyaEFESXBBb0lZM3haUitJTDdHOXJ1UE4ycnZlMmJWbmIvYk9mSDF3dlBXeXRwT0hIbW1rbWZQZC91Zjh6M2ZPR1dsMGRGU3doY2l5IHpLVkxsN0JhcmV6ZHV4ZkRNQUNRSkFsSmtoRGlmOHZYdjkrdG1MWWFsQ1FKVGRNNGUvWVQ2dXZyMmJObkR5YVRDU0VFcVZTS1RDYU4gdytFa244OWpOcHV4V3Ewb2l2TC9BeURMTWtORFE0UkNJV3BxYXBtY25NQnVkOURYZDU2TEY3OEJKRjU0NFNTUnlDeWFscWF0clkzZCB1M2Rqc1ZpS1FPN2tGV2tyQ2d6RDRPMjMzeUljbmtLU0pHdzJHOWxzRmwzWENRYURmUDMxMXh3OTJzdkREejlNS3JYSTB0SVM0K09qIDdOeTVpK2JtSGRqdGRtcHFhcllFWWRycThLR2hRUVlIQjNqKytWL2ljRGg0L2ZYWE9IejRNRys4OFRzYUc1czRkZXJYWExwMEVVM1QgbUppWVlHRWhUalFhNWVXWGY4dlZxMWN4RElPSEhqcUEzNzk5VXhEeVp0elB6YzN4eFJkZmtNdmw2T29LOHNRVFArT2VlKzdCNVhMVCAyTmlFb2loMGRYVVJpVVR3ZXIyOCt1cXJuRHo1SW5WMWRiaGNMaFlYVTBTanQvajg4OCs1Y2VQRzVqVC9VQ0dFSUJRS29Xa2FnVUFBIElRVDVmSjY2dWpxT0gvOEZYMzc1SmFIUU1BQk5UVTNZYkRhT0hIbU1Bd2NlWW5GeEVhZlRpU3dyNUhJNVpGbEcwelF1WHZ5R2NEaU0gSkVsYkE1QWtpWEE0ekxmZlhtRndjSUR1N2g1OFBqOGZmZlJuVXFrVVI0LzI0bkRZT1gzNk5BQWVqd2VBV0d3ZWdKR1JFUUtCUnJMWiBETHF1Ri9kTXA5TmN1WEtaUkNKUkJrSmVmN2ltYWZUMzk3Tzh2RXdzRm1OMmRwWVRKMDR3T0RqSVgvN3lFVDZmajJQSGp0UFhkNTd2IHYvOGVoOE9CMld3bW1VeVN5V1FJaDZkb2JtNG1tVXlWY0M1SkVvbEVnb0dCN3lnVUNwdDdZR3hzakZoc3ZwaGt4c2ZIY0RwZFBQNzQgVC9ud3d6L1IzMytOcDU3Nk9kWFYxWncrL1RmTVpndFdxNVZVS3NYYzNCeUpSQUtmejA4eXFaWlpLa2tTazVOVDNMb1ZLUm1UMXdZeiBtUXczYm95WElDOFVDZ3dORDlQVXZBT3Z6OC9wanovbSt2WHIzSGQvRnhjdVhLQy8venQ4L2dEenNRVXVYN2xLVGEwVHE5V0twbWtiIDhwM1A1eGdkSFN0bVU3aWRCMlJaSmh5ZTR0eTVjMFh1QUFUZ3JWNmsyejlMaGRsWVhTZ0VjK2xhdnJwdVowZURvTXNYcDJCSTVBc20gRWhrYmM4c0I0c25DN2RYbEFWNWJhNmUzdHhlNzNZNFFZalVQQ0NHSVJ1Y29GQW9seUNYZ1J6dW1PTkE0alNHa29pNVhNS0ZtSDJCZiBZSm85dmxsMFk1WEpGVU5oTERiTjJldjNFMHRYb1VpbElGWURVaU9SV01EaGNDQ0VXS1hBTUF4VVZTMUxGa0pJektRYzVBb21EQ0VWIG4vU3lCVzNad3JUcUpLWlZzcFMza0MrWVVDU0QzUTN6UEgzL0VFRnZCSk5zbEhsQjEzVlVOVm44TnEwcHM5bHMyV1N6b3VPdVRMT2UgVFFGVVcvTWNhcHJrbitOZDNGeTVEMUZJODBCOWlBY0RNeGhDb3MyOVFLMDF6M1RTU1NwblE2SzBZbVl5NmFLeDhwclNNUFFTOXd2QSBhaXJRNWw3QXJPZ2x3Q3lLanI4MlNaM0x5Vk1uVHRHK3A1ZGtycUprTFJLVWgrR3FyS3dVU2dIQWF1VXJ1YnRBZXRuQ3B5UDNFbDJxIFFaTFdXeUZSWWRLcEZsTkViMFZvYm00aWxxdG5SWmU1R3pHWlRFVmo1VFZGUllXdFBHcUIyVVU3QlVOR2tRVHliUkFDY0ZkbHVOYzEgeGNURU9JSHRmdksyVHFaVmUzSE9aaUpKRXBXVnRsSUFzaXpqZERyS2t3ZVFMNWk0T3RQRVNNekRSTUpOdnJCYVFIVkR4cVJBZERwRSBRazNRdmY4d0YyZnVJNW0xcm9KbFl5Q0tvdUJ3T0l2ZnhVVGs4VFJnTXBWWFowTklYUDVQRSs5ZjIwZmYrRTRFRk9ubzlrZm9xTDdNIDhOQWd3V0FYL3M1bk9EdjZJQ014RC9OYUZib2h3UThDc0xLeUVyZmJYYVM3bUFjYUdocHdPQnpFNC9FTnMxakJrTkdXclNTenRtSncgR1FLVzhsWXFMVllVV2ViSWtTUDhTOWY1dzk4L3BuWEhkcktGVE5rTjhIcTlKVTFLRVVCVlZSVXRMYTNFNC9FTlhTZExndWhTRFg4TiBIYURTbEdGbHBVQ3R3MDJWcDVOSDl1NHR1bmRQTU1nSEg3elB3VWVPb09YSFMrcUN4V0todmIwZFJWRktBYXpKcmwyN21KaTR3Y0xDIHdvWmVFRUxnOUFjWkhnNlJ5Mlo1ODFldjQzSTVzVm9zeFRrK240KzIxbGJHeDBZSkJBS29hdUoyOTJ6UTJOakU5dTJCa3RzbXI5L2MgYnJmVDNkMkQyV3plc0lXU0pBbVgwMGxrZGdhLzM0dDNXMFBKNFV0TFM4ek56ZEhSMGNIdzhCQnVkeDBXaTZWWUEzcDZWdmRlTDZZZiBXdGpXMW9hcXFnd01mRmNHd21LeElNc1M4L056dExZK1dkVEhZakUrKyt3Y1o4NThRaVFTUWRjTmxwWVdXVnhNNFhLNVVGV1YvZnYzIDQvRjR5dllzQzN0RlVlanA2VUhYZFVLaFlYUmRMLzZBVkZWVmtjbGtTS2ZUYk51MmpkSFJVZnI2enZQcHAvOWdaR1NFUTRjT2NmTGsgaTl5OGVaTXpaejVoY0hDUWd3Y1BZamFiYVd0cjM5Q3JaUUNFRUpqTlp2YnQyMGQxZFJVREF3Tm9tZ2FBM1c0bkhvK2phUnJ2dnZ0NyBZckVZeTh2TGRIVUZhVzl2cDZPamcyZWZmUTZBbHBZVzNudnZqeHc3ZGh5djE3dHBWN3hoV3k2RVFGRVVPanU3OEhnYUNJV0dDWWZEIDJPMTI1dWZuY2J2ZFNKTE1ZNC85aEdBd1NFUEROcTVkK3pmbnozL0djODg5ajgvbm82YW1sbmc4VGp3ZXcrLzNsL1FaZHdTd1hyeGUgTC9YMTlVU2pVVXdtaFlvS0d5Kzk5REoxZFhXb3FzclUxQlNUazVPMHQ3ZWpxaW9YTG54RmMzTXo3N3p6TnUzdE8ybHNiQ3JwZ01vQyArMDQvcCt0dkFLeVdia1ZSU0NhVHFLb0tDQ29xYk5UVzF2TFdXMjh5TXpQRHlzb3lYcStYVTZkK1F5RFFoQkNiQTdpNzhuV2JGaUZFIHNXbzZIQTVhV2xwb2FXa3RacmRISC8weHQyNUYyTGx6RjYrODhocU5qVnNmZmxjVTNBblFtaGlHUVdkbkowOC8vUXk5dlU5U1gxKy8gcGV2WDVMOGJPTXNFdXorQ25nQUFBQmwwUlZoMFEyOXRiV1Z1ZEFCRGNtVmhkR1ZrSUhkcGRHZ2dSMGxOVUZlQkRoY0FBQUFsZEVWWSBkR1JoZEdVNlkzSmxZWFJsQURJd01UZ3RNREV0TUROVU1UWTZOREE2TkRVck1ERTZNRERlN1VaMEFBQUFKWFJGV0hSa1lYUmxPbTF2IFpHbG1lUUF5TURFNExUQXhMVEF6VkRFMk9qUXdPalExS3pBeE9qQXdyN0QreUFBQUFBQkpSVTVFcmtKZ2dnPT0nLFxufTtcblxudmFyIGJhbmRlYXVfbXNncyA9IHtcbiAgICBpbmNvbm51ICAgICA6IFwiSW5jb25udVwiLFxuICAgIGNhcGl0YWwgICAgIDogXCJMaWVucyBjYXBpdGFsaXN0aXF1ZXNcIixcbiAgICBldGF0ICAgICAgICA6IFwiTGllbnMgw6l0YXRpcXVlc1wiLFxuICAgIGluZGVwZW5kYW50IDogXCJJbmTDqXBlbmRhbnQgZmluYW5jacOocmVtZW50XCIsXG4gICAgcmllbiAgICAgICAgOiBcInJpZW5cIlxufTtcblxudmFyIG93bmVyX21zZ3MgPSB7XG4gICAgaW5jb25udSAgICAgOiBcIkNlIHNpdGUgbidlc3QgcGFzIHLDqWbDqXJlbmPDqSBkYW5zIG5vdHJlIGJhc2UgZGUgZG9ubsOpZXMuXCIsXG4gICAgY2FwaXRhbCAgICAgOiBcIlZvaWNpIGxlcyBsaWVucyBjYXBpdGFsaXN0aXF1ZXMgYXZlYyBsZXMgcHJpbmNpcGF1eCBhY3Rpb25uYWlyZXMgZHUgbcOpZGlhIHF1ZSB2b3VzIGNvbnN1bHRleiA6XCIsXG4gICAgZXRhdCAgICAgICAgOiBcIkNlIG3DqWRpYSBlc3QgbGEgcHJvcHJpw6l0w6kgZHUgb3UgZGVzIMOpdGF0cyBzdWl2YW50cyA6XCIsXG4gICAgaW5kZXBlbmRhbnQgOiBcIkNlIHNpdGUgbidhIHBhcyBkZSBsaWVuIGNhcGl0YWxpc3RpcXVlIG91IMOpdGF0aXF1ZSDDoCBub3RyZSBjb25uYWlzc2FuY2VcIixcbiAgICByaWVuICAgICAgICA6IFwicmllblwiXG59O1xuXG4vLyB2YXJzIHRvIHNob3cgaW4gcHJlZnNcbnZhciBjb2xvcnMgPSB7XG4gICAgaW5jb25udSAgICAgOiBcIiMwMGE4NmJcIiwgLy8gYydlc3QgcXVlIGRlIGwnaW5mbyA6KVxuICAgIGNhcGl0YWwgICAgIDogXCIjMDBhODZiXCIsIC8vIGMnZXN0IHF1ZSBkZSBsJ2luZm8gOilcbiAgICBldGF0ICAgICAgICA6IFwiIzAwYTg2YlwiLCAvLyBjJ2VzdCBxdWUgZGUgbCdpbmZvIDopXG4gICAgaW5kZXBlbmRhbnQgOiBcIiMwMGE4NmJcIiwgLy8gYydlc3QgcXVlIGRlIGwnaW5mbyA6KVxuICAgIHJpZW4gICAgICAgIDogXCIjMDBhODZiXCIgLy8gYydlc3QgcXVlIGRlIGwnaW5mbyA6KVxuICAgIC8vXCIjQTJBOUFFXCIsIC8vIGdyaXNcbiAgICAvL1wiI0Q1MDMwM1wiLCAvLyByb3VnZVxuICAgIC8vXCIjRjVBNzI1XCIsIC8vIGphdW5lXG4gICAgLy9cIiMxMjlBRjBcIiwgLy8gYmxldVxuICAgIC8vXCIjNDY4ODQ3XCIsIC8vIHZlcnRcbiAgICAvL1wiIzQ2ODg0N1wiICAvLyBJTlNPVU1JUyBBVVNTSSA6RFxufTtcbi8vIGxldCBwb3NzZWRleF9jb2xvcnMgPSBbIFwiI0EyQTlBRVwiLCBcIiMxMjlBRjBcIiwgXCIjRDUwMzAzXCIsIFwiI0Y1QTcyNVwiLCBcIiM0Njg4NDdcIiBdO1xuLy8gbGV0IHBvc3NlZGV4X2Rlc2NzID0gWyBcImluY2xhc3NhYmxlXCIsIFwicGFyb2RpcXVlXCIsIFwicGFzIGZpYWJsZSBkdSB0b3V0XCIsIFwicGV1IGZpYWJsZVwiLCBcImZpYWJsZVwiIF07XG5cbnZhciBiYXNlX3VybCA9IFwiaHR0cDovL1wiK0RPTUFJTitcIi9tZGlwbG8uanNvbj9tYWo9XCIrbWFqO1xuXG52YXIgUG9zc2VkZXggPSB7XG4gICAgZGF0YSA6IHt9LFxuICAgIHJlZ2V4X3VybF9zZXVsZSA6IG5ldyBSZWdFeHAoL14oaHR0cFtzXT86XFwvXFwvKFteL10rKVxcL1teXCIgLF0rKVteXCJdezEsMn0kL2cpLFxuXG4gICAgbG9hZEpTT04gOiBmdW5jdGlvbihwYXRoLCBzdWNjZXNzLCBlcnJvcikge1xuICAgICAgICAvLyBoZXJlIHRvIGhlbHAgZGlmZiB3aXRoIGV4dGVuc2lvbiB2ZXJzaW9uXG4gICAgfSxcblxuICAgIHJlbW92ZUFmdGVyTGFzdFNsYXNoOiBmdW5jdGlvbih1cmwpe1xuICAgICAgICBpZih1cmwubGFzdEluZGV4T2YoJy8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKDAsIHVybC5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbGFzdFNsYXNoOiBmdW5jdGlvbih1cmwpIHsgLy8gcmVtb3ZlIHRoZSBsYXN0IHNsYXNoIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZ1xuICAgICAgICBpZih1cmwubGFzdEluZGV4T2YoJy8nKSA9PSB1cmwubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVybF9jbGVhbmVyIDogZnVuY3Rpb24odXJsKXtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgICAgICAgICAgLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgnd3d3LicsIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZShcImh0dHBzOi8vXCIsIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZShcIlxcblwiLCBcIlwiKTtcbiAgICB9LFxuXG4gICAgZ2V0QWxsQ2hpbGRyZW5Gb3JFbnRpdHk6IGZ1bmN0aW9uKGVudGl0eSwgbWVkaWFzID0gW10pIHtcbiAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmxvZyhcInN0YXJ0IGdldEFsbENoaWxkcmVuRm9yRW50aXR5XCIpO1xuICAgICAgICBmb3IoaXRlbV9pbmRleCBpbiBlbnRpdHkucG9zc2Vzc2lvbnMpIHtcbiAgICAgICAgICAgIGl0ZW0gPSBlbnRpdHkucG9zc2Vzc2lvbnNbaXRlbV9pbmRleF07XG4gICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oaXRlbSk7XG4gICAgICAgICAgICBjaGlsZElkID0gUG9zc2VkZXguZ2V0RW50aXR5SWRGcm9tTm9tKGl0ZW0ubm9tKTtcbiAgICAgICAgICAgIGNoaWxkRW50aXR5ID0gUG9zc2VkZXguZGF0YS5vYmpldHNbY2hpbGRJZF1cbiAgICAgICAgICAgIGlmIChjaGlsZEVudGl0eS50eXBlICE9IDMpIHtcbiAgICAgICAgICAgICAgICBtZWRpYXMgPSBQb3NzZWRleC5nZXRBbGxDaGlsZHJlbkZvckVudGl0eShjaGlsZEVudGl0eSwgbWVkaWFzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVkaWFzLnB1c2goY2hpbGRFbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZWRpYXM7XG4gICAgfSxcblxuICAgIGdldEFsbFBhcmVudHNGb3JFbnRpdHk6IGZ1bmN0aW9uKGVudGl0eSwgcHJvcHJpb3MgPSBbXSkge1xuICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwic3RhcnQgZ2V0QWxsUGFyZW50c0ZvckVudGl0eVwiKTtcbiAgICAgICAgZm9yKGl0ZW1faW5kZXggaW4gZW50aXR5LmVzdF9wb3NzZWRlKSB7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuZ3JvdXAoXCJVbmUgYm91Y2xlIGRlIGVzdF9wb3NzZWRlIGRlIFwiK2VudGl0eS5ub20pO1xuICAgICAgICAgICAgaXRlbSA9IGVudGl0eS5lc3RfcG9zc2VkZVtpdGVtX2luZGV4XTtcbiAgICAgICAgICAgIHBhcmVudElkID0gUG9zc2VkZXguZ2V0RW50aXR5SWRGcm9tTm9tKGl0ZW0ubm9tKTtcbiAgICAgICAgICAgIHBhcmVudEVudGl0eSA9IFBvc3NlZGV4LmRhdGEub2JqZXRzW3BhcmVudElkXVxuICAgICAgICAgICAgLy9jb25zb2xlICYmIGNvbnNvbGUubG9nKFwiRGVhbGluZyB3aXRoIGl0ZW0ubm9tID0gXCIraXRlbS5ub20pO1xuICAgICAgICAgICAgLy9jb25zb2xlICYmIGNvbnNvbGUubG9nKHBhcmVudEVudGl0eSk7XG4gICAgICAgICAgICBpZiAocGFyZW50RW50aXR5LnR5cGUgIT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coXCJBIGNyZXVzZXIgcG91ciBcIitwYXJlbnRFbnRpdHkubm9tKTtcbiAgICAgICAgICAgICAgICBhX2NyZXVzZXIgPSBQb3NzZWRleC5nZXRBbGxQYXJlbnRzRm9yRW50aXR5KHBhcmVudEVudGl0eSwgcHJvcHJpb3MpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKFwiVGllbnMsIGNldHRlIGVudGl0w6kgZXN0IHVuZSBwZXJzb25uZSBwaHlzaXF1ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKHBhcmVudEVudGl0eSk7XG4gICAgICAgICAgICAgICAgcHJvcHJpb3MucHVzaChwYXJlbnRFbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4oXCJhdSBmaW5hbFwiKTtcbiAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4ocHJvcHJpb3MpO1xuICAgICAgICByZXR1cm4gcHJvcHJpb3M7XG4gICAgfSxcblxuICAgIGdldEVudGl0eUlkRnJvbU5vbTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIC8vIDFzdCBsb29rLCBjaGVjayB1cmwsIGV4YWN0IG1hdGNoXG4gICAgICAgIGlmIChQb3NzZWRleC5kYXRhLnVybHMuaGFzT3duUHJvcGVydHkoc3RyKSkge1xuICAgICAgICAgICAgcmV0dXJuIFBvc3NlZGV4LmRhdGEudXJsc1tzdHJdO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEBUT0RPOiBjaGVjayB0aGlzIHdvcmtzIG9uIEVkZ2VcbiAgICAgICAgICAgICAgICBzdHJDbGVhbiA9IHN0ci5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihcIlRPRE86IGNvZGUgYWx0ZXJuYXRpdmUgdG8gc3RyLm5vcm1hbGl6ZSgnTkZEJylcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICBzdHJDbGVhbiA9IHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJeXCIrc3RyQ2xlYW4sICdpJyk7XG5cbiAgICAgICAgICAgIC8vIDJuZCBsb29rLCBjaGVjayByZWdleCBhZnRlciByZW1vdmluZyBhY2NlbnRzXG4gICAgICAgICAgICBmb3IoaWRFbnRpdHkgaW4gUG9zc2VkZXguZGF0YS5vYmpldHMpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5sb2coXCJjaGVjayBpZEVudGl0eT1cIitpZCk7XG4gICAgICAgICAgICAgICAgaWYgKFBvc3NlZGV4LmRhdGEub2JqZXRzW2lkRW50aXR5XS5zbHVnID09IHN0ckNsZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZEVudGl0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDNyZCBsb29rLCBjaGVjayBwYXJ0aWFsIG1hdGNoXG4gICAgICAgICAgICBmb3IoaWRFbnRpdHkgaW4gUG9zc2VkZXguZGF0YS5vYmpldHMpIHtcblxuICAgICAgICAgICAgICAgIGlmIChyZWdleC50ZXN0KFBvc3NlZGV4LmRhdGEub2JqZXRzW2lkRW50aXR5XS5zbHVnKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkRW50aXR5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgeW91dHViZUNoYW5uZWw6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB2YXIgZWxtcyA9IHVybC5zcGxpdCgnLycpO1xuICAgICAgICBpZihlbG1zLmxlbmd0aCA+IDIpe1xuICAgICAgICAgICAgcmV0dXJuIGVsbXNbMF0gKyAnLycgKyBlbG1zWzFdICsgXCIvXCIgKyBlbG1zWzJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRlYnVua1NpdGU6IGZ1bmN0aW9uKHVybCl7XG4gICAgICAgIC8vIElOSVQgdmFyc1xuXG4gICAgICAgIHZhciBvd25lcl9tc2cgPSAnJztcblxuICAgICAgICB2YXIgcHJvcHJpZXRhaXJlcyA9ICcnO1xuICAgICAgICB2YXIgZm9ydHVuZXMgICAgICA9ICcnO1xuICAgICAgICB2YXIgbWFycXVlcyAgICAgICA9ICcnO1xuICAgICAgICB2YXIgaW50ZXJldHMgICAgICA9ICcnO1xuXG4gICAgICAgIHZhciBpbmZsdWVuY2VzICAgICAgPSAnJztcblxuICAgICAgICB2YXIgY29uZmxpdHMgICAgICA9ICcnO1xuICAgICAgICB2YXIgc3VidmVudGlvbnMgICA9ICcnO1xuICAgICAgICB2YXIgcHVibGljaXRlICAgICA9ICcnO1xuICAgICAgICB2YXIgc291cmNlcyAgICAgICA9IFtdO1xuXG4gICAgICAgIHZhciBub3RlICAgICAgICAgID0gJyc7XG4gICAgICAgIHZhciBkZWNvZGV4X25vdGUgID0gJyc7XG4gICAgICAgIHZhciBjb2xvciAgICAgICAgID0gJyc7XG4gICAgICAgIHZhciBkZWNvZGV4X2NvbG9yID0gJyc7XG4gICAgICAgIHZhciBkZWNvZGV4X2Rlc2MgID0gJyc7XG4gICAgICAgIHZhciBtZXNzYWdlICAgICAgID0gJyc7XG4gICAgICAgIHZhciBiYW5kZWF1X21zZyAgID0gJyc7XG4gICAgICAgIHZhciBpY29uZSAgICAgICAgID0gJyc7XG4gICAgICAgIC8vIGVuZCBJTklUIHZhcnNcbiAgICAgICAgaWYgKDMgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuZ3JvdXAoJ1NUQVJUIGRlYnVuayBzaXRlICcrdXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluZm9zVG9HZXQgaW4gZXh0ZW5zaW9uXG4gICAgICAgIGlmICgzIDw9IF9kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oXCJkZWJ1bmtTaXRlIDogdmFyIHJlc3VsdHNcIik7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwicmVzdWx0c1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNpdGVzID0gUG9zc2VkZXguZGF0YS5vYmpldHM7XG4gICAgICAgIG9iamV0cyA9IFBvc3NlZGV4LmRhdGEub2JqZXRzO1xuICAgICAgICB1cmwgPSBQb3NzZWRleC5sYXN0U2xhc2godXJsKTtcbiAgICAgICAgdXJsID0gUG9zc2VkZXgudXJsX2NsZWFuZXIodXJsKTtcbiAgICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7IC8vIHdoZW4gdXJsIGNvbnRhaW5zIG5hbWVzXG5cbiAgICAgICAgZW50aXR5X2lkID0gUG9zc2VkZXguZ2V0RW50aXR5SWRGcm9tTm9tKHVybClcblxuICAgICAgICBpZiAoZW50aXR5X2lkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAkKFwiI3Jlc3VsdFwiKS5odG1sKCdOb3VzIG5cXCdhdm9ucyBhY3R1ZWxsZW1lbnQgYXVjdW5lIGluZm9ybWF0aW9uIHN1ciBjZSBzaXRlLicpO1xuICAgICAgICAgICAgaWYgKDIgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmluZm8oXCJzaXRlIG5vbiB0cm91dsOpXCIsIHVybCk7XG4gICAgICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZyhQb3NzZWRleC5kYXRhLnVybHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgOiBhZGQgYSBiYWRnZSB0ZXh0IGFuZCBiYWRnZSBiZyB3aXRoIHRoZSBpY29uXG4gICAgICAgICAgICAvL2Jyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe1widGV4dFwiIDogXCJTb3VtaXMgOnBcIn0pO1xuICAgICAgICAgICAgLy9icm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3Ioeydjb2xvcicgOiBcIiNENTAzMDNcIn0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKDIgPD0gX2RlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuaW5mbyhcIlNpdGUgaWQgcG91ciBcIit1cmwrXCIsIGVudGl0eV9pZCA9IFwiK2VudGl0eV9pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbnRpdHkgPSBQb3NzZWRleC5kYXRhLm9iamV0c1tlbnRpdHlfaWRdO1xuICAgICAgICBpZiAoMiA8PSBfZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coJ2NvbnRlbnUnLCBQb3NzZWRleC5kYXRhLm9iamV0c1tlbnRpdHlfaWRdKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy92YXIgcHJvcHJpZXRhaXJlMSAgPSBQb3NzZWRleC5kYXRhLm9iamV0c1tlbnRpdHlfaWRdW2NvbF9wcm9wcmlldGFpcmUxXTsgICAgICAvLyBwcm9wcmnDqXRhaXJlc1xuICAgICAgICAvL3ZhciBmb3J0dW5lczEgICAgICA9IFBvc3NlZGV4LmRhdGEub2JqZXRzW2VudGl0eV9pZF1bY29sX2ZvcnR1bmUxICAgICBdOyAgICAgIC8vIHByb3ByacOpdGFpcmVzXG4gICAgICAgIC8vdmFyIG1hcnF1ZTEgICAgICAgID0gUG9zc2VkZXguZGF0YS5vYmpldHNbZW50aXR5X2lkXVtjb2xfbWFycXVlMSAgICAgIF07ICAgICAgLy8gcHJvcHJpw6l0YWlyZXNcbiAgICAgICAgLy92YXIgaW50ZXJldDEgICAgID0gUG9zc2VkZXguZGF0YS5vYmpldHNbZW50aXR5X2lkXVtjb2xfaW50ZXJldDEgICBdOyAgICAgIC8vIHByb3ByacOpdGFpcmVzXG5cbiAgICAgICAgLy92YXIgcHJvcHJpZXRhaXJlMiA9IFBvc3NlZGV4LmRhdGEub2JqZXRzW2VudGl0eV9pZF1bY29sX3Byb3ByaWV0YWlyZTJdOyAgICAgIC8vIHByb3ByacOpdGFpcmVzXG4gICAgICAgIC8vdmFyIGZvcnR1bmVzMiAgICAgID0gUG9zc2VkZXguZGF0YS5vYmpldHNbZW50aXR5X2lkXVtjb2xfZm9ydHVuZTIgICAgIF07ICAgICAgLy8gcHJvcHJpw6l0YWlyZXNcbiAgICAgICAgLy92YXIgbWFycXVlMiAgICAgICAgPSBQb3NzZWRleC5kYXRhLm9iamV0c1tlbnRpdHlfaWRdW2NvbF9tYXJxdWUyICAgICAgXTsgICAgICAvLyBwcm9wcmnDqXRhaXJlc1xuICAgICAgICAvL3ZhciBpbnRlcmV0MiAgICAgPSBQb3NzZWRleC5kYXRhLm9iamV0c1tlbnRpdHlfaWRdW2NvbF9pbnRlcmV0MiAgIF07ICAgICAgLy8gcHJvcHJpw6l0YWlyZXNcblxuICAgICAgICAvL3ZhciBwcm9wcmlldGFpcmUzID0gUG9zc2VkZXguZGF0YS5vYmpldHNbZW50aXR5X2lkXVtjb2xfcHJvcHJpZXRhaXJlM107ICAgICAgLy8gcHJvcHJpw6l0YWlyZXNcbiAgICAgICAgLy92YXIgZm9ydHVuZXMzICAgICAgPSBQb3NzZWRleC5kYXRhLm9iamV0c1tlbnRpdHlfaWRdW2NvbF9mb3J0dW5lMyAgICAgXTsgICAgICAvLyBwcm9wcmnDqXRhaXJlc1xuICAgICAgICAvL3ZhciBtYXJxdWUzICAgICAgICA9IFBvc3NlZGV4LmRhdGEub2JqZXRzW2VudGl0eV9pZF1bY29sX21hcnF1ZTMgICAgICBdOyAgICAgIC8vIHByb3ByacOpdGFpcmVzXG4gICAgICAgIC8vdmFyIGludGVyZXQzICAgICA9IFBvc3NlZGV4LmRhdGEub2JqZXRzW2VudGl0eV9pZF1bY29sX2ludGVyZXQzICAgXTsgICAgICAvLyBwcm9wcmnDqXRhaXJlc1xuXG4gICAgICAgIC8vZW50aXR5LnBvc3NlZGV4Lm1hcnF1ZXMgICAgICAgPSBbXTtcbiAgICAgICAgLy9pZiAobWFycXVlMSkge1xuICAgICAgICAvLyAgICBlbnRpdHkucG9zc2VkZXgubWFycXVlcy5wdXNoKG1hcnF1ZTEpO1xuICAgICAgICAvL31cbiAgICAgICAgLy9pZiAobWFycXVlMikge1xuICAgICAgICAvLyAgICBlbnRpdHkucG9zc2VkZXgubWFycXVlcy5wdXNoKG1hcnF1ZTIpO1xuICAgICAgICAvL31cbiAgICAgICAgLy9pZiAobWFycXVlMykge1xuICAgICAgICAvLyAgICBlbnRpdHkucG9zc2VkZXgubWFycXVlcy5wdXNoKG1hcnF1ZTMpO1xuICAgICAgICAvL31cblxuICAgICAgICAvL2VudGl0eS5wb3NzZWRleC5pbnRlcmV0cyA9IFtdO1xuICAgICAgICAvL2lmIChpbnRlcmV0MSkge1xuICAgICAgICAvLyAgICBlbnRpdHkucG9zc2VkZXguaW50ZXJldHMucHVzaChpbnRlcmV0MSk7XG4gICAgICAgIC8vfVxuICAgICAgICAvL2lmIChpbnRlcmV0Mikge1xuICAgICAgICAvLyAgICBlbnRpdHkucG9zc2VkZXguaW50ZXJldHMucHVzaChpbnRlcmV0Mik7XG4gICAgICAgIC8vfVxuICAgICAgICAvL2lmIChpbnRlcmV0Mykge1xuICAgICAgICAvLyAgICBlbnRpdHkucG9zc2VkZXguaW50ZXJldHMucHVzaChpbnRlcmV0Myk7XG4gICAgICAgIC8vfVxuXG4gICAgICAgIC8vcHVibGljaXRlICAgICAgPSBQb3NzZWRleC5kYXRhLm9iamV0c1tlbnRpdHlfaWRdW2NvbF9wdWJdOyAgICAgICAgICAgICAgICAgICAgLy8gUHViID9cblxuICAgICAgICB2YXIgcmF3X3NvdXJjZXMgPSBQb3NzZWRleC5kYXRhLm9iamV0c1tlbnRpdHlfaWRdLnBvc3NlZGV4LnNvdXJjZXM7ICAgICAgICAgICAgICAgIC8vIE5vcyBzb3VyY2VzICh1cmxzIHPDqXBhcsOpcyBwYXIgdmlyZ3VsZSBldC9vdSBlc3BhY2UpXG5cbiAgICAgICAgLy8gTWFya2Rvd24gc3R5bGVcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXFxbKFteXFxdXSo/KVxcXVxcKChbXlxcKV0qPylcXClbLCBdezAsMn0vZ20pO1xuICAgICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMocmF3X3NvdXJjZXMpO1xuICAgICAgICBzb3VyY2VzID0gW107XG4gICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIFwidXJsXCIgICA6IG1hdGNoWzJdLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIiA6IG1hdGNoWzFdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhyYXdfc291cmNlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVUkwgdG91dGUgc2V1bGVcbiAgICAgICAgbWF0Y2ggPSBQb3NzZWRleC5yZWdleF91cmxfc2V1bGUuZXhlYyhyYXdfc291cmNlcyk7XG4gICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIFwidXJsXCIgICA6IG1hdGNoWzFdLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIiA6IG1hdGNoWzJdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhyYXdfc291cmNlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoMyA8PSBfZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coXCJzb3VyY2VzIGFwcmVzIHVybHMgc2ltcGxlc1wiLCBzb3VyY2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdXBkYXRlZF9odW1hbiAgPSB1cGRhdGVkLnRvTG9jYWxlU3RyaW5nKCdmcicpO1xuXG4gICAgICAgIGlmICgyIDw9IF9kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmdyb3VwKFwidG91dCBzJ2VzdCBiaWVuIHBhc3PDqVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coJ25vbSAgICAgICAgICAgID0nLGVudGl0eS5ub20gICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZygnZGVzYyAgICAgICAgICAgPScsZW50aXR5LnBvc3NlZGV4LmRlc2NyaXB0aW9uICAgICk7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKCdzbHVnICAgICAgICAgICA9JyxlbnRpdHkucG9zc2VkZXguc2x1ZyAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coJ3Byb3ByaWV0YWlyZXMgID0nLGVudGl0eS5wb3NzZWRleC5wcm9wcmlldGFpcmVzICApO1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZygnaW5mbHVlbmNlcyAgICAgPScsZW50aXR5LnBvc3NlZGV4LmluZmx1ZW5jZXMgICAgICk7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKCdjb25mbGl0cyAgICAgICA9JyxlbnRpdHkucG9zc2VkZXguY29uZmxpdHMgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coJ3N1YnZlbnRpb25zICAgID0nLGVudGl0eS5wb3NzZWRleC5zdWJ2ZW50aW9ucyAgICApO1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZygnc291cmNlcyAgICAgICAgPScsZW50aXR5LnBvc3NlZGV4LnNvdXJjZXMgICAgICAgICk7XG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRpc3BsYXkgcmVzdWx0c1xuICAgICAgICBQb3NzZWRleC5zZW5kVG9PdXRwdXQoZW50aXR5KTtcblxuXG4gICAgICAgIC8vaWYocmVzdWx0cy5pbmZvYnVsbGVzW2NsYXNzZW1lbnRdID09IHRydWUpeyAgLy8gbm90ZVxuICAgICAgICAvLyAgICBicm93c2VyLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAgICAgLy8gICAgICAgIC8vIHNlbmRNZXNzYWdlIHRvIHRoZSBjb250ZW50LmpzIGxpc3RlbmVyXG4gICAgICAgIC8vICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xuICAgICAgICAvLyAgICAgICAgICAgIHNob3dfcG9wdXAgIDogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgICBub3RlICAgICAgICA6IGluc291bWlzX25vdGUsXG4gICAgICAgIC8vICAgICAgICAgICAgY29sb3IgICAgICAgOiBjb2xvcnNbaW5zb3VtaXNfbm90ZV0sXG4gICAgICAgIC8vICAgICAgICAgICAgbWVzc2FnZSAgICAgOiBtZXNzYWdlc1tpbnNvdW1pc19ub3RlXSxcbiAgICAgICAgLy8gICAgICAgICAgICBiYW5kZWF1X21zZyA6IGJhbmRlYXVfbXNnc1tpbnNvdW1pc19ub3RlXSxcbiAgICAgICAgLy8gICAgICAgICAgICBpY29uZSAgICAgICA6IGljb25lc1tpbnNvdW1pc19ub3RlXSxcbiAgICAgICAgLy8gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8vIG5vdGVcbiAgICAgICAgLy8gICAgICAgIH0pO1xuICAgICAgICAvLyAgICB9KTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgaWYgKHVybC5tYXRjaCgveW91dHViZS5jb20vKSkge1xuXG4gICAgICAgICAgICBpZiAobnVsbCA9PSBjbGFzc2VtZW50KVxuICAgICAgICAgICAgICAgIGNsYXNzZW1lbnQgID0gJyc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9wcmnDqXRhaXJlc1xuXG5cbiAgICAgICAgICAgIGlmIChcIlwiID09IHByb3ByaWV0YWlyZXMpXG4gICAgICAgICAgICAgICAgcHJvcHJpZXRhaXJlcyAgPSBcIllvdXR1YmUgZXN0IHVuZSBwcm9wcmnDqXTDqSBkZSBsYSBIb2xkaW5nIEFscGhhYmV0IChHb29nbGUpXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9wcmnDqXRhaXJlc1xuICAgICAgICAgICAgaWYgKFwiXCIgPT0gaW5mbHVlbmNlcylcbiAgICAgICAgICAgICAgICBpbmZsdWVuY2VzICAgICAgID0gXCJMZSBncm91cGUgQWxwaGFiZXQoR29vZ2xlKSBhIGRlIG5vbWJyZXV4IGludMOpcsOqdHMgaW50ZXJuYXRpb25uYXV4LiBTb24gYnVzaW5lc3MgbW9kZWwgZXN0IGZvcnRlbWVudCBiYXPDqSBzdXIgbGEgcHVibGljaXTDqSBldCBzb24gcXVhc2ktbW9ub3BvbGUgZGUgbGEgcHVibGljaXTDqS4gR29vZ2xlIGV4ZXJjZSBkZSBub21icmV1c2VzIHByZXNzaW9ucyBzdXIgbGVzIMOpdGF0cyBldCBsJ1VuaW9uIEV1cm9ww6llbm5lLlwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnTDqXJldHNcbiAgICAgICAgICAgIGlmIChcIlwiID09IGNvbmZsaXRzKVxuICAgICAgICAgICAgICAgIGNvbmZsaXRzICAgICAgID0gXCJZb3V0dWJlIHBldXQgw6p0cmUgdW4gb3V0aWwgZGUgcGFydGFnZSBkZSBjb25uYWlzc2FuY2VzLiBMZXMgdmlkw6lhc3RlcyBldCB1dGlsaXNhdGV1cnMgZGUgbGEgcGxhdGVmb3JtZSB5b3V0dWJlIG5lIHNvbnQgcGFzIGZvcmPDqW1lbnQgc291bWlzIMOgIEdvb2dsZSwgbWFpc+KApiBcIjsgIC8vIGV4ZW1wbGUgZGUgY29uZmxpdHMgLyBjb21wbGljaXTDqSBpZMOpb2xvZ2lxdWVcbiAgICAgICAgICAgIGlmIChcIlwiID09IHN1YnZlbnRpb25zKVxuICAgICAgICAgICAgICAgIHN1YnZlbnRpb25zICAgID0gXCJcIjsgICAgICAgICAgICAgLy8gTW9udGFudCBkZXMgc3VidmVudGlvbnMgZCfDqXRhdFxuICAgICAgICAgICAgaWYgKFwiXCIgPT0gc291cmNlcylcbiAgICAgICAgICAgICAgICBzb3VyY2VzICAgICAgICA9IFwiXCI7ICAgICAgICAgICAgIC8vIE5vcyBzb3VyY2VzICh1cmxzIHPDqXBhcsOpcyBwYXIgdmlyZ3VsZSBldC9vdSBlc3BhY2UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoMyA8PSBfZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNlbmRUb091dHB1dCA6IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAkKFwiI3Jlc3VsdFwiKS5odG1sKCc8ZGl2IGlkPVwiaW5mb3NcIj4nKTtcbiAgICAgICAgJChcIiNpbmZvc1wiKS5hcHBlbmQoXCI8bGFiZWw+XCIrZW50aXR5LnR5cGVMaWJlbGxlK1wiPC9sYWJlbD5cIik7XG4gICAgICAgICQoXCIjaW5mb3NcIikuYXBwZW5kKFwiPHA+XCJcbiAgICAgICAgICAgIC8vK2VudGl0eS5ub21cbiAgICAgICAgICAgICsnIDxhIGNsYXNzPVwiZGV0YWlsLW1lZGlhXCIgaHJlZj1cImh0dHA6Ly8nK0RPTUFJTisnIycrZW50aXR5Lm5vbSsnXCI+J1xuICAgICAgICAgICAgKyBlbnRpdHkubm9tXG4gICAgICAgICAgICArICc8L2E+J1xuICAgICAgICAgICAgK1wiPC9wPlwiKTtcblxuICAgICAgICAkKFwiI2luZm9zXCIpLmFwcGVuZChcIjxsYWJlbD5TaXRlKHMpPC9sYWJlbD5cIik7XG4gICAgICAgIHVybHMgPSBcIlwiO1xuICAgICAgICBmb3IgKHVybF9pZCBpbiBlbnRpdHkudXJscykge1xuICAgICAgICAgICAgdXJscyArPSAnIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vJytlbnRpdHkudXJsc1t1cmxfaWRdKydcIj4nXG4gICAgICAgICAgICAgICAgKyBlbnRpdHkudXJsc1t1cmxfaWRdICsgJzwvYT4nXG4gICAgICAgIH1cbiAgICAgICAgJChcIiNpbmZvc1wiKS5hcHBlbmQoXCI8cD5cIlxuICAgICAgICAgICAgLy8rZW50aXR5Lm5vbVxuICAgICAgICAgICAgKyB1cmxzXG4gICAgICAgICAgICArXCI8L3A+XCIpO1xuICAgICAgICAvLyAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+Tm90ZSBMZU1vbmRlIChvdXRkYXRlZCk8L2xhYmVsPjxwPlwiK2RlY29kZXhfbm90ZStcIjwvcD5cIik7XG4gICAgICAgIC8vICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5DbGFzc2VtZW50IFBvc3NlZGV4PC9sYWJlbD48cD5cIittZXNzYWdlc1tjbGFzc2VtZW50XStcIjwvcD5cIik7XG4gICAgICAgIC8vICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+PHA+XCIrbm90dWxlK1wiPC9wPlwiKTtcbiAgICAgICAgLy8gJChcIiNyZXN1bHRcIikuYXBwZW5kKFwiPGxhYmVsPmlkZW50aWZpYW50KMOgIG1hc3F1ZXIgcGx1cyB0YXJkKTwvbGFiZWw+PHA+XCIrc2x1ZytcIjwvcD5cIik7XG4gICAgICAgIGlmIChlbnRpdHkuaGFzT3duUHJvcGVydHkoJ2VzdF9wb3NzZWRlJykpIHtcbiAgICAgICAgICAgIHByb3ByaWV0YWlyZXMgPSBbXVxuICAgICAgICAgICAgZW50aXR5LmVzdF9wb3NzZWRlLmZvckVhY2goZnVuY3Rpb24oZWwsIGkpIHtcbiAgICAgICAgICAgICAgICBwcm9wcmlldGFpcmVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICcgPGEgY2xhc3M9XCJkZXRhaWwtb3duZXJcIiBocmVmPVwiaHR0cDovLycrRE9NQUlOKycjJytlbC5ub20rJ1wiPidcbiAgICAgICAgICAgICAgICAgICAgK2VsLm5vbVxuICAgICAgICAgICAgICAgICAgICArJzwvYT4nXG4gICAgICAgICAgICAgICAgICAgICsgJyAoJytlbC52YWxldXJcbiAgICAgICAgICAgICAgICAgICAgKyhwYXJzZUludChlbC52YWxldXIpPyclJzonJylcbiAgICAgICAgICAgICAgICAgICAgKycpJ1xuICAgICAgICAgICAgICAgICAgICAvLysgXCIgKFwiICsgZm9ydHVuZXMxICsgXCIpXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChwcm9wcmlldGFpcmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5Qcm9wcmnDqXRhaXJlczwvbGFiZWw+PHA+XCIrcHJvcHJpZXRhaXJlcytcIjwvcD5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50aXR5Lmhhc093blByb3BlcnR5KCdwb3NzZXNzaW9ucycpKSB7XG4gICAgICAgICAgICBwb3NzZXNzaW9ucyA9IFtdXG4gICAgICAgICAgICBlbnRpdHkucG9zc2Vzc2lvbnMuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xuICAgICAgICAgICAgICAgIHBvc3Nlc3Npb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICcgPGEgY2xhc3M9XCJkZXRhaWwtb3duZXJcIiBocmVmPVwiaHR0cDovLycrRE9NQUlOKycjJytlbC5ub20rJ1wiPidcbiAgICAgICAgICAgICAgICAgICAgK2VsLm5vbVxuICAgICAgICAgICAgICAgICAgICArJzwvYT4nXG4gICAgICAgICAgICAgICAgICAgICsgJyAoJytlbC52YWxldXIrJyUpJ1xuICAgICAgICAgICAgICAgICAgICAvLysgXCIgKFwiICsgZm9ydHVuZXMxICsgXCIpXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChwb3NzZXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+UG9zc8OoZGUgb3UgY29udHLDtGxlPC9sYWJlbD48cD5cIitwb3NzZXNzaW9ucy5qb2luKFwiLCBcIikrXCI8L3A+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGl0eS5wb3NzZWRleC5pbmZsdWVuY2VzICYmIGVudGl0eS5wb3NzZWRleC5pbmZsdWVuY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIiNyZXN1bHRcIikuYXBwZW5kKFwiPGxhYmVsPkludMOpcsOqdHM8L2xhYmVsPjxwPlwiK2VudGl0eS5wb3NzZWRleC5pbmZsdWVuY2VzK1wiPC9wPlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50aXR5LnBvc3NlZGV4Lm1hcnF1ZXMgJiYgZW50aXR5LnBvc3NlZGV4Lm1hcnF1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiI3Jlc3VsdFwiKS5hcHBlbmQoXCI8bGFiZWw+TWFycXVlczwvbGFiZWw+PHA+XCIrZW50aXR5LnBvc3NlZGV4Lm1hcnF1ZXMrXCI8L3A+XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRpdHkucG9zc2VkZXguc3VidmVudGlvbnMpIHtcbiAgICAgICAgICAgICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5TdWJ2ZW50aW9ucyBwdWJsaXF1ZXM8L2xhYmVsPjxwPlwiK2VudGl0eS5wb3NzZWRleC5zdWJ2ZW50aW9ucytcIjwvcD5cIik7XG4gICAgICAgICAgICAvL2NvbnNvbGUgJiYgY29uc29sZS5sb2coJ3N1YnZlbnRpb25zICAgID0nLGVudGl0eS5wb3NzZWRleC5zdWJ2ZW50aW9ucyAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmxvZyhcInR5cGUgMVwiKTtcbiAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmxvZyhlbnRpdHkpO1xuICAgICAgICBtZWRpYXMgPSBbXTtcbiAgICAgICAgUG9zc2VkZXguZ2V0QWxsQ2hpbGRyZW5Gb3JFbnRpdHkoZW50aXR5LCBtZWRpYXMpO1xuICAgICAgICAvLyBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwibGVzIGVuZmFudHNcIik7XG4gICAgICAgIC8vIGNvbnNvbGUgJiYgY29uc29sZS5sb2cobWVkaWFzKTtcblxuICAgICAgICBwcm9wcmlvcyA9IFBvc3NlZGV4LmdldEFsbFBhcmVudHNGb3JFbnRpdHkoZW50aXR5KTtcbiAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmluZm8oXCJsZXMgcGFyZW50c1wiKTtcbiAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmluZm8ocHJvcHJpb3MpO1xuXG4gICAgICAgIGlmIChwcm9wcmlvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByb3ByaW9zX2Rpc3BsYXkgPSBbXVxuICAgICAgICAgICAgcHJvcHJpb3MuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xuICAgICAgICAgICAgICAgIHByb3ByaW9zX2Rpc3BsYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgJyA8YSBjbGFzcz1cImRldGFpbC1vd25lclwiIGhyZWY9XCJodHRwOi8vJytET01BSU4rJyMnK2VsLm5vbSsnXCI+J1xuICAgICAgICAgICAgICAgICAgICArZWwubm9tXG4gICAgICAgICAgICAgICAgICAgICsnPC9hPidcbiAgICAgICAgICAgICAgICAgICAgKyc8cD48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+U2VjdGV1ciBkXFwnYWN0aXZpdMOpOiAnXG4gICAgICAgICAgICAgICAgICAgICsgZWwucG9zc2VkZXguYWN0aXZpdGVcbiAgICAgICAgICAgICAgICAgICAgKyc8L3NtYWxsPjwvcD4nXG4gICAgICAgICAgICAgICAgICAgICsnPC9kaXY+J1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJChcIiNyZXN1bHRcIikuYXBwZW5kKFwiPGxhYmVsPkF1IGJvdXQgZGUgbGEgY2hhw65uZSBhbGltZW50YWlyZeKApjwvbGFiZWw+PHA+XCJcbiAgICAgICAgICAgICAgICArcHJvcHJpb3NfZGlzcGxheS5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgICArXCI8L3A+XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lZGlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChtZWRpYXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICBtZWRpYXNfdGl0bGUgPSBcIkEgZGUgbCdpbmZsdWVuY2UgZGFucyBjZSBtw6lkaWFcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVkaWFzX3RpdGxlID0gXCJBIGRlIGwnaW5mbHVlbmNlIGRhbnMgY2VzIG3DqWRpYXNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lZGlhc19kaXNwbGF5ID0gW11cbiAgICAgICAgICAgIG1lZGlhcy5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpKSB7XG4gICAgICAgICAgICAgICAgbWVkaWFzX2Rpc3BsYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgJyA8YSBjbGFzcz1cImRldGFpbC1vd25lclwiIGhyZWY9XCJodHRwOi8vJytET01BSU4rJyMnK2VsLm5vbSsnXCI+J1xuICAgICAgICAgICAgICAgICAgICArZWwubm9tXG4gICAgICAgICAgICAgICAgICAgICsnPC9hPidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5cIittZWRpYXNfdGl0bGUrXCI8L2xhYmVsPjxwPlwiXG4gICAgICAgICAgICAgICAgK21lZGlhc19kaXNwbGF5LmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICAgICtcIjwvcD5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmICh0cnVlIHx8IGFjdGl2aXRlLmxlbmd0aCkge1xuICAgICAgICAvLyBAVE9ETyBuZXRvXG4gICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5pbmZvKFwiYWN0aXZpdGVcIik7XG4gICAgICAgIGlmIChlbnRpdHkucG9zc2VkZXguYWN0aXZpdGUpIHtcbiAgICAgICAgICAgICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbCBzdHlsZT0nY29sb3I6cmVkJz5FdCBhIGNvbW1lIHBvdGVudGllbHMgY29uZmxpdHMgZCdpbnTDqXLDqnRz4oCmPC9sYWJlbD48cCA+XCJcbiAgICAgICAgICAgICAgICArZW50aXR5LnBvc3NlZGV4LmFjdGl2aXRlXG4gICAgICAgICAgICAgICAgK1wiPC9wPlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vICQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIkF1Y3VuZSBhY3Rpdml0w6kgYWlsbGV1cnMgPyBvT1wiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUgJiYgY29uc29sZS5sb2coZW50aXR5KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUgJiYgY29uc29sZS5sb2coZW50aXR5Lm5vbSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlICYmIGNvbnNvbGUubG9nKGVudGl0eS5wb3NzZWRleCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlICYmIGNvbnNvbGUubG9nKGVudGl0eVsncG9zc2VkZXgnXSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vJChcIiNyZXN1bHRcIikuYXBwZW5kKHNvdXJjZXMpO1xuICAgICAgICAvLyQoXCIjcmVzdWx0XCIpLmFwcGVuZChcIjxsYWJlbD5EZXJuacOocmUgbWlzZSDDoCBqb3VyPC9sYWJlbD48cD5cIlxuICAgICAgICAvLyAgICArIG5ldyBEYXRlKGRhdGEucHJvcHJpZXRhaXJlc1tub21dLnVwZGF0ZWQpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgLy8gICAgK1wiPC9wPlwiKTtcbiAgICB9XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgJChcIiNsb2dvXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoJChcIiNtZW51cG9wdXBcIikuaXMoXCI6aGlkZGVuXCIpKXtcbiAgICAgICAgICAgICQoXCIjbWVudXBvcHVwXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbiAgICAkKFwiLnF1aXQsIC5uYXYtbGluaywgLm5hdi1zb2NpYWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJChcIiNtZW51cG9wdXBcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7ICAgXG4gICAgfSk7XG4gICAgXG4gICAgJChcIiNmb3JtLXBvc3NlZGV4XCIpLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB1cmwgPSAkKFwiI3VybFwiKS52YWwoKTtcbiAgICAgICAgaWYgKHVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkLmdldEpTT04oYmFzZV91cmwsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgIFBvc3NlZGV4LmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gJ1F1aSBwb3Nzw6hkZSBcIicrdXJsKydcIiA/IC0gUG9zc2VkZXgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgICAgICAgICAgICAgUG9zc2VkZXguZGVidW5rU2l0ZSh1cmwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlNhaXNpc3NleiBkJ2Fib3JkIHVuZSB1cmwgOikgXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiI3N1Ym1pdC1wb3NzZWRleFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIjZm9ybS1wb3NzZWRleFwiKS5zdWJtaXQoKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZGV0YWlsLW93bmVyLC5kZXRhaWwtbWVkaWFcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG5vbSA9IHRoaXMuaHJlZi5yZXBsYWNlKCdodHRwOi8vJytET01BSU4rXCIvI1wiLCAnJyk7XG4gICAgICAgIGlmICgncC8nID09IG5vbS5zdWJzdHIoMCwgMikpIHtcbiAgICAgICAgICAgICQoXCIjZG9tYWluLW9yLW93bmVyXCIpLnZhbChcIm93bmVyXCIpO1xuICAgICAgICAgICAgJChcIiN1cmxcIikudmFsKGRlY29kZVVSSUNvbXBvbmVudChub20uc3Vic3RyKDIpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RvbWFpbi1vci1vd25lclwiKS52YWwoXCJkb21haW5cIik7XG4gICAgICAgICAgICAkKFwiI3VybFwiKS52YWwoZGVjb2RlVVJJQ29tcG9uZW50KG5vbSkpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjZm9ybS1wb3NzZWRleFwiKS5zdWJtaXQoKTtcbiAgICB9KTtcblxuICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgYSBkaXJlY3QgcmVxdWVzdFxuICAgIHZhciBjdXJyZW50X2xvY2F0aW9uID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjsgLy8gZnVsbCB1cmw7XG4gICAgaWYgKChwb3MgPSBjdXJyZW50X2xvY2F0aW9uLmluZGV4T2YoJyMnKSkgPiAtMSkge1xuICAgICAgICB1cmwgPSBjdXJyZW50X2xvY2F0aW9uLnN1YnN0cmluZyhwb3MrMSk7XG4gICAgICAgIGlmICgncC8nID09IHVybC5zdWJzdHIoMCwgMikpIHtcbiAgICAgICAgICAgICQoXCIjZG9tYWluLW9yLW93bmVyXCIpLnZhbChcIm93bmVyXCIpO1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigyKTtcbiAgICAgICAgICAgICQoXCIjdXJsXCIpLnZhbChkZWNvZGVVUklDb21wb25lbnQodXJsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RvbWFpbi1vci1vd25lclwiKS52YWwoXCJkb21haW5cIik7XG4gICAgICAgICAgICAkKFwiI3VybFwiKS52YWwoZGVjb2RlVVJJQ29tcG9uZW50KHVybCkpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjc3VibWl0LXBvc3NlZGV4XCIpLmNsaWNrKCk7XG4gICAgfVxuICAgICAgICBcbiAgXG5cblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
