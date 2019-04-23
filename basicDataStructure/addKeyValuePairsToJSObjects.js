let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};

let userData = FCC_User.followers;
console.log(userData);
//572
let userData1 = FCC_User['points'];
console.log(userData1);
//1741


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.bananas = 13;
foods.grapes = 35;
foods['strawberries'] = 27;
