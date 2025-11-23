

const loginDetails = [{
  name: "Mike",
  phrase: "crab", 
  type: "admin"
},{
  name: "Heidi",
  phrase: "doggy",
  type: "user"
},{
  name: "Evie",
  phrase: "kitten",
  type: "user"
},{
  name: "Paul",
  phrase: "clown",
  type: "user"
},{
  name: "Sarah",
  phrase: "sausage",
  type: "user"
},{
  name: "Connie",
  phrase: "butterfly",
  type: "user"
},{
  name: "Steve",
  phrase: "whiskey",
  type: "user"
}, {
  name: "Kristen",
  phrase: "pumpkin",
  type: "user"
},{
  name: "Mabelle",
  phrase: "star",
  type: "user"
},{
  name: "Owen",
  phrase: "player",
  type: "user"
},{
  name: "Haydn",
  phrase: "surfer",
  type: "user"
},{
  name: "EvieW",
  phrase: "owl",
  type: "user"
},{
  name: "Maria",
  phrase: "mclovin",
  type: "user"
},{
  name: "Lily",
  phrase: "aibaby",
  type: "user"
},{
  name: "Bee",
  phrase: "twink",
  type: "user"
},{
  name: "Soph",
  phrase: "hughjackman",
  type: "user"
},{
  name: "Wiki",
  phrase: "loganpaul",
  type: "user"
},{
  name: "Ruby",
  phrase: "charliekirk",
  type: "user"
},{
  name: "Lucy",
  phrase: "metalica",
  type: "user"
}];

export function validate(loginName, loginPhrase){

  // find the user name and see if the phrase matches
  let check = loginDetails.find(obj => obj.name === loginName);
  console.log(check.phrase);
  if (check.phrase === loginPhrase){
    return true;
  }
  return false;
}

export function isAdmin(loginName){
  let check = loginDetails.find(obj => obj.name === loginName);
  if (check.type === "admin"){
    return true;
  }
  return false;
}

