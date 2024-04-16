"use strict"

function bisextile(){
    let year = document.getElementById('year').value

    let bisextile = false

    if(year%4 == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                bisextile = true
            }
            else{
                bisextile = false
            }
        }
        else{
            bisextile = true
        }
    }
    else{
        bisextile = false
    }

    if (bisextile){
        document.getElementById('response').innerText = "This year is a leap year"
    }
    else{
        document.getElementById('response').innerText = "This year is not a leap year"
    }
}