"use strict"

let show = false
let count = 0

let konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (event) => {
        if (event.key === konami[count]){
            count++
        }
        else{
            count = 0
        }

        if (count == 10){
            show = true
        }

        if (show){
            let head = document.createElement("div")
            head.classList.add("header")

            let logo = document.createElement("img")
            logo.classList.add("logo")
            logo.src = "logo.png"

            let div = document.createElement("div")
            div.classList.add("center")

            let text = document.createElement("h1")
            text.innerText = "La Plateforme_"

            let image = document.createElement("img")
            image.classList.add("middle_image")
            image.src = "image.png"

            let foot = document.createElement("div")
            foot.classList.add("footer")

            head.appendChild(logo)
            div.appendChild(text)
            div.appendChild(image)

            let temp = document.getElementById("temp");
            document.body.insertBefore(head, temp);
            document.body.insertBefore(div, temp);
            document.body.insertBefore(foot, temp);
            temp.remove()
        }
    });
})