let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){
    return console.log("This dog has " + this.numLegs + " legs.");//same answer if you put dog instead of this
  }

};

dog.sayLegs();
