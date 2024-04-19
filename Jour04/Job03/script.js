"use strict"

let types_dict = {
    "Normal": "989A62",
    "Fire": "EC6B1A",
    "Water": "5476F0",
    "Grass": "65C338",
    "Electric": "F7CA0B",
    "Ice": "86D0D0",
    "Fighting": "B31B1A",
    "Poison": "8E2391",
    "Ground": "D9B64F",
    "Flying": "9774EF",
    "Psychic": "F63A74",
    "Bug": "98AF00",
    "Rock": "AA9222",
    "Ghost": "5C4088",
    "Dragon": "5B00FB",
    "Dark": "5D4637",
    "Steel": "A9A8C6",
    "Fairy": "FF80DB"
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isInt(n){
    if (isNumeric(n)){
        return n%1 == 0
    }
}

async function getPokemons(jsonObj){
    //filter conditions
    let id_input = document.getElementById("id_input")
    let id_filter = id_input.value
    let name_input = document.getElementById("name_input")
    let name_filter = name_input.value
    let type_select = document.querySelector("select")
    let type_filter = type_select.options[type_select.selectedIndex].value;
    
    setup()

    for(var i in jsonObj){
        //for html later
        let id = ""
        let name = ""
        let types = ""
        let hp = ""
        let atk = ""
        let def = ""
        let spatk = ""
        let spdef = ""
        let spd = ""

        //collect raw i-th json pokemon
        var key = i;
        var val = jsonObj[i];
        for(var j in val){
            //collect id, name json, type and stats json
            var sub_key = j;
            var sub_val = val[j];
            if (sub_key == "id"){
                id = sub_val
            }
            else if (sub_key == "type"){
                types = sub_val
            }
            else{
                for(var k in sub_val){
                    //collect name and each stat
                    var min_key = k
                    var min_val = sub_val[k]
                    if (min_key == "english"){
                        name = min_val
                    }
                    else if (min_key == "HP"){
                        hp = min_val
                    }
                    else if (min_key == "Attack"){
                        atk = min_val
                    }
                    else if (min_key == "Defense"){
                        def = min_val
                    }
                    else if (min_key == "Sp. Attack"){
                        spatk = min_val
                    }
                    else if (min_key == "Sp. Defense"){
                        spdef = min_val
                    }
                    else if (min_key == "Speed"){
                        spd = min_val
                    }
                }
            }
        }

        let print = true

        if(isInt(id_filter)){
            if(id_filter != id){
                print = false
            }
        }

        if(name_filter != ""){
            if(!name.toLowerCase().includes(name_filter.toLowerCase())){
                print = false
            }
        }

        let type = types + ""
        let type1 = type.split(',')[0]
        let type2 = type.split(',')[1]

        if(type_filter + "" !== "All"){
            if(type_filter + "" !== type1 && type_filter + "" !== type2){
                print = false
            }
        }

        if(print){
            await putInHtml(id, name, types, hp, atk, def, spatk, spdef, spd)
        }
    }
}

function setup(){
    let id_text = document.getElementById("id_text")
    let id_input = document.getElementById("id_input")
    let br = document.createElement("br")
    let name_text = document.getElementById("name_text")
    let name_input = document.getElementById("name_input")
    let select = document.getElementById("select")
    let button = document.getElementById("button")

    document.body.innerHTML = ""

    document.body.appendChild(id_text)
    document.body.appendChild(id_input)
    document.body.appendChild(br)
    document.body.appendChild(name_text)
    document.body.appendChild(name_input)
    document.body.appendChild(select)
    document.body.appendChild(button)
}

function getTypeColor(key){
    for(var type in types_dict){
        if(type = key){
            return types_dict[type]
        }
    }
}

async function putInHtml(id, name, types, hp, atk, def, spatk, spdef, spd){
    //pokemon name and id
    let h1 = document.createElement("h1")
    let newContent = document.createTextNode("#" + id + " : " + name);
    h1.appendChild(newContent)

    //types
    let type1 = document.createElement("button")
    let type2 = null
    
    type2 = document.createElement("button")
    types = types + ""
    type1.style.backgroundColor = "#" + await getTypeColor(types.split(',')[0])
    type2.style.backgroundColor = "#" + await getTypeColor(types.split(',')[1])
    type1.innerText = types.split(',')[0]
    type2.innerText = types.split(',')[1]
    type1.id = "type1"
    type2.id = "type2"

    //stats
    let hp_p = document.createElement("p")
    hp_p.innerText = "HP : " + hp
    let atk_p = document.createElement("p")
    atk_p.innerText = "Attack : " + atk
    let def_p = document.createElement("p")
    def_p.innerText = "Defense : " + def
    let spatk_p = document.createElement("p")
    spatk_p.innerText = "Sp. Attack : " + spatk
    let spdef_p = document.createElement("p")
    spdef_p.innerText = "Sp. Defense : " + spdef
    let spd_p = document.createElement("p")
    spd_p.innerText = "Speed : " + spd

    //insertion
    document.body.appendChild(h1);
    if (types.split(',')[1] == undefined){
        document.body.appendChild(type1);
    }
    else{
        document.body.appendChild(type1);
        document.body.appendChild(type2);
    }
    document.body.appendChild(hp_p);
    document.body.appendChild(atk_p);
    document.body.appendChild(def_p);
    document.body.appendChild(spatk_p);
    document.body.appendChild(spdef_p);
    document.body.appendChild(spd_p);
}

function sortByID(){
    fetch('./pokemon.json')
    .then((response) => response.json())
    .then(async (json) => await getPokemons(json));
}
