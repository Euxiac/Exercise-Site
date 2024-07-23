/*
Lab Exercise 4

Use the learnings from this lesson to design some very simple
functions. Call them with different values.

1. Create 4 functions for the 4 main mathematical operations
(-,+,/,*). Return the calculated value and then output it to the
screen.

2. Create a function that takes the name of a person as an
argument, and prints out “Hello <name>” to the console.
Hint: search online on how to concatenate two strings.
*/

const a = 4;
const b = 2;
const name = "Steven";

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function hello(name) {
    console.log("Hello " + name);
  }

console.log("test vars are a=" + a + " abd b=" + b + ". test name is " + name);
console.log(a + "-" + b + "="+ subtract(a,b));
console.log(a + "-" + b + "="+ add(a,b));
console.log(a + "-" + b + "="+ divide(a,b));
console.log(a + "-" + b + "="+ multiply(a,b));
hello(name);

module.exports={
  subtract, add, divide, multiply, hello
}