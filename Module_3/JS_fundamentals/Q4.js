//Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2, b = 50;

let result = `${a} + ${b} is `;

if (a + b < 10) {
result += 'less than 10'; //result = result + 'less than 10'
} else {
result += 'greater than 10'; // += is shorthand to this equals this plus this
}

console.log(result);
result = `${a} + ${b} is `;


function check(){
    return a + b <10 ? result += 'less than 10' : result += 'greater than 10';
}

console.log(check());