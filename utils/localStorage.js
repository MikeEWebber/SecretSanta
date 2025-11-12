

export function saveToStorage(presents){
  console.log("in saveToStorage");
  console.log(presents);
  localStorage.setItem('presentList', JSON.stringify(presents));
}

export function loadFromStorage(){
  let presents = JSON.parse(localStorage.getItem('presentList'));
  console.log("in saveToStorage");
  console.log(presents);
  if (!presents) {
    presents = [];
  }

  return presents;
};

export function getPresentFor(index){
  let presents = JSON.parse(localStorage.getItem('presentList'));
  return presents[index];
}
