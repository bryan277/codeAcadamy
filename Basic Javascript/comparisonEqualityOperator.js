function testEqual(val) {
  if (val == 12) {
    return console.log("Equal");
  }
  return "Not Equal";
}

testEqual(12);
//Equal
testEqual('12');
//Equal

function testEqual1(val) {
  if (val === 12) {
    return console.log("Equal");
  }
  return console.log('Not Equal');
}

testEqual1(12);
testEqual1('12');
//Equal
//Not Equal

// 1 != 2 true
// 1 != "1" false
// 1 != '1' false
// 1 != true true
// 0 != false false

function testNotEqual(val) {
  if (val != 99) {
    return console.log("Not Equal");
  }
  return console.log("Equal");
}

testNotEqual(99);
testNotEqual('99');
testNotEqual(1);
// Equal
// Equal
// Not Equal

// 3 !== 3  false
// 3 !== '3' true
// 4 !== 3   true

function testStrictNotEqual(val) {
  if (val !== 17) {
    return console.log('Not Equal')
  }
  return console.log('Equal')
}

testStrictNotEqual(10);
testStrictNotEqual('10');
testStrictNotEqual(17);
testStrictNotEqual('17');

// Not Equal
// Not Equal
// Equal
// Not Equal
