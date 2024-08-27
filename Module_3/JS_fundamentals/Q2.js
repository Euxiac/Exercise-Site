//Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four

let lessThan1 = three < four
let lessThan2 = thirty < four

//first guess here is that addition will return 34
console.log(addition);

addition = Number(three)+Number(four); //fix by converting values to numbers

console.log(addition);