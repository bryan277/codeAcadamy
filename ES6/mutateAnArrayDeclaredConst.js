const s = [5,6,7];
// s = [1,2,3];
console.log(s);
//error
s[2] = 45;
console.log(s);
// [ 5, 6, 45 ]



const s = [5, 7, 2];

function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}

editInPlace();
