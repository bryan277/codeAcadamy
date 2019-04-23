//One-dimensional array
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
//7

//Multi-dimensional Array
let complexArray = [
[
{
one: 1,
two: 2
},
{
three: 3,
four: 4
}
],
[
{
a: "a",
b: "b"
},
{
c: "c",
d: 'd'
}
]
];
console.log(complexArray.length);
//2


//Accessing array contents using bracket notation
let ourArray = ['a', 'b', 'c'];
let ourVariable = ourArray[0];
console.log(ourVariable);
//a

ourArray[1] = 'not b anymore';
console.log(ourArray);
//[ 'a', 'not b anymore', 'c' ]

let myArray = ['a', 'b', 'c', 'd'];
myArray[1] = 'is no longer set b';
console.log(myArray);
[ 'a', 'is no longer set b', 'c', 'd' ]
