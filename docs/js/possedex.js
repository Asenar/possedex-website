/*          POSSEDEX
            VERSION 1 / MARS 2017
            VERSION 2 / JANVIER 2018
            REMERCIEMENT A L'EQUIPE LES DECODEURS DU MONDE
            REMERCIEMENT AUX INSOUMIS QUI SE RECONNAITRONT
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


var _debug = 0; // 0=quiet, 1=verbose, 2=more verbose, 3= very very verbose, 4=even more. 5 very very verbose

var DOMAIN     = 'possedex.info';
var maj        = '201801212317';
if (_debug) {
    console && console.info("DEBUG LEVEL", _debug);
}

/***** constants and variables *****/
let col_nom                 = 0;
let col_desc          = 1;
let col_slug                = 2;
let col_classement_possedex = 3;
let col_updated             = 4;

let col_pub           = 5;
let col_subventions   = 6;
let col_sources       = 7;

let col_proprietaire1 =  8;
let col_fortune1      =  9;
let col_marque1       = 10;
let col_interet1    = 11;

let col_proprietaire2 = 12;
let col_fortune2      = 13;
let col_marque2       = 14;
let col_interet2    = 15;

let col_proprietaire3 = 16;
let col_fortune3      = 17;
let col_marque3       = 18;
let col_interet3    = 19;

