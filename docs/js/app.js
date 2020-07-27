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
/******/ 	deferredModules.push(["./assets/js/app.js","vendors~app","app~possedex"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
var base_url = "http://" + DOMAIN + "/mdiplo.json"; // function RechercheFunc({name, children}) {
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
      $("#menupopup").removeClass("d-none");
    }
  });
  $(".quit, .nav-link, .nav-social").on("click", function () {
    $("#menupopup").addClass("d-none");
  });
  console && console.log("canceling console.ready");
  return;
  $("#form-possedex").on("submit", function (e) {
    e.preventDefault();
    var url = $("#url").val();

    if (url.length > 0) {
      $.getJSON(base_url, function (data) {
        _Possedex__WEBPACK_IMPORTED_MODULE_2__["Possedex"].data = data;
        document.title = 'Qui possède "' + url + '" ? - Possedex';
        document.location.hash = url;
        _Possedex__WEBPACK_IMPORTED_MODULE_2__["Possedex"].debunkSite(url);
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



var Result = /*#__PURE__*/function (_React$Component) {
  _inherits(Result, _React$Component);

  var _super = _createSuper(Result);

  function Result(props) {
    var _this;

    _classCallCheck(this, Result);

    _this = _super.call(this, props);
    _this.state = {
      entity: _this.props.entity ? _this.props.entity : {
        nom: "rien"
      },
      search: _this.props.search ? _this.props.search : "vide"
    };
    _this.domain = document.location.href; // console.info("props");
    // console.log(this.props);

    return _this;
  }

  _createClass(Result, [{
    key: "render",
    value: function render() {
      console.info("props dans render");
      console.log(this.props);

      if (!this.props.hasOwnProperty("entity")) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "infos"
        }, "Aucun r\xE9sultat pour ", this.props.search_output);
      } else {
        // console.info("props dans le else de render");
        var entity = this.props.entity;

        if (!entity) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            id: "infos"
          }, "Rien");
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "infos"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, entity.typeLibelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "detail-media",
          href: "https://" + this.domain + "#" + entity.typeLibelle
        }, entity.nom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, entity.urls ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Sites"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, entity.urls.map(function (url, url_id) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            key: url_id,
            target: "_blank",
            href: "https://" + entity.urls[url_id]
          }, url);
        }))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, entity.hasOwnProperty('est_possede') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Propri\xE9taires"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, entity.est_possede.map(function (el, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            key: i,
            className: "detail-owner",
            href: "#" + el.nom
          }, el.nom, " (", el.valeur + (parseInt(el.valeur) ? '%' : ''), ")");
        }))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, entity.hasOwnProperty('possessions') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Poss\xE8de ou contr\xF4le"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, entity.possessions.map(function (el, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            key: i,
            className: "detail-owner",
            href: "#" + el.nom
          }, el.nom, " (", el.valeur + (parseInt(el.valeur) ? '%' : ''), ")");
        }))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, entity.possedex ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Int\xE9r\xEAts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, entity.possedex.influences), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Marques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, entity.possedex.marques), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Subventions publiques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, entity.possedex.subventions)) : "<div>Info possédex manquante</div>"));
      }
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
/* harmony import */ var _Possedex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Possedex */ "./assets/js/Possedex.js");
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
      result: "zzz"
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.doSearch = _this.doSearch.bind(_assertThisInitialized(_this));
    _this.data = {};
    return _this;
  }

  _createClass(SearchForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch(this.props.base_url).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.data = data; // console.log('data:', data)
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
    key: "doSearch",
    value: function doSearch(e) {
      //console && console.log(e);
      // console && console.log('prevent default');
      e.preventDefault();
      var search = this.state.search;

      if (search.length > 0) {
        _Possedex__WEBPACK_IMPORTED_MODULE_2__["Possedex"].data = this.data;
        document.title = 'Qui possède "' + search + '" ? - Possedex';
        document.location.hash = search;
        this.setState({
          entity: _Possedex__WEBPACK_IMPORTED_MODULE_2__["Possedex"].debunkSite(search),
          search_output: "recherche de " + search
        }); // console.info('LE RESULTAT DANS THIS.STATE.RESULT');
        // console.log(this.state.result);
        // console.log(this.state.search_output);
      } else {// alert("Saisissez d'abord une url :) ");
        }
    }
  }, {
    key: "render",
    value: function render() {
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
        onKeyUp: this.doSearch
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
      }, "Chercher"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "result",
        entity: this.state.entity,
        search_output: this.state.search_output
      }, "Pouet"));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZXN1bHQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaEZvcm0uanN4Il0sIm5hbWVzIjpbImUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJET01BSU4iLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJiYXNlX3VybCIsIlJlYWN0RE9NIiwicmVuZGVyIiwicXVlcnlTZWxlY3RvciIsIiQiLCJyZWFkeSIsIm9uIiwiaXMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidXJsIiwidmFsIiwibGVuZ3RoIiwiZ2V0SlNPTiIsImRhdGEiLCJQb3NzZWRleCIsInRpdGxlIiwiaGFzaCIsImRlYnVua1NpdGUiLCJhbGVydCIsInN1Ym1pdCIsIm5vbSIsImhyZWYiLCJyZXBsYWNlIiwic3Vic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY3VycmVudF9sb2NhdGlvbiIsInBvcyIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJjbGljayIsIlJlc3VsdCIsInByb3BzIiwic3RhdGUiLCJlbnRpdHkiLCJzZWFyY2giLCJkb21haW4iLCJpbmZvIiwiaGFzT3duUHJvcGVydHkiLCJzZWFyY2hfb3V0cHV0IiwidHlwZUxpYmVsbGUiLCJ1cmxzIiwibWFwIiwidXJsX2lkIiwiZXN0X3Bvc3NlZGUiLCJlbCIsImkiLCJ2YWxldXIiLCJwYXJzZUludCIsInBvc3Nlc3Npb25zIiwicG9zc2VkZXgiLCJpbmZsdWVuY2VzIiwibWFycXVlcyIsInN1YnZlbnRpb25zIiwiQ29tcG9uZW50IiwiU2VhcmNoRm9ybSIsInJlc3VsdCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJkb1NlYXJjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUMsZUFBRCxDLENBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFHQSxJQUFNQSxDQUFDLEdBQUdDLDRDQUFLLENBQUNDLGFBQWhCO0FBRUEsSUFBTUMsTUFBTSxHQUFPQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0JDLFFBQXJDO0FBQ0EsSUFBTUMsUUFBUSxHQUFLLFlBQVVKLE1BQVYsR0FBaUIsY0FBcEMsQyxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUssZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyw4REFBRDtBQUFZLFVBQVEsRUFBRUY7QUFBdEIsRUFBaEIsRUFBb0RILFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixhQUF2QixDQUFwRCxFLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBQyxDQUFDLENBQUNQLFFBQUQsQ0FBRCxDQUFZUSxLQUFaLENBQWtCLFlBQVU7QUFFeEJELEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV0UsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBVTtBQUM3QixRQUFHRixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCRyxFQUFoQixDQUFtQixTQUFuQixDQUFILEVBQWlDO0FBQzdCSCxPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSSxXQUFoQixDQUE0QixRQUE1QjtBQUNIO0FBRUosR0FMRDtBQU1BSixHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0UsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBVTtBQUNyREYsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkssUUFBaEIsQ0FBeUIsUUFBekI7QUFDSCxHQUZEO0FBSUFDLFNBQU8sSUFBSUEsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosQ0FBWDtBQUNBO0FBQ0FQLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxFQUFwQixDQUF1QixRQUF2QixFQUFpQyxVQUFTYixDQUFULEVBQVc7QUFDeENBLEtBQUMsQ0FBQ21CLGNBQUY7QUFDQSxRQUFJQyxHQUFHLEdBQUdULENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVUsR0FBVixFQUFWOztBQUNBLFFBQUlELEdBQUcsQ0FBQ0UsTUFBSixHQUFhLENBQWpCLEVBQW9CO0FBQ2hCWCxPQUFDLENBQUNZLE9BQUYsQ0FBVWhCLFFBQVYsRUFBb0IsVUFBU2lCLElBQVQsRUFBYztBQUM5QkMsMERBQVEsQ0FBQ0QsSUFBVCxHQUFnQkEsSUFBaEI7QUFDQXBCLGdCQUFRLENBQUNzQixLQUFULEdBQWlCLGtCQUFnQk4sR0FBaEIsR0FBb0IsZ0JBQXJDO0FBQ0FoQixnQkFBUSxDQUFDQyxRQUFULENBQWtCc0IsSUFBbEIsR0FBeUJQLEdBQXpCO0FBQ0FLLDBEQUFRLENBQUNHLFVBQVQsQ0FBb0JSLEdBQXBCO0FBQ0gsT0FMRDtBQU1ILEtBUEQsTUFPTztBQUNIUyxXQUFLLENBQUMsK0JBQUQsQ0FBTDtBQUNIO0FBQ0osR0FiRDtBQWVBbEIsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JFLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFVBQVNiLENBQVQsRUFBVztBQUN6Q0EsS0FBQyxDQUFDbUIsY0FBRjtBQUNBUixLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQm1CLE1BQXBCO0FBQ0gsR0FIRDtBQUtBbkIsR0FBQyxDQUFDUCxRQUFELENBQUQsQ0FBWVMsRUFBWixDQUFlLE9BQWYsRUFBd0IsNkJBQXhCLEVBQXVELFVBQVNiLENBQVQsRUFBVztBQUM5REEsS0FBQyxDQUFDbUIsY0FBRjtBQUNBLFFBQUlZLEdBQUcsR0FBRyxLQUFLQyxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsWUFBVTlCLE1BQVYsR0FBaUIsSUFBbkMsRUFBeUMsRUFBekMsQ0FBVjs7QUFDQSxRQUFJLFFBQVE0QixHQUFHLENBQUNHLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFaLEVBQThCO0FBQzFCdkIsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JVLEdBQXRCLENBQTBCLE9BQTFCO0FBQ0FWLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVUsR0FBVixDQUFjYyxrQkFBa0IsQ0FBQ0osR0FBRyxDQUFDRyxNQUFKLENBQVcsQ0FBWCxDQUFELENBQWhDO0FBQ0gsS0FIRCxNQUdPO0FBQ0h2QixPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlUsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDQVYsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVVSxHQUFWLENBQWNjLGtCQUFrQixDQUFDSixHQUFELENBQWhDO0FBQ0g7O0FBQ0RwQixLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQm1CLE1BQXBCO0FBQ0gsR0FYRCxFQWxDd0IsQ0ErQ3hCOztBQUNBLE1BQUlNLGdCQUFnQixHQUFHaEMsUUFBUSxDQUFDQyxRQUFULENBQWtCMkIsSUFBekMsQ0FoRHdCLENBZ0R1Qjs7QUFDL0MsTUFBSSxDQUFDSyxHQUFHLEdBQUdELGdCQUFnQixDQUFDRSxPQUFqQixDQUF5QixHQUF6QixDQUFQLElBQXdDLENBQUMsQ0FBN0MsRUFBZ0Q7QUFDNUNsQixPQUFHLEdBQUdnQixnQkFBZ0IsQ0FBQ0csU0FBakIsQ0FBMkJGLEdBQUcsR0FBQyxDQUEvQixDQUFOOztBQUNBLFFBQUksUUFBUWpCLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQVosRUFBOEI7QUFDMUJ2QixPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlUsR0FBdEIsQ0FBMEIsT0FBMUI7QUFDQUQsU0FBRyxHQUFHQSxHQUFHLENBQUNjLE1BQUosQ0FBVyxDQUFYLENBQU47QUFDQXZCLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVUsR0FBVixDQUFjYyxrQkFBa0IsQ0FBQ2YsR0FBRCxDQUFoQztBQUNILEtBSkQsTUFJTztBQUNIVCxPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlUsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDQVYsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVVSxHQUFWLENBQWNjLGtCQUFrQixDQUFDZixHQUFELENBQWhDO0FBQ0g7O0FBQ0RULEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCNkIsS0FBdEI7QUFDSDtBQUtKLENBakVELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBOztJQUVxQkMsTTs7Ozs7QUFDakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxZQUFNLEVBQUUsTUFBS0YsS0FBTCxDQUFXRSxNQUFYLEdBQW9CLE1BQUtGLEtBQUwsQ0FBV0UsTUFBL0IsR0FBd0M7QUFBQ2IsV0FBRyxFQUFDO0FBQUwsT0FEdkM7QUFFVGMsWUFBTSxFQUFFLE1BQUtILEtBQUwsQ0FBV0csTUFBWCxHQUFvQixNQUFLSCxLQUFMLENBQVdHLE1BQS9CLEdBQXdDO0FBRnZDLEtBQWI7QUFLQSxVQUFLQyxNQUFMLEdBQWMxQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0IyQixJQUFoQyxDQVBlLENBUWY7QUFDQTs7QUFUZTtBQVVsQjs7Ozs2QkFHUTtBQUNMZixhQUFPLENBQUM4QixJQUFSLENBQWEsbUJBQWI7QUFDQTlCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt3QixLQUFqQjs7QUFDQSxVQUFJLENBQUMsS0FBS0EsS0FBTCxDQUFXTSxjQUFYLENBQTBCLFFBQTFCLENBQUwsRUFBMEM7QUFDdEMsNEJBQU87QUFBSyxZQUFFLEVBQUM7QUFBUixzQ0FDa0IsS0FBS04sS0FBTCxDQUFXTyxhQUQ3QixDQUFQO0FBR0gsT0FKRCxNQUlPO0FBQ0g7QUFDQSxZQUFNTCxNQUFNLEdBQUcsS0FBS0YsS0FBTCxDQUFXRSxNQUExQjs7QUFDQSxZQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNULDhCQUFPO0FBQUssY0FBRSxFQUFDO0FBQVIsb0JBQVA7QUFHSDs7QUFDRCw0QkFBTztBQUFLLFlBQUUsRUFBQztBQUFSLHdCQUNILDBFQUFRQSxNQUFNLENBQUNNLFdBQWYsQ0FERyxlQUdILG1GQUNJO0FBQUcsbUJBQVMsRUFBQyxjQUFiO0FBQ0csY0FBSSxFQUFFLGFBQWEsS0FBS0osTUFBbEIsR0FBMEIsR0FBMUIsR0FBZ0NGLE1BQU0sQ0FBQ007QUFEaEQsV0FFS04sTUFBTSxDQUFDYixHQUZaLENBREosQ0FIRyxlQVNILHdFQUNLYSxNQUFNLENBQUNPLElBQVAsZ0JBQ0cscUZBQ0Esa0ZBREEsZUFFQSxzRUFDS1AsTUFBTSxDQUFDTyxJQUFQLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ2hDLEdBQUQsRUFBTWlDLE1BQU47QUFBQSw4QkFDYjtBQUFHLGVBQUcsRUFBRUEsTUFBUjtBQUFnQixrQkFBTSxFQUFDLFFBQXZCO0FBQWdDLGdCQUFJLEVBQUUsYUFBYVQsTUFBTSxDQUFDTyxJQUFQLENBQVlFLE1BQVo7QUFBbkQsYUFDS2pDLEdBREwsQ0FEYTtBQUFBLFNBQWhCLENBREwsQ0FGQSxDQURILEdBV0ssSUFaVixDQVRHLGVBd0JILHdFQUNLd0IsTUFBTSxDQUFDSSxjQUFQLENBQXNCLGFBQXRCLGlCQUNHLHFGQUNBLDZGQURBLGVBRUEsc0VBQ0tKLE1BQU0sQ0FBQ1UsV0FBUCxDQUFtQkYsR0FBbkIsQ0FBdUIsVUFBQ0csRUFBRCxFQUFLQyxDQUFMO0FBQUEsOEJBQ3BCO0FBQUcsZUFBRyxFQUFFQSxDQUFSO0FBQVcscUJBQVMsRUFBQyxjQUFyQjtBQUFvQyxnQkFBSSxFQUFFLE1BQU1ELEVBQUUsQ0FBQ3hCO0FBQW5ELGFBQ0t3QixFQUFFLENBQUN4QixHQURSLFFBQ2V3QixFQUFFLENBQUNFLE1BQUgsSUFBYUMsUUFBUSxDQUFDSCxFQUFFLENBQUNFLE1BQUosQ0FBUixHQUFzQixHQUF0QixHQUE0QixFQUF6QyxDQURmLE1BRG9CO0FBQUEsU0FBdkIsQ0FETCxDQUZBLENBREgsR0FXSyxJQVpWLENBeEJHLGVBd0NILHdFQUNLYixNQUFNLENBQUNJLGNBQVAsQ0FBc0IsYUFBdEIsaUJBQ0cscUZBQ0Esc0dBREEsZUFFQSxzRUFDSUosTUFBTSxDQUFDZSxXQUFQLENBQW1CUCxHQUFuQixDQUF1QixVQUFDRyxFQUFELEVBQUtDLENBQUw7QUFBQSw4QkFDbkI7QUFBRyxlQUFHLEVBQUVBLENBQVI7QUFBVyxxQkFBUyxFQUFDLGNBQXJCO0FBQW9DLGdCQUFJLEVBQUUsTUFBTUQsRUFBRSxDQUFDeEI7QUFBbkQsYUFDS3dCLEVBQUUsQ0FBQ3hCLEdBRFIsUUFDZXdCLEVBQUUsQ0FBQ0UsTUFBSCxJQUFhQyxRQUFRLENBQUNILEVBQUUsQ0FBQ0UsTUFBSixDQUFSLEdBQXNCLEdBQXRCLEdBQTRCLEVBQXpDLENBRGYsTUFEbUI7QUFBQSxTQUF2QixDQURKLENBRkEsQ0FESCxHQVdLLElBWlYsQ0F4Q0csZUF3REgsd0VBQ0tiLE1BQU0sQ0FBQ2dCLFFBQVAsZ0JBQ0cscUZBRUksMkZBRkosZUFHSSxzRUFBSWhCLE1BQU0sQ0FBQ2dCLFFBQVAsQ0FBZ0JDLFVBQXBCLENBSEosZUFJSSxvRkFKSixlQUtJLHNFQUFJakIsTUFBTSxDQUFDZ0IsUUFBUCxDQUFnQkUsT0FBcEIsQ0FMSixlQU1JLGtHQU5KLGVBT0ksc0VBQUlsQixNQUFNLENBQUNnQixRQUFQLENBQWdCRyxXQUFwQixDQVBKLENBREgsR0FVSyxvQ0FYVixDQXhERyxDQUFQO0FBd0VIO0FBRUo7Ozs7RUF2RytCOUQsNENBQUssQ0FBQytELFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQztBQUVBO0FBQ0E7O0lBRXFCQyxVOzs7OztBQUNqQixzQkFBWXZCLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNURSxZQUFNLEVBQUcsRUFEQTtBQUVUcUIsWUFBTSxFQUFFO0FBRkMsS0FBYjtBQUlBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsK0JBQWhCO0FBQ0EsVUFBSzVDLElBQUwsR0FBWSxFQUFaO0FBUmU7QUFTbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2hCOEMsV0FBSyxDQUFDLEtBQUs1QixLQUFMLENBQVduQyxRQUFaLENBQUwsQ0FDS2dFLElBREwsQ0FDVSxVQUFDQyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxPQURWLEVBRUtGLElBRkwsQ0FFVSxVQUFDL0MsSUFBRCxFQUFVO0FBQ1osY0FBSSxDQUFDQSxJQUFMLEdBQVlBLElBQVosQ0FEWSxDQUVaO0FBQ0gsT0FMTDtBQU1IOzs7aUNBRVl4QixDLEVBQUc7QUFDWjtBQUNBLFdBQUswRSxRQUFMLENBQWM7QUFDVjdCLGNBQU0sRUFBRTdDLENBQUMsQ0FBQzJFLE1BQUYsQ0FBU0M7QUFEUCxPQUFkO0FBR0g7Ozs2QkFFUTVFLEMsRUFBRztBQUNSO0FBQ0E7QUFDQUEsT0FBQyxDQUFDbUIsY0FBRjtBQUVBLFVBQUkwQixNQUFNLEdBQUcsS0FBS0YsS0FBTCxDQUFXRSxNQUF4Qjs7QUFDQSxVQUFJQSxNQUFNLENBQUN2QixNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CRywwREFBUSxDQUFDRCxJQUFULEdBQWdCLEtBQUtBLElBQXJCO0FBQ0FwQixnQkFBUSxDQUFDc0IsS0FBVCxHQUFpQixrQkFBZ0JtQixNQUFoQixHQUF1QixnQkFBeEM7QUFDQXpDLGdCQUFRLENBQUNDLFFBQVQsQ0FBa0JzQixJQUFsQixHQUF5QmtCLE1BQXpCO0FBQ0EsYUFBSzZCLFFBQUwsQ0FBYztBQUNWOUIsZ0JBQU0sRUFBR25CLGtEQUFRLENBQUNHLFVBQVQsQ0FBb0JpQixNQUFwQixDQURDO0FBRVZJLHVCQUFhLEVBQUcsa0JBQWtCSjtBQUZ4QixTQUFkLEVBSm1CLENBUW5CO0FBQ0E7QUFDQTtBQUNILE9BWEQsTUFXTyxDQUNIO0FBQ0g7QUFDSjs7OzZCQUVTO0FBQ04sMEJBQU87QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0g7QUFBSSxpQkFBUyxFQUFDO0FBQWQsc0JBQ0k7QUFBTSxVQUFFLEVBQUMsWUFBVDtBQUFzQixpQkFBUyxFQUFDO0FBQWhDLHVCQURKLGVBRUksOEtBRkosQ0FERyxlQUtIO0FBQU0sVUFBRSxFQUFDLGVBQVQ7QUFBeUIsY0FBTSxFQUFDLEtBQWhDO0FBQXNDLGlCQUFTLEVBQUM7QUFBaEQsc0JBQ0k7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLHNCQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLFFBQXhCO0FBQWlDLFVBQUUsRUFBQyxRQUFwQztBQUNPLGlCQUFTLEVBQUMsY0FEakI7QUFFTyxtQkFBVyxFQUFDLDhDQUZuQjtBQUdPLGFBQUssRUFBRSxLQUFLRixLQUFMLENBQVdFO0FBQ2xCO0FBSlA7QUFLTyxnQkFBUSxFQUFFLEtBQUtzQixZQUx0QjtBQU1PLGVBQU8sRUFBRSxLQUFLRTtBQU5yQixRQURKLGVBU0k7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLHNCQUNJO0FBQVEsVUFBRSxFQUFDLGlCQUFYO0FBQTZCLGlCQUFTLEVBQUMsZUFBdkM7QUFBdUQsWUFBSSxFQUFDLFFBQTVEO0FBQXFFLGdCQUFRLEVBQUUsS0FBS0E7QUFBcEYsc0JBQ0k7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLGtCQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLG9CQUZKLENBREosQ0FUSixDQURKLENBTEcsZUF1QkgsMkRBQUMsK0NBQUQ7QUFBUSxVQUFFLEVBQUMsUUFBWDtBQUFvQixjQUFNLEVBQUUsS0FBSzFCLEtBQUwsQ0FBV0MsTUFBdkM7QUFBK0MscUJBQWEsRUFBRSxLQUFLRCxLQUFMLENBQVdNO0FBQXpFLGlCQXZCRyxDQUFQO0FBeUJIOzs7O0VBNUVtQ2hELDRDQUFLLENBQUMrRCxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvanMvYXBwLmpzXCIsXCJ2ZW5kb3JzfmFwcFwiLFwiYXBwfnBvc3NlZGV4XCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUG9zc2VkZXggfSBmcm9tIFwiLi9Qb3NzZWRleFwiO1xuXG4oJy4vUG9zc2VkZXguanMnKTtcblxuLy8gaW1wb3J0IENsb2NrIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xvY2tcIlxuLy8gaW1wb3J0IEluY3JlbWVudGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSW5jcmVtZW50ZXJcIjtcbi8vIGltcG9ydCBNYW51YWxJbmNyZW1lbnRlciBmcm9tIFwiLi9jb21wb25lbnRzL01hbnVhbEluY3JlbWVudGVyXCI7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1NlYXJjaEZvcm1cIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4vY29tcG9uZW50cy9SZXN1bHRcIjtcblxuXG5jb25zdCBlID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcblxuY29uc3QgRE9NQUlOICAgICA9IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lXG5jb25zdCBiYXNlX3VybCAgID0gXCJodHRwOi8vXCIrRE9NQUlOK1wiL21kaXBsby5qc29uXCJcblxuXG4vLyBmdW5jdGlvbiBSZWNoZXJjaGVGdW5jKHtuYW1lLCBjaGlsZHJlbn0pIHtcbi8vICAgICByZXR1cm4gPGRpdj5cbi8vICAgICAgICAgPGgyPlJlY2hlcmNoZSBwb3VyIHtuYW1lfSDigKYgPC9oMj5cbi8vICAgICAgICAgPHA+e2NoaWxkcmVufTwvcD5cbi8vICAgICA8L2Rpdj5cbi8vIH1cblJlYWN0RE9NLnJlbmRlcig8U2VhcmNoRm9ybSBiYXNlX3VybD17YmFzZV91cmx9IC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVjaGVyY2hlcicpKTtcblxuXG4vLyB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICB0ZXN0Kytcbi8vICAgcmVuZGVyKCk7XG4vLyB9LCAxMDAwMClcbi8vIHJlbmRlcigpO1xuXG4vL1JlYWN0RE9NLnJlbmRlcihlLCBkb21Db250YWluZXIpO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgICQoXCIjbG9nb1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCQoXCIjbWVudXBvcHVwXCIpLmlzKFwiOmhpZGRlblwiKSl7XG4gICAgICAgICAgICAkKFwiI21lbnVwb3B1cFwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG4gICAgJChcIi5xdWl0LCAubmF2LWxpbmssIC5uYXYtc29jaWFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIiNtZW51cG9wdXBcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwiY2FuY2VsaW5nIGNvbnNvbGUucmVhZHlcIik7XG4gICAgcmV0dXJuO1xuICAgICQoXCIjZm9ybS1wb3NzZWRleFwiKS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdXJsID0gJChcIiN1cmxcIikudmFsKCk7XG4gICAgICAgIGlmICh1cmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJC5nZXRKU09OKGJhc2VfdXJsLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBQb3NzZWRleC5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9ICdRdWkgcG9zc8OoZGUgXCInK3VybCsnXCIgPyAtIFBvc3NlZGV4JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgICAgICAgICAgICAgIFBvc3NlZGV4LmRlYnVua1NpdGUodXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJTYWlzaXNzZXogZCdhYm9yZCB1bmUgdXJsIDopIFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIiNzdWJtaXQtcG9zc2VkZXhcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiI2Zvcm0tcG9zc2VkZXhcIikuc3VibWl0KCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmRldGFpbC1vd25lciwuZGV0YWlsLW1lZGlhXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBub20gPSB0aGlzLmhyZWYucmVwbGFjZSgnaHR0cDovLycrRE9NQUlOK1wiLyNcIiwgJycpO1xuICAgICAgICBpZiAoJ3AvJyA9PSBub20uc3Vic3RyKDAsIDIpKSB7XG4gICAgICAgICAgICAkKFwiI2RvbWFpbi1vci1vd25lclwiKS52YWwoXCJvd25lclwiKTtcbiAgICAgICAgICAgICQoXCIjdXJsXCIpLnZhbChkZWNvZGVVUklDb21wb25lbnQobm9tLnN1YnN0cigyKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkb21haW4tb3Itb3duZXJcIikudmFsKFwiZG9tYWluXCIpO1xuICAgICAgICAgICAgJChcIiN1cmxcIikudmFsKGRlY29kZVVSSUNvbXBvbmVudChub20pKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2Zvcm0tcG9zc2VkZXhcIikuc3VibWl0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGlzIGlzIGEgZGlyZWN0IHJlcXVlc3RcbiAgICB2YXIgY3VycmVudF9sb2NhdGlvbiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7IC8vIGZ1bGwgdXJsO1xuICAgIGlmICgocG9zID0gY3VycmVudF9sb2NhdGlvbi5pbmRleE9mKCcjJykpID4gLTEpIHtcbiAgICAgICAgdXJsID0gY3VycmVudF9sb2NhdGlvbi5zdWJzdHJpbmcocG9zKzEpO1xuICAgICAgICBpZiAoJ3AvJyA9PSB1cmwuc3Vic3RyKDAsIDIpKSB7XG4gICAgICAgICAgICAkKFwiI2RvbWFpbi1vci1vd25lclwiKS52YWwoXCJvd25lclwiKTtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMik7XG4gICAgICAgICAgICAkKFwiI3VybFwiKS52YWwoZGVjb2RlVVJJQ29tcG9uZW50KHVybCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkb21haW4tb3Itb3duZXJcIikudmFsKFwiZG9tYWluXCIpO1xuICAgICAgICAgICAgJChcIiN1cmxcIikudmFsKGRlY29kZVVSSUNvbXBvbmVudCh1cmwpKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI3N1Ym1pdC1wb3NzZWRleFwiKS5jbGljaygpO1xuICAgIH1cblxuXG5cblxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW50aXR5OiB0aGlzLnByb3BzLmVudGl0eSA/IHRoaXMucHJvcHMuZW50aXR5IDoge25vbTpcInJpZW5cIn0sXG4gICAgICAgICAgICBzZWFyY2g6IHRoaXMucHJvcHMuc2VhcmNoID8gdGhpcy5wcm9wcy5zZWFyY2ggOiBcInZpZGVcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZG9tYWluID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZlxuICAgICAgICAvLyBjb25zb2xlLmluZm8oXCJwcm9wc1wiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcInByb3BzIGRhbnMgcmVuZGVyXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhhc093blByb3BlcnR5KFwiZW50aXR5XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBpZD1cImluZm9zXCI+XG4gICAgICAgICAgICAgICAgQXVjdW4gcsOpc3VsdGF0IHBvdXIge3RoaXMucHJvcHMuc2VhcmNoX291dHB1dH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5pbmZvKFwicHJvcHMgZGFucyBsZSBlbHNlIGRlIHJlbmRlclwiKTtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMucHJvcHMuZW50aXR5O1xuICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBpZD1cImluZm9zXCI+XG4gICAgICAgICAgICAgICAgICAgIFJpZW5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGlkPVwiaW5mb3NcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e2VudGl0eS50eXBlTGliZWxsZX08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRldGFpbC1tZWRpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9cIiArIHRoaXMuZG9tYWluICtcIiNcIiArIGVudGl0eS50eXBlTGliZWxsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZW50aXR5Lm5vbX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ZW50aXR5LnVybHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TaXRlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW50aXR5LnVybHMubWFwKCh1cmwsIHVybF9pZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXt1cmxfaWR9IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e1wiaHR0cHM6Ly9cIiArIGVudGl0eS51cmxzW3VybF9pZF19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2VudGl0eS5oYXNPd25Qcm9wZXJ0eSgnZXN0X3Bvc3NlZGUnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb3ByacOpdGFpcmVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnRpdHkuZXN0X3Bvc3NlZGUubWFwKChlbCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtpfSBjbGFzc05hbWU9XCJkZXRhaWwtb3duZXJcIiBocmVmPXtcIiNcIiArIGVsLm5vbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubm9tfSAoe2VsLnZhbGV1ciArIChwYXJzZUludChlbC52YWxldXIpID8gJyUnIDogJycpfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ZW50aXR5Lmhhc093blByb3BlcnR5KCdwb3NzZXNzaW9ucycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG9zc8OoZGUgb3UgY29udHLDtGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9zc2Vzc2lvbnMubWFwKChlbCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtpfSBjbGFzc05hbWU9XCJkZXRhaWwtb3duZXJcIiBocmVmPXtcIiNcIiArIGVsLm5vbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubm9tfSAoe2VsLnZhbGV1ciArIChwYXJzZUludChlbC52YWxldXIpID8gJyUnIDogJycpfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ZW50aXR5LnBvc3NlZGV4ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRPRE86IHJlZm9ybWF0ZXIgbGEgc29ydGllIGRlIGxhIGNsYXNzZSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbnTDqXLDqnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZW50aXR5LnBvc3NlZGV4LmluZmx1ZW5jZXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXJxdWVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZW50aXR5LnBvc3NlZGV4Lm1hcnF1ZXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdWJ2ZW50aW9ucyBwdWJsaXF1ZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntlbnRpdHkucG9zc2VkZXguc3VidmVudGlvbnN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiPGRpdj5JbmZvIHBvc3PDqWRleCBtYW5xdWFudGU8L2Rpdj5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4vUmVzdWx0XCI7XG5pbXBvcnQgeyBQb3NzZWRleCB9IGZyb20gXCIuLi9Qb3NzZWRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaCA6IFwiXCIsXG4gICAgICAgICAgICByZXN1bHQ6IFwienp6XCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5kb1NlYXJjaCA9IHRoaXMuZG9TZWFyY2guYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRhdGEgPSB7fVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaCh0aGlzLnByb3BzLmJhc2VfdXJsKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkb1NlYXJjaChlKSB7XG4gICAgICAgIC8vY29uc29sZSAmJiBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgLy8gY29uc29sZSAmJiBjb25zb2xlLmxvZygncHJldmVudCBkZWZhdWx0Jyk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgc2VhcmNoID0gdGhpcy5zdGF0ZS5zZWFyY2hcbiAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBQb3NzZWRleC5kYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSAnUXVpIHBvc3PDqGRlIFwiJytzZWFyY2grJ1wiID8gLSBQb3NzZWRleCc7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gc2VhcmNoO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZW50aXR5IDogUG9zc2VkZXguZGVidW5rU2l0ZShzZWFyY2gpLFxuICAgICAgICAgICAgICAgIHNlYXJjaF9vdXRwdXQgOiBcInJlY2hlcmNoZSBkZSBcIiArIHNlYXJjaFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmluZm8oJ0xFIFJFU1VMVEFUIERBTlMgVEhJUy5TVEFURS5SRVNVTFQnKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucmVzdWx0KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VhcmNoX291dHB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhbGVydChcIlNhaXNpc3NleiBkJ2Fib3JkIHVuZSB1cmwgOikgXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJzaXRlLXRpdGxlXCIgY2xhc3NOYW1lPVwiXCI+UG9zc8OpZGV4PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwPkNoZXJjaGV6IHVuIG3DqWRpYSBwb3VyIHRyb3V2ZXIgc29uIHByb3ByacOpdGFpcmUsIG91IHVuIG1pbGxpYXJkYWlyZSBwb3VyIHRyb3V2ZXIgc2VzIG3DqWRpYXMuPC9wPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybS1wb3NzZWRleFwiIG1ldGhvZD1cIkdFVFwiIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGVtcGxlcyA6IExlIE1vbmRlLCBodW1hbml0ZS5mciwgQm9sbG9yw6lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLypkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLmRvU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdC1wb3NzZWRleFwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgb25TdWJtaXQ9e3RoaXMuZG9TZWFyY2h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgZC1zbS1ub25lXCI+JnJhcnI7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrXCI+Q2hlcmNoZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxSZXN1bHQgaWQ9XCJyZXN1bHRcIiBlbnRpdHk9e3RoaXMuc3RhdGUuZW50aXR5fSBzZWFyY2hfb3V0cHV0PXt0aGlzLnN0YXRlLnNlYXJjaF9vdXRwdXR9ID5Qb3VldDwvUmVzdWx0PlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9