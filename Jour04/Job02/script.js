"use strict"

function jsonValueKey(jsonObj, key){
    for(var i in jsonObj){
        if (i == key){
            var j_key = i;
            var val = jsonObj[i];
            alert(j_key + " : " + val);
        }
    }
}

function getString(str){
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => jsonValueKey(json, str));
}
