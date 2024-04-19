// import fs from 'node:fs';

"use strict"

function jsonValueKey(jsonObj){
    document.getElementById("body").innerHTML = ""

    for(var i in jsonObj){
        let id = ""
        let f_name = ""
        let l_name = ""
        let mail = ""

        var key = i;
        var val = jsonObj[i];
        for(var j in val){
            var sub_key = j;
            var sub_val = val[j];
            if (sub_key == "id"){
                id = sub_val
            }
            else if (sub_key == "first-name"){
                f_name = sub_val
            }
            else if (sub_key == "last-name"){
                l_name = sub_val
            }
            else if (sub_key == "email"){
                mail = sub_val
            }
        }
        putInHtml(id, f_name, l_name, mail)
    }
}

async function putInHtml(id, f_name, l_name, mail){
    let tr = document.createElement("tr")
    let th_id = document.createElement("th")
    th_id.innerText = id
    let td_fn = document.createElement("td")
    td_fn.innerText = f_name
    let td_ln = document.createElement("td")
    td_ln.innerText = l_name
    let td_mail = document.createElement("td")
    td_mail.innerText = mail

    tr.appendChild(th_id)
    tr.appendChild(td_fn)
    tr.appendChild(td_ln)
    tr.appendChild(td_mail)

    let body = document.getElementById("body")

    body.appendChild(tr);
}

function table(){
    fetch('utilisateur.json')
    .then((response) => response.json())
    .then((json) => jsonValueKey(json));
}

function add_user(){
    let id_input = document.getElementById("id_input")
    let id_filter = id_input.value
    let fn_input = document.getElementById("fn_input")
    let fn_filter = fn_input.value
    let ln_input = document.getElementById("ln_input")
    let ln_filter = ln_input.value
    let mail_input = document.getElementById("mail_input")
    let mail_filter = mail_input.value

    //write data into file
    // var fs = require('fs')
    // let jsonData = JSON.parse(fs.readFileSync('data.json'))
    // alert(jsonData)

    const data = fs.readFileSync('utilisateur.json');
    const jsonData = JSON.parse(data);
    jsonData.push({
        "id": id_filter,
        "first-name": fn_filter,
        "last-name": ln_filter,
        "mail": mail_filter
    });
    const jsonString = JSON.stringify(jsonData);
    fs.writeFileSync('utilisateur.json', jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });

    table()
}

table()