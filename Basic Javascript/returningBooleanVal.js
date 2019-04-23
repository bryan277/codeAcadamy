function isLess(a,b) {
  if (a < b){
    return console.log(true);
  } else {
    return console.log(false);
  }
}

isLess(10, 15);

//above is same us bottom

function isLess(a,b) {
  return (a < b);
}
