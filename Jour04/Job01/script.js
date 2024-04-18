"use strict"

async function citation(){
    const response = await fetch(`expression.txt`);
    const text = await response.text();
    let p = document.createElement("p")
    let newContent = document.createTextNode(text);

    p.appendChild(newContent)

    let button = document.getElementById("button");
    document.body.insertBefore(p, button);
}