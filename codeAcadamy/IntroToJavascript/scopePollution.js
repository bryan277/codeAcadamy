const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(stars);
console.log(callMyNightSky());
console.log(stars);
// North Star
// Night Sky: The Moon, Sirius, The Milky Way
// Sirius
