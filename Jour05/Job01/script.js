const isCharUpperCase = (char) => String(char) == String(char).toUpperCase(); 
const isCharLowerCase = (char) => String(char) == String(char).toLowerCase();

function hasUpperCase(str) {
   return str.toLowerCase() != str;
}

function hasLowerCase(str) {
   return str.toUpperCase() != str;
}

function containsNumber(str) {
   return /\d/.test(str)
}

function isNumber(str) {
   if (typeof str != "string") return false // we only process strings!  
   return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
          !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function save(key, value){
   localStorage.setItem(key, value);   
}

function load(key){
   return localStorage.getItem(key);
}

function saveUser(){   
   let fn_input = document.getElementById("fn_inscription_input")
   let fn_value = fn_input.value
   let ln_input = document.getElementById("ln_inscription_input")
   let ln_value = ln_input.value 
   let mail_input = document.getElementById("mail_inscription_input")
   let mail_value = mail_input.value
   let password_input = document.getElementById("password_inscription_input")
   let password_value = password_input.value
   let pc_input = document.getElementById("pc_inscription_input")
   let pc_value = pc_input.value

   let obj = {
      "fn": fn_value,
      "ln": ln_value,
      "password": password_value,
      "pc": pc_value
   }

   if (!((mail_value + "").includes("@") && (mail_value + "").includes("."))){
      alert("mail not valid")
   }
   else if (!containsNumber(password_value)){
      alert("password has to have at least one number")
   }
   else if (!hasLowerCase(password_value)){
      alert("password has to have a lower case letter")
   }
   else if (!hasUpperCase(password_value)){
      alert("password has to have an upper case letter")
   }
   else if (password_value.length < 8){
      alert("password has to have at least 8 characters")
   }
   else if (!isNumber(pc_value)){
      alert("postal code should be a number")
   }
   else{
      save(mail_value, JSON.stringify(obj))
   }
}

function checkUser(){
   let mail_input = document.getElementById("mail_connexion_input")
   let mail_value = mail_input.value
   let password_input = document.getElementById("password_connexion_input")
   let password_value = password_input.value

   let user_data = load(mail_value)
   let user = JSON.parse(user_data)
   if (!((mail_value + "").includes("@") && (mail_value + "").includes("."))){
      alert("mail not valid")
   }
   else if (user.password === password_value){
      window.location.href = "successful.html";
   }
   else{
      alert("connexion failed")
   }
}

