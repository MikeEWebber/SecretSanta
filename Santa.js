import players from './Data/players.js';
import { loadFromStorage, saveToStorage } from './utils/localStorage.js';


let santas = [];
let playerList = [];
let presents =[];
let myRnd = 0;
let playerRemoved = false;
const totalPlayers = players.length;

// if there is a list load it.
presents = loadFromStorage()
if (presents.length > 0){
  santas = [...players];
  displayBody();
}
console.log(presents);

document.querySelector('.js-return-button').addEventListener('click', () =>{
  window.location.replace("./index.html");
});

function initialiseArrays(){
  santas = [...players];
  playerList = [...players];
  presents =[];
}

document.querySelector('.js-generate-list-button').addEventListener('click', () =>{
  
  
  getList();
  displayBody();
});

function displayBody(){
  const pageBody = document.querySelector(".js-body-container");
  let bodyString = ""
  for(let i=0; i < totalPlayers; i++){
    bodyString = bodyString + 
      `
      <div class="body-line">
      <label class="body-label">${santas[i]}</label>
      <label class="body-label">${presents[i]}</label>
      </div>
    `;
  }
  // console.log(bodyString);
  pageBody.innerHTML = bodyString;
    
}

function getList(){

  initialiseArrays();

  santas.forEach(element => {
      // Are you in the list? if so remove yourself
      playerRemoved = removeYourself(element);
      let noOfPlayers = playerList.length;
      if (noOfPlayers === 0 ){
        console.log("oops cant pick yourself");
      }
      myRnd = getRnd(noOfPlayers);
      presents.push(getPlayerName(myRnd));
      // Remove from list 
      removePlayer(myRnd);
      if (playerRemoved){
        addPlayer(element);
      }
    }
  )

  // Save results
  saveToStorage(presents);

}



function getRnd(maxSize){
  return Math.floor(Math.random() * maxSize);
}

function removeYourself(santaName){
  if (playerList.includes(santaName)){
    let position = playerList.indexOf(santaName);
    playerList.splice(position, 1);
    return playerRemoved = true;
  } 
  return playerRemoved = false;
}

function getPlayerName(index){
  return playerList[index];
}

function removePlayer(index){
  playerList.splice(index, 1);
}

function addPlayer(name){
  playerList.push(name);
}




