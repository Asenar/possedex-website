import React from 'react';
import ReactDOM from 'react-dom';
import { Possedex } from "./Possedex";

('./Possedex.js');

// import Clock from "./components/Clock"
// import Incrementer from "./components/Incrementer";
// import ManualIncrementer from "./components/ManualIncrementer";
import SearchForm from "./components/SearchForm";
import Result from "./components/Result";


const e = React.createElement;

const DOMAIN     = document.location.hostname
const base_url   = "/mdiplo.json"


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

//ReactDOM.render(e, domContainer);
$(document).ready(function(){

    $("#logo").on("click", function(){
        if($("#menupopup").is(":hidden")){
            $("#menupopup").classList.remove("d-none");
        }

    });
    $(".quit, .nav-link, .nav-social").on("click", function(){
        $("#menupopup").classList.remove("d-none");
    });

});
