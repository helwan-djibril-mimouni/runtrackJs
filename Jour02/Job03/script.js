"use strict"

function addOne() {
    let count = document.getElementById("compteur");
    let num = parseInt(count.innerText);
    num++;
    count.innerText = num + "";
    count.style.fontSize = num + "px"
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button")
    button.addEventListener("click", (addOne));
})