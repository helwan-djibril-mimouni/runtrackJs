"use strict"

function jourTravaille(){
    let date = document.getElementById('date').value

    let work = true
    let special = false

    let special_txt = ""

    // if(date.getDay() == 5 || date.getDay() == 6){
    //     work = false
    // }
    // else{
    //     work = true
    // }

    let date_string = date.toString().substr(8, 2) + " " + getMonth(date.toString().substr(5, 2)) + " " + date.toString().substr(0, 4)
    let txt_for_day = getMonthEnglish(date.toString().substr(5, 2)) + " " + date.toString().substr(8, 2) + ", " + date.toString().substr(0, 4) + " 01:15:00"
    let date_full = new Date(txt_for_day)
    let day_of_the_week = date_full.getDay()

    if (day_of_the_week == 0 || day_of_the_week == 6){
        work = false
    }

    if (date.toString().substr(8, 2) == "01" && date.toString().substr(5, 2) == "01"){
        special = true
        special_txt = "C'est le jour de l'an"
    }
    if (date.toString().substr(8, 2) == "01" && date.toString().substr(5, 2) == "05"){
        special = true
        special_txt = "C'est la fête du travail"
    }
    if (date.toString().substr(8, 2) == "08" && date.toString().substr(5, 2) == "05"){
        special = true
        special_txt = "C'est la date de la victoire de 1945"
    }
    if (date.toString().substr(8, 2) == "14" && date.toString().substr(5, 2) == "07"){
        special = true
        special_txt = "C'est la date de la révolution française"
    }
    if (date.toString().substr(8, 2) == "11" && date.toString().substr(5, 2) == "11"){
        special = true
        special_txt = "C'est la date de l'Armistice de 1918"
    }
    if (date.toString().substr(8, 2) == "25" && date.toString().substr(5, 2) == "12"){
        special = true
        special_txt = "C'est Noël"
    }

    if (special){
        document.getElementById('response').innerText = "Le " + getDay(day_of_the_week) + " " + date_string + " est un jour férié\n" + special_txt 
    }
    else if (!work){
        document.getElementById('response').innerText = "Non, " + getDay(day_of_the_week) + " " + date_string + " est un week-end"
    }
    else{
        document.getElementById('response').innerText = "Oui, " + getDay(day_of_the_week) + " " + date_string + " est un jour travaillé"
    }
    
    console.log("ok")
    console.log(day_of_the_week)
}

function getMonth(num){
    switch(num){
        case "01" :
            return "Janvier"
        case "02" :
            return "Février"
        case "03" :
            return "Mars"
        case "04" :
            return "Avril"
        case "05" :
            return "Mai"
        case "06" :
            return "Juin"
        case "07" :
            return "Juillet"
        case "08" :
            return "Août"
        case "09" :
            return "Septembre"
        case "10" :
            return "Octobre"
        case "11" :
            return "Novembre"
        case "12" :
            return "Décembre"
        default :
            return num
    }
}

function getMonthEnglish(num){
    switch(num){
        case "01" :
            return "January"
        case "02" :
            return "February"
        case "03" :
            return "March"
        case "04" :
            return "April"
        case "05" :
            return "May"
        case "06" :
            return "June"
        case "07" :
            return "July"
        case "08" :
            return "August"
        case "09" :
            return "September"
        case "10" :
            return "October"
        case "11" :
            return "November"
        case "12" :
            return "December"
        default :
            return num
    }
}

function getDay(num){
    switch(num){
        case 0 :
            return "Dimanche"
        case 1 :
            return "Lundi"
        case 2 :
            return "Mardi"
        case 3 :
            return "Mercredi"
        case 4 :
            return "Jeudi"
        case 5 :
            return "Vendredi"
        case 6 :
            return "Samedi"
        default :
            return num
    }
}