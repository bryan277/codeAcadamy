const logSkyColor = () => {
  const dusk = false;
  let color = 'blue';
  if (dusk) {
    let color = 'pink';
    console.log(color, '1');
  } else {
    let color = 'red';
    console.log(color, '2');
  }
  console.log(color, '3');

};
// red 2
// blue 3
logSkyColor();
// console.log(color);
//ReferenceError

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
}
};

logVisibleLightWaves();
//Northern Lights
