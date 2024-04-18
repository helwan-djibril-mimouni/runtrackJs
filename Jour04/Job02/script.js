"use strict"

let show = false

function showhide(){
    show = !show
    if (show){
        let article = document.createElement("article")
        let head = document.createElement("h1")
        let newContent = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage");

        head.appendChild(newContent)
        article.appendChild(head)

        let button = document.getElementById("button");
        button.innerText = "Hide"
        document.body.insertBefore(article, button);
    }
    else{
        let article = document.querySelector('article')
        article.remove()

        let button = document.getElementById("button");
        button.innerText = "Show"
    }
}