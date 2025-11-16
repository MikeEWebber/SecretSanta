
const players = ['Mike', 'Heidi', 'Evie', 'Paul', 'Sarah', 'Connie', 'Steve', 'Kristen', 'Mabelle', 'Owen', 'Haydn'];

export function getIndexForName(name){
  let position = players.indexOf(name);
  return position;
}

export default players;
