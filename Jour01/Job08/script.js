"use strict"

function sommeNombresPremiers(){
    let num = document.getElementById('num').value

    let prime = true
    let count = 2

    for (let index = 2; index < num/2; index++) {
        if (num == 2){
            prime = true
            break
        }
        if (num % index == 0){
            prime = false
        }
    }

    if (prime){
        document.getElementById('response').innerText = "Ce nombre est premier"
    }
    else{
        document.getElementById('response').innerText = "Ce nombre n'est pas premier"
    }
}