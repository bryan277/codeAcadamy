let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
console.log(greetings);
//[ 'whats up?', 'hello' ]
greetings.shift();
console.log(greetings);
//[ 'hello' ]

// let popped = greeting.pop();
// returns 'hello'

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
//[ 'challenge', 'complete' ]