var messages = {
 inconnu     : "non classé",
 capital     : "Ce média dépend d'intérêts industriels, financiers, ou de groupe de presse.",
 etat        : "Ce média dépend d'un ou plusieurs états",
 independant : "Ce média est indépendant vis à vis d'intérêts industriels, financiers, groupe de presse ou étatique.",
 rien        : "rien"
};
var icones = {
inconnu     : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gEDDyoQwQ0NBgAACBlJREFUWMOtl1tsHOUVx38z sxevb3uz19ndrO34kkAM9sYmJCGhiEoJpVQxNKlAeQHRF0IfmgpRcZHoGyAeivpWBCoV7UPDA0lV 2hADIpAoIY3xZR+IL7G9ruPN2rve2bVnb/bOfH1wvPWytpOHHmmkmfPd/uf8z3fOGWl0dFSwhciy zKVLl7BarezduxfDMACQJAlJkhDif8vXv9+tmLYalCQJTdM4e/YT6uvr2bNnDyaTCSEEqVSKTCaN w+Ekn89jNpuxWq0oivL/AyDLMkNDQ4RCIWpqapmcnMBud9DXd56LF78BJF544SSRyCyalqatrY3d u3djsViKQO7kFWkrCgzD4O233yIcnkKSJGw2G9lsFl3XCQaDfP311xw92svDDz9MKrXI0tIS4+Oj 7Ny5i+bmHdjtdmpqarYEYdrq8KGhQQYHB3j++V/icDh4/fXXOHz4MG+88TsaG5s4derXXLp0EU3T mJiYYGEhTjQa5eWXf8vVq1cxDIOHHjqA3799UxDyZtzPzc3xxRdfkMvl6OoK8sQTP+Oee+7B5XLT 2NiEoih0dXURiUTwer28+uqrnDz5InV1dbhcLhYXU0Sjt/j888+5cePG5jT/UCGEIBQKoWkagUAA IQT5fJ66ujqOH/8FX375JaHQMABNTU3YbDaOHHmMAwceYnFxEafTiSwr5HI5ZFlG0zQuXvyGcDiM JElbA5AkiXA4zLffXmFwcIDu7h58Pj8fffRnUqkUR4/24nDYOX36NAAejweAWGwegJGREQKBRrLZ DLquF/dMp9NcuXKZRCJRBkJef7imafT397O8vEwsFmN2dpYTJ04wODjIX/7yET6fj2PHjtPXd57v v/8eh8OB2WwmmUySyWQIh6dobm4mmUyVcC5JEolEgoGB7ygUCpt7YGxsjFhsvphkxsfHcDpdPP74 T/nwwz/R33+Np576OdXV1Zw+/TfMZgtWq5VUKsXc3ByJRAKfz08yqZZZKkkSk5NT3LoVKRmT1wYz mQw3boyXIC8UCgwND9PUvAOvz8/pjz/m+vXr3Hd/FxcuXKC//zt8/gDzsQUuX7lKTa0Tq9WKpmkb 8p3P5xgdHStmU7idB2RZJhye4ty5c0XuAATgrV6k2z9LhdlYXSgEc+lavrpuZ0eDoMsXp2BI5Asm Ehkbc8sB4snC7dXlAV5ba6e3txe73Y4QYjUPCCGIRucoFAolyCXgRzumONA4jSGkoi5XMKFmH2Bf YJo9vll0Y5XJFUNhLDbN2ev3E0tXoUilIFYDUiORWMDhcCCEWKXAMAxUVS1LFkJIzKQc5AomDCEV n/SyBW3ZwrTqJKZVspS3kC+YUCSD3Q3zPH3/EEFvBJNslHlB13VUNVn8Nq0ps9ls2WSzouOuTLOe TQFUW/Mcaprkn+Nd3Fy5D1FI80B9iAcDMxhCos29QK01z3TSSSpnQ6K0YmYy6aKx8prSMPQS9wvA airQ5l7ArOglwCyKjr82SZ3LyVMnTtG+p5dkrqJkLRKUh+GqrKwUSgHAauUrubtAetnCpyP3El2q QZLWWyFRYdKpFlNEb0Vobm4ilqtnRZe5GzGZTEVj5TVFRYWtPGqB2UU7BUNGkQTybRACcFdluNc1 xcTEOIHtfvK2TqZVe3HOZiJJEpWVtlIAsizjdDrKkweQL5i4OtPESMzDRMJNvrBaQHVDxqRAdDpE Qk3Qvf8wF2fuI5m1roJlYyCKouBwOIvfxUTk8TRgMpVXZ0NIXP5PE+9f20ff+E4EFOno9kfoqL7M 8NAgwWAX/s5nODv6ICMxD/NaFbohwQ8CsLKyErfbXaS7mAcaGhpwOBzE4/ENs1jBkNGWrSSztmJw GQKW8lYqLVYUWebIkSP8S9f5w98/pnXHdrKFTNkN8Hq9JU1KEUBVVRUtLa3E4/ENXSdLguhSDX8N HaDSlGFlpUCtw02Vp5NH9u4tundPMMgHH7zPwUeOoOXHS+qCxWKhvb0dRVFKAazJrl27mJi4wcLC woZeEELg9AcZHg6Ry2Z581ev43I5sVosxTk+n4+21lbGx0YJBAKoauJ292zQ2NjE9u2Bktsmr9/c brfT3d2D2WzesIWSJAmX00lkdga/34t3W0PJ4UtLS8zNzdHR0cHw8BBudx0Wi6VYA3p6VvdeL6Yf WtjW1oaqqgwMfFcGwmKxIMsS8/NztLY+WdTHYjE+++wcZ858QiQSQdcNlpYWWVxM4XK5UFWV/fv3 4/F4yvYsC3tFUejp6UHXdUKhYXRdL/6AVFVVkclkSKfTbNu2jdHRUfr6zvPpp/9gZGSEQ4cOcfLk i9y8eZMzZz5hcHCQgwcPYjabaWtr39CrZQCEEJjNZvbt20d1dRUDAwNomgaA3W4nHo+jaRrvvvt7 YrEYy8vLdHUFaW9vp6Ojg2effQ6AlpYW3nvvjxw7dhyv17tpV7xhWy6EQFEUOju78HgaCIWGCYfD 2O125ufncbvdSJLMY4/9hGAwSEPDNq5d+zfnz3/Gc889j8/no6amlng8Tjwew+/3l/QZdwSwXrxe L/X19USjUUwmhYoKGy+99DJ1dXWoqsrU1BSTk5O0t7ejqioXLnxFc3Mz77zzNu3tO2lsbCrpgMoC +04/p+tvAKyWbkVRSCaTqKoKCCoqbNTW1vLWW28yMzPDysoyXq+XU6d+QyDQhBCbA7i78nWbFiFE sWo6HA5aWlpoaWktZrdHH/0xt25F2LlzF6+88hqNjVsfflcU3AnQmhiGQWdnJ08//Qy9vU9SX1+/ pevX5L8bOMsEuz+CngAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAldEVY dGRhdGU6Y3JlYXRlADIwMTgtMDEtMDNUMTY6NDA6NDUrMDE6MDDe7UZ0AAAAJXRFWHRkYXRlOm1v ZGlmeQAyMDE4LTAxLTAzVDE2OjQwOjQ1KzAxOjAwr7D+yAAAAABJRU5ErkJggg==',
capital     : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gEDDyoQwQ0NBgAACBlJREFUWMOtl1tsHOUVx38z sxevb3uz19ndrO34kkAM9sYmJCGhiEoJpVQxNKlAeQHRF0IfmgpRcZHoGyAeivpWBCoV7UPDA0lV 2hADIpAoIY3xZR+IL7G9ruPN2rve2bVnb/bOfH1wvPWytpOHHmmkmfPd/uf8z3fOGWl0dFSwhciy zKVLl7BarezduxfDMACQJAlJkhDif8vXv9+tmLYalCQJTdM4e/YT6uvr2bNnDyaTCSEEqVSKTCaN w+Ekn89jNpuxWq0oivL/AyDLMkNDQ4RCIWpqapmcnMBud9DXd56LF78BJF544SSRyCyalqatrY3d u3djsViKQO7kFWkrCgzD4O233yIcnkKSJGw2G9lsFl3XCQaDfP311xw92svDDz9MKrXI0tIS4+Oj 7Ny5i+bmHdjtdmpqarYEYdrq8KGhQQYHB3j++V/icDh4/fXXOHz4MG+88TsaG5s4derXXLp0EU3T mJiYYGEhTjQa5eWXf8vVq1cxDIOHHjqA3799UxDyZtzPzc3xxRdfkMvl6OoK8sQTP+Oee+7B5XLT 2NiEoih0dXURiUTwer28+uqrnDz5InV1dbhcLhYXU0Sjt/j888+5cePG5jT/UCGEIBQKoWkagUAA IQT5fJ66ujqOH/8FX375JaHQMABNTU3YbDaOHHmMAwceYnFxEafTiSwr5HI5ZFlG0zQuXvyGcDiM JElbA5AkiXA4zLffXmFwcIDu7h58Pj8fffRnUqkUR4/24nDYOX36NAAejweAWGwegJGREQKBRrLZ DLquF/dMp9NcuXKZRCJRBkJef7imafT397O8vEwsFmN2dpYTJ04wODjIX/7yET6fj2PHjtPXd57v v/8eh8OB2WwmmUySyWQIh6dobm4mmUyVcC5JEolEgoGB7ygUCpt7YGxsjFhsvphkxsfHcDpdPP74 T/nwwz/R33+Np576OdXV1Zw+/TfMZgtWq5VUKsXc3ByJRAKfz08yqZZZKkkSk5NT3LoVKRmT1wYz mQw3boyXIC8UCgwND9PUvAOvz8/pjz/m+vXr3Hd/FxcuXKC//zt8/gDzsQUuX7lKTa0Tq9WKpmkb 8p3P5xgdHStmU7idB2RZJhye4ty5c0XuAATgrV6k2z9LhdlYXSgEc+lavrpuZ0eDoMsXp2BI5Asm Ehkbc8sB4snC7dXlAV5ba6e3txe73Y4QYjUPCCGIRucoFAolyCXgRzumONA4jSGkoi5XMKFmH2Bf YJo9vll0Y5XJFUNhLDbN2ev3E0tXoUilIFYDUiORWMDhcCCEWKXAMAxUVS1LFkJIzKQc5AomDCEV n/SyBW3ZwrTqJKZVspS3kC+YUCSD3Q3zPH3/EEFvBJNslHlB13VUNVn8Nq0ps9ls2WSzouOuTLOe TQFUW/Mcaprkn+Nd3Fy5D1FI80B9iAcDMxhCos29QK01z3TSSSpnQ6K0YmYy6aKx8prSMPQS9wvA airQ5l7ArOglwCyKjr82SZ3LyVMnTtG+p5dkrqJkLRKUh+GqrKwUSgHAauUrubtAetnCpyP3El2q QZLWWyFRYdKpFlNEb0Vobm4ilqtnRZe5GzGZTEVj5TVFRYWtPGqB2UU7BUNGkQTybRACcFdluNc1 xcTEOIHtfvK2TqZVe3HOZiJJEpWVtlIAsizjdDrKkweQL5i4OtPESMzDRMJNvrBaQHVDxqRAdDpE Qk3Qvf8wF2fuI5m1roJlYyCKouBwOIvfxUTk8TRgMpVXZ0NIXP5PE+9f20ff+E4EFOno9kfoqL7M 8NAgwWAX/s5nODv6ICMxD/NaFbohwQ8CsLKyErfbXaS7mAcaGhpwOBzE4/ENs1jBkNGWrSSztmJw GQKW8lYqLVYUWebIkSP8S9f5w98/pnXHdrKFTNkN8Hq9JU1KEUBVVRUtLa3E4/ENXSdLguhSDX8N HaDSlGFlpUCtw02Vp5NH9u4tundPMMgHH7zPwUeOoOXHS+qCxWKhvb0dRVFKAazJrl27mJi4wcLC woZeEELg9AcZHg6Ry2Z581ev43I5sVosxTk+n4+21lbGx0YJBAKoauJ292zQ2NjE9u2Bktsmr9/c brfT3d2D2WzesIWSJAmX00lkdga/34t3W0PJ4UtLS8zNzdHR0cHw8BBudx0Wi6VYA3p6VvdeL6Yf WtjW1oaqqgwMfFcGwmKxIMsS8/NztLY+WdTHYjE+++wcZ858QiQSQdcNlpYWWVxM4XK5UFWV/fv3 4/F4yvYsC3tFUejp6UHXdUKhYXRdL/6AVFVVkclkSKfTbNu2jdHRUfr6zvPpp/9gZGSEQ4cOcfLk i9y8eZMzZz5hcHCQgwcPYjabaWtr39CrZQCEEJjNZvbt20d1dRUDAwNomgaA3W4nHo+jaRrvvvt7 YrEYy8vLdHUFaW9vp6Ojg2effQ6AlpYW3nvvjxw7dhyv17tpV7xhWy6EQFEUOju78HgaCIWGCYfD 2O125ufncbvdSJLMY4/9hGAwSEPDNq5d+zfnz3/Gc889j8/no6amlng8Tjwew+/3l/QZdwSwXrxe L/X19USjUUwmhYoKGy+99DJ1dXWoqsrU1BSTk5O0t7ejqioXLnxFc3Mz77zzNu3tO2lsbCrpgMoC +04/p+tvAKyWbkVRSCaTqKoKCCoqbNTW1vLWW28yMzPDysoyXq+XU6d+QyDQhBCbA7i78nWbFiFE sWo6HA5aWlpoaWktZrdHH/0xt25F2LlzF6+88hqNjVsfflcU3AnQmhiGQWdnJ08//Qy9vU9SX1+/ pevX5L8bOMsEuz+CngAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAldEVY dGRhdGU6Y3JlYXRlADIwMTgtMDEtMDNUMTY6NDA6NDUrMDE6MDDe7UZ0AAAAJXRFWHRkYXRlOm1v ZGlmeQAyMDE4LTAxLTAzVDE2OjQwOjQ1KzAxOjAwr7D+yAAAAABJRU5ErkJggg==',
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

var base_url = "http://"+DOMAIN+"/database.json?maj="+maj;

$(document).ready(function(){
    $("#form-possedex").on("submit", function(e){
        e.preventDefault();
        var url = $("#url").val();
        if (url.length > 0) {
            $.getJSON(base_url, function(data){
                if ($("#domain-or-owner").val() == "owner") {
                    document.location.hash = 'p/'+url;
                    document.title = 'Que possède "'+url+'" ? - Possedex';
                    debunkProprietaire(url, data);
                } else {
                    document.title = 'Qui possède "'+url+'" ? - Possedex';
                    document.location.hash = url;
                    debunkSite(url, data);
                }
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

function removeAfterLastSlash(url){
    if(url.lastIndexOf('/') !== -1) {
        return url.substring(0, url.lastIndexOf('/'));
    }
    else {
        return url;
    }
}

function lastSlash(url){ // remove the last slash at the end of the string
    if(url.lastIndexOf('/') == url.length-1) {
        return url.substring(0, url.length-1);
    }
    else {
        return url;
    }
}

function url_cleaner(url){
    return url
        .replace("http://", "")
        .replace('www.', "")
        .replace("https://", "")
        .replace("\n", "");
}

function youtubeChannel(url){
    var elms = url.split('/');
    if(elms.length > 2){
        return elms[0] + '/' + elms[1] + "/" + elms[2];
    }
    else{
        return url;
    }
}

function debunkSite(url, data){
    // INIT vars

    var owner_msg = '';

    var proprietaires = '';
    var fortunes      = '';
    var marques       = '';
    var interets      = '';
    var proprietaires = '';

    var interets      = '';

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
        console && console.group('STARRT debunk site '+url);
    }

    if (3 <= _debug) {
        console && console.info("debunkSite : var results");
        console && console.log("results");
    }

    urls = data.urls;
    sites = data.sites;
    url = lastSlash(url);
    url = url_cleaner(url);
    has_info = urls.hasOwnProperty(url);
    // si le site est trouvé direct
    if (has_info == true) {
        site_id = urls[url];
        if (2 <= _debug) {
            console && console.log('site FOUND ! ', site_id);
        }
        try {
            nom            = sites[site_id][col_nom];                    // nom du site
            updated        = new Date(sites[site_id][col_updated]);      // last maj
            classement     = sites[site_id][col_classement_possedex];   // clssement possedex
            notule         = sites[site_id][col_desc];                   // description originale
            slug           = sites[site_id][col_slug];                   // nom normalisé

            owner_msg      = owner_msgs[classement];               // message "ce media est la propriété ..."

            var proprietaire1  = sites[site_id][col_proprietaire1];      // propriétaires
            var fortunes1      = sites[site_id][col_fortune1     ];      // propriétaires
            var marque1        = sites[site_id][col_marque1      ];      // propriétaires
            var interet1     = sites[site_id][col_interet1   ];      // propriétaires

            var proprietaire2 = sites[site_id][col_proprietaire2];      // propriétaires
            var fortunes2      = sites[site_id][col_fortune2     ];      // propriétaires
            var marque2        = sites[site_id][col_marque2      ];      // propriétaires
            var interet2     = sites[site_id][col_interet2   ];      // propriétaires

            var proprietaire3 = sites[site_id][col_proprietaire3];      // propriétaires
            var fortunes3      = sites[site_id][col_fortune3     ];      // propriétaires
            var marque3        = sites[site_id][col_marque3      ];      // propriétaires
            var interet3     = sites[site_id][col_interet3   ];      // propriétaires

            proprietaires = []
            proprietaires.push(' <a class="detail-owner" href="http://'+DOMAIN+'#p/'+proprietaire1+'">'
                +proprietaire1
                + '</a>'
                //+ " (" + fortunes1 + ")"
            );
            if (proprietaire2) {
                proprietaires.push(' <a class="detail-owner" href="http://'+DOMAIN+'#p/'+proprietaire2+'">'
                    +proprietaire2
                    + '</a>'
                    //+ " (" + fortunes2 + ")"
                );
            }
            if (proprietaire3) {
                proprietaires.push(' <a class="detail-owner" href="http://'+DOMAIN+'#p/'+proprietaire3+'">'
                    +proprietaire3
                    + '</a>'
                    //+ " (" + fortunes3 + ")"
                );
            };

            marques       = [];
            if (marque1) {
                marques.push(marque1);
            }
            if (marque2) {
                marques.push(marque2);
            }
            if (marque3) {
                marques.push(marque3);
            }

            interets       = [];
            if (interet1) {
                interets.push(interet1);
            }
            if (interet2) {
                interets.push(interet2);
            }
            if (interet3) {
                interets.push(interet3);
            }

            subventions    = sites[site_id][col_subventions];            // Montant des subventions d'état
            publicite      = sites[site_id][col_pub];                    // Pub ?

            var raw_sources = sites[site_id][col_sources];                // Nos sources (urls séparés par virgule et/ou espace)

            if (3 <= _debug) {
                console && console.info("sources avant markdown", raw_sources);
            }
            // Markdown style
            var regex = new RegExp(/\[([^\]]*?)\]\(([^\)]*?)\)[, ]{0,2}/gm);
            match = regex.exec(raw_sources);
            sources = [];
            while (match != null) {
                sources.push({"url":match[2], "title":match[1]});
                match = regex.exec(raw_sources);
            }

            if (3 <= _debug) {
                console && console.log("sources apres markdown", sources);
            }

            // URL toute seule
            var regex = new RegExp(/^(http[s]?:\/\/([^/]+)\/[^" ,]+)[^"]{1,2}$/g);
            match = regex.exec(raw_sources);
            while (match != null) {
                sources.push({"url":match[1], "title":match[2]});
                match = regex.exec(raw_sources);
            }

            if (3 <= _debug) {
                console && console.log("sources apres urls simples", sources);
            }

            note          = classement;
            color         = colors[classement];
            message       = messages[classement];
            //decodex_color = decodex_colors[decodex_note];
            //decodex_desc  = decodex_descs[decodex_note];
            updated_human  = updated.toLocaleString('fr');
            bandeau_msg   = bandeau_msgs[classement];
            icone         = icones[classement];

            if (2 <= _debug) {
                console && console.group("tout s'est bien passé");
                console && console.log('nom            =',nom            );
                console && console.log('updated        =',updated_human  );
                console && console.log('classement     =',classement     );
                console && console.log('notule         =',notule         );
                console && console.log('slug           =',slug           );
                console && console.log('proprietaires  =',proprietaires  );
                console && console.log('interets       =',interets       );
                console && console.log('conflits       =',conflits       );
                console && console.log('subventions    =',subventions    );
                console && console.log('sources        =',sources        );
                console && console.groupEnd();
            }

            // display results
            $("#result").html('<dl id="infos">');
            $("#infos").append("<label>Nom</label>");
            $("#infos").append("<p>"+nom
                +' <a target="from_possedex" href="http://'+url+'">'+url+'</a>'
                +"</p>");
            //$("#result").append("<label>Note LeMonde (outdated)</label><p>"+decodex_note+"</p>");
            $("#result").append("<label>Classement Possedex</label><p>"+messages[classement]+"</p>");
            $("#result").append("<label>Description</label><p>"+notule+"</p>");
            //$("#result").append("<label>identifiant(à masquer plus tard)</label><p>"+slug+"</p>");
            $("#result").append("<label>Propriétaires</label><p>"+proprietaires+"</p>");
            if (interets.length) {
                $("#result").append("<label>Intérêts</label><p>"+interets+"</p>");
            }
            if (marques.length) {
                $("#result").append("<label>Marques</label><p>"+marques+"</p>");
            }
            $("#result").append("<label>Subventions</label><p>"+subventions+"</p>");
            $("#result").append(sources);
            $("#result").append("<label>Dernière mise à jour</label><p>"
                + new Date(data.proprietaires[nom].updated).toLocaleString()
                +"</p>");

        } catch(e) {
            if (1 <= _debug) {
                console && console.error("ERREUR has_info");
                console && console.error(e);
                console && console.log(sites[site_id]);
            }
        }


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
    }
    else {
        $("#result").html('Nous n\'avons actuellement aucune information sur ce site.');
        if (2 <= _debug) {
            console && console.info("site non trouvé", url);
            console && console.log(urls);
        }
        // Optional : add a badge text and badge bg with the icon
        //browser.browserAction.setBadgeText({"text" : "Soumis :p"});
        //browser.browserAction.setBadgeBackgroundColor({'color' : "#D50303"});
    }

    if (url.match(/youtube.com/)) {

        if (null == classement)
            classement  = '';                             // propriétaires


        if ("" == proprietaires)
            proprietaires  = "Youtube est une propriété de la Holding Alphabet (Google)";                             // propriétaires
        if ("" == interets)
            interets       = "Le groupe Alphabet(Google) a de nombreux intérêts internationnaux. Son business model est fortement basé sur la publicité et son quasi-monopole de la publicité. Google exerce de nombreuses pressions sur les états et l'Union Européenne.";                               // intérets
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
}

function debunkProprietaire(nom, data){

    nom = decodeURIComponent(nom);
    // display results
    $("#result").html('<dl id="infos">');
    $("#infos").append("<label>Nom</label>");
    $("#infos").append("<p>"+nom+"</p>");
    //$("#result").append("<label>Note LeMonde (outdated)</label><p>"+decodex_note+"</p>");
    $("#result").append("<label>Classement Fortune</label><p>"+data.proprietaires[nom].fortune+"</p>");
    $("#result").append("<label>Description</label><p>"+data.proprietaires[nom].description+"</p>");
    //$("#result").append("<label>identifiant(à masquer plus tard)</label><p>"+slug+"</p>");
    //$("#result").append("<label>Description</label><p>"+data.proprietaires[nom].description+"</p>");
    $("#result").append("<label>Secteur(s)</label><p>"+data.proprietaires[nom].secteur+"</p>");
    $("#result").append("<label>Marques</label><p>"+data.proprietaires[nom].marque+"</p>");
    var medias = $('<ul class="list-group">');
    data.proprietaires[nom].possession.forEach(function(media) {
        medias.append('<li class="list-group-item">'
            +'<a class="detail-media" href="http://'+DOMAIN+'/#'+media.url+'">'+media.nom+'</a>'
            +' -  '
            //+'<small>'
            +'<a class="goto-acrimed" title="Cliquer pour chercher des articles d\'ACRIMED concernant ce média" target="to_acrimed" href="http://www.acrimed.org/+-'+media.nom.replace(/ /,'-')+'-+">'
            +'<img src="/img/acrimed.png" alt="ACRIMED"/>'
            +' ACRIMED'
            +'</a>'
            //+'</small>'
            //+' <br><small><a class="goto-media" target="from_possedex" href="http://'+media.url+'">accéder à ce média (dans un nouvel onglet)</a></small>'
            +'</li>');

    })
    medias = $("<p>").append(medias);
    $("#result").append("<label>Médias contrôlés</label>").append(medias);
    $("#result").append("<label>Dernière mise à jour</label><p>"
        + new Date(data.proprietaires[nom].updated).toLocaleString()
        +"</p>");

}

