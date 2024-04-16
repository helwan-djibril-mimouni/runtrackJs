"use strict"

function citation(){
    let article = document.querySelector('article')
    let citation = article.querySelector('h1')
    let text = citation.lastChild.textContent
    console.log(text + "")
    alert(text + "")
}