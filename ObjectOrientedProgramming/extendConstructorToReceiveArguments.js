function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Paul", "black");

console.log(terrier.name);
//Paul
console.log(terrier.color);
//black
console.log(terrier.numLegs);
//4
