/*Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//moreSports = teamSports;
moreSports = [...teamSports];
moreSports.push("Basketball")
moreSports.shift();
console.log(moreSports);

let dog2 = dog1;
dog2 = 'Spot';
console.log(dog2);

//let cat2 = cat1;
let cat2 = {...cat1};
cat2.name = 'Mittens';
console.log(cat2);

console.log(teamSports);
console.log(dog1);
console.log(cat1);

// teamSports and cat1 changed because in setting the variable, we passed a reference to the originals. 
//dog2 and dog1 are different because we redefined dog2 to 'Spot' instead of through the reference.
// added the spread operator