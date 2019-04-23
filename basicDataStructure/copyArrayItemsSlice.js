function forecast(arr) {
  //change code below this line
  var warmWeather = arr.slice(2,4);
  console.log(warmWeather);
  //[ 'warm', 'sunny']
  return warmWeather;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//[ 'warm', 'sunny' ]
