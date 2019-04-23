let thisArray = ['sage', 'rosemar', 'pareley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
console.log(thatArray);
// [ 'basil',
//   'cilantro',
//   'sage',
//   'rosemar',
//   'pareley',
//   'thyme',
//   'coriander' ]



function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; //change this line
    return sentence;
}

console.log(spreadOut());
// spreadOut should return ["learning", "to", "code", "is", "fun"]
// The spreadOut function should utilize spread syntax
