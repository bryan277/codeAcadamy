function orderMyLogic(val) {
  if(val < 5) {
    return console.log("Less than 5");
  } else if (val < 10){
    return console.log("Less than 10");
  } else {
    return console.log("Greater than or equal to 10");
  }
}

orderMyLogic(4);
//Less than 5
