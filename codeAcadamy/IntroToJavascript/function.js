function mulityplyByNineFifth(number){
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return mulityplyByNineFifth(celsius + 32);
};

console.log(getFahrenheit(15));

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater('Wednesday'));

let ninefith = (num) => num * (9/5);
let fahrenheit = (num) => ninefith(num + 32);

console.log(fahrenheit(15));
