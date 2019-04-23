let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  return ('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users) ? true : false;
  // change code above this line
}

console.log(isEveryoneHere(users));
// The users object only contains the keys Alan, Jeff, Sarah, and Ryan
// The function isEveryoneHere returns true if Alan, Jeff, Sarah, and Ryan are properties on the users object
// The function isEveryoneHere returns false if Alan, Jeff, Sarah, and Ryan are not properties on the users object
