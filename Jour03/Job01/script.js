"use strict"

let show = false

$(document).ready(function(){
    $("#button1").click(function(){
        if (!show){
            $("p").append("<li>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.</li>");
            show = true
        }
    });
    $("#button2").click(function(){
        $("html").hide()
    });
});