

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
  name: "Hayden",
  phrase: "surfer",
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

