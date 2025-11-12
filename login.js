import {validate, isAdmin} from "./Data/logins.js";
import { getIndexForName } from "./Data/players.js";
import { getPresentFor } from "./utils/localStorage.js";

document.querySelector('.js-login-button').addEventListener('click', () =>{
  logIn()
});

document.querySelector('.js-admin-button').addEventListener('click', () =>{
  window.location.replace("./SecretSanta.html");
});

export function logIn(){

  // get the values entered. 

  let loginName = document.querySelector(".js-login-input-name").value;
  let loginPhrase = document.querySelector(".js-login-input-phrase").value;

  loginPhrase = loginPhrase.toLowerCase();

  // check against login data

  let validated = validate(loginName, loginPhrase);
  console.log(validated);

  // direct to user specific info. 

  if (validated){
    let recipient = getPresentDetails();
    document.querySelector(".js-result-text").innerHTML = `You are the secret santa for .........${recipient}`;
    document.querySelector(".js-login-button").classList.add("hide-button");
    if (isAdmin(loginName)){
      console.log("is admin");
      document.querySelector(".js-admin-button").classList.add("show-admin-button");
    } else {
      console.log("Not admin");
    }
    
  } else if (!validated){
    document.querySelector(".js-result-text").innerHTML = "Incorrect login details entered - please try again.";
  } else {
    console.log("Unexpected error")
  }
}

function getPresentDetails(){
  // return recipient
  let loginName = document.querySelector(".js-login-input-name").value;
  let index = getIndexForName(loginName);
  return getPresentFor(index);

} 


