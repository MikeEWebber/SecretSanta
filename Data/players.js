
const players = ['Mike', 'Heidi', 'Evie', 'Paul', 'Sarah', 'Connie', 'Steve', 'Kristen', 'Mabelle', 'Owen', 'Haydn','EvieW', 'Maria', 'Lily', 'Bee', 'Soph', 'Wiki', 'Ruby', 'Lucy'];



export function getIndexForName(name){
  let position = players.indexOf(name);
  return position;
}

export default players;
