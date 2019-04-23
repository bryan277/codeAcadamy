let obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
}
Object.freeze(obj):
obj.review = 'bad';
//error
console.log(obj);
