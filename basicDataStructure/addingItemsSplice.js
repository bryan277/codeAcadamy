function colorChange(arr, index, newColor)
{
  arr.splice(index, 1, newColor);
  return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#33237');


function htmlColorNames(arr) {
  // change code below this line
  let newColor1 = 'DarkSalmon';
  let newColor2 = 'BlanchedAlmond';
  arr.splice(0,1,newColor1);
  arr.splice(1,1,newColor2);
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
// [ 'DarkSalmon', 'BlanchAlmond', 'PaleTurqoise', 'FireBrick' ]
