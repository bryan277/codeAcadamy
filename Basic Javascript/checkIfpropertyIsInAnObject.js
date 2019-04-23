var myObject = {
  name: 'JS Nuggest'
};

if (myObject.name) {
  console.log('it is in!')
}

console.log(myObject.hasOwnProperty('name'));
console.log('name' in myObject);

// it is in!
// true
// true
