function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

let ownProps = [];
let ownProps1 = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps1.push(property);
  }
}
console.log(ownProps1);
//['name', 'numLegs']
console.log(ownProps);
//[ 'name', 'numLegs' ]
