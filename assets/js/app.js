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
const base_url   = "http://"+DOMAIN+"/mdiplo.json"


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
            $("#menupopup").removeClass("d-none");
        }

    });
    $(".quit, .nav-link, .nav-social").on("click", function(){
        $("#menupopup").addClass("d-none");
    });

    console && console.log("canceling console.ready");
    return;
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
