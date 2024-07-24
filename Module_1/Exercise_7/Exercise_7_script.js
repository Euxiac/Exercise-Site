/*Lab Exercise 7

Using the functions you created for Exercise 4:
• Write a specification comment for each function
• Write at least 3 unit tests for each function
• In the unit tests, try to include both expected and non-typical
test values (such as zero or negative numbers)*/

//Temporary values used to test the functions
/*const a = 4;
const b = 2;
const name = "Steven";*/

//take a and b, adds values of b to a (a being inital value, b being modifier)
function add(a, b) {
  return a + b;
}

//takes a and b, deducts value of b from a (a being inital value, b being modifier)
function subtract(a, b) {
  return a - b;
}

//take a and b, divide value of a by b (a being inital value, b being modifier)
function divide(a, b) {
  return a / b;
}

//take a and b, multiplies value of a by b (a being inital value, b being modifier)
function multiply(a, b) {
  return a * b;
}

//takes a name and prints 'Hello ' plus that name
function hello(name) {
    console.log("Hello " + name);
  }

/*
console.log("test vars are a=" + a + " abd b=" + b + ". test name is " + name);
console.log(a + "+" + b + "="+ add(a,b));
console.log(a + "-" + b + "="+ subtract(a,b));
console.log(a + "/" + b + "="+ divide(a,b));
console.log(a + "x" + b + "="+ multiply(a,b));
hello(name);
*/

module.exports={
  subtract, add, divide, multiply, hello
}