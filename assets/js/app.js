import React from 'react';
import ReactDOM from 'react-dom';
import { Possedex } from "./Possedex";

('./Possedex.js');

// import Clock from "./components/Clock"
// import Incrementer from "./components/Incrementer";
// import ManualIncrementer from "./components/ManualIncrementer";
import SearchForm from "./components/SearchForm";
import Result from "./components/Result";

import './global.js'

if (_debug) {
    console && console.info("DEBUG LEVEL", _debug);
}

const base_url =  (document.location.port !== 80 || document.location.port !== 443)
    ?  document.location.protocol + "//"
        + document.location.hostname
        + ":" + document.location.port
        + "/mdiplo.json"
    : document.location.protocol + "//" + document.location.hostname + "/mdiplo.json";

// function RechercheFunc({name, children}) {
//     return <div>
//         <h2>Recherche pour {name} … </h2>
//         <p>{children}</p>
//     </div>
// }
ReactDOM.render(<SearchForm base_url={base_url} />, document.querySelector('#rechercher'));



// window.setInterval(() => {
//   test++
//   render();
// }, 10000)
// render();

$(document).ready(function(){

    $("#logo").on("click", function(){
        if($("#menupopup").is(":hidden")){
            document.getElementById("menupopup").classList.remove("d-none");
        }

    });
    $(".quit, .nav-link, .nav-social").on("click", function(){
        document.getElementById("menupopup").classList.remove("d-none");
    });

});
