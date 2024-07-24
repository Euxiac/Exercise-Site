/*Lab Exercise 7

Using the functions you created for Exercise 4: 
• Write a specification comment for each function -
• Write at least 3 unit tests for each function -
• In the unit tests, try to include both expected and non-typical -
test values (such as zero or negative numbers)*/ -

/*Unit test for ADD FUNCTION
1. Check if value is correct
2. test where one value is a decimal
3. test where one value is a string
*/

const funcs = require("./Exercise_7_script");

const a = 4;
const b = 2;
const name = "Steven";
const testDecimal = 0.6;
const testString = "one";

//ADD FUNCTION TEST ===========================================
function addTestValue (initVal,modVal, expectation)
{
    if (funcs.add(initVal,modVal) === expectation) return true;
    else return false;
}

function addTestNegative (initVal,modVal)
{
    if (funcs.add(initVal,modVal) < 0) return true;
    else return false;
}

function addTestString (initVal, modVal)
{
    return Number.isInteger(funcs.add(initVal,modVal));
}

//SUBTRACT FUNCTION TESTS =======================================
function subTestValue (initVal,modVal, expectation)
{
    if (funcs.subtract(initVal,modVal) === expectation) return true;
    else return false;
}

function subTestNegative (initVal,modVal)
{
    if (funcs.subtract(initVal,modVal) < 0) return true;
    else return false;
}

function subTestString (initVal, modVal)
{
    return Number.isInteger(funcs.subtract(initVal,modVal));
}

//DIVIDE FUNCTION TESTS =======================================
function divTestValue (initVal,modVal, expectation)
{
    if (funcs.divide(initVal,modVal) === expectation) return true;
    else return false;
}

function divTestPositive (initVal,modVal)
{
    if (funcs.divide(initVal,modVal) > 0) return true;
    else return false;
}

function divTestString (initVal, modVal)
{
    return Number.isInteger(funcs.divide(initVal,modVal));
}

//MULTIPLY FUNCTION TESTS =======================================
function mulTestValue (initVal,modVal, expectation)
{
    if (funcs.multiply(initVal,modVal) === expectation) return true;
    else return false;
}

function mulTestPositive (initVal,modVal)
{
    if (funcs.multiply(initVal,modVal) > 0) return true;
    else return false;
}

function mulTestString (initVal, modVal)
{
    return Number.isInteger(funcs.multiply(initVal,modVal));
}

console.info("=== Add function tests ===");
console.group();
console.log("predicted value is 6 | " + a + "+" + b + "="+ funcs.add(a,b) + " | test passed = " + addTestValue(a,b,6));
console.log("predicted value is a negative number | " + a + "+" + -5 + "="+ funcs.add(a,-5) + " | test passed = " + addTestNegative(a,-5));
console.log("predicted value is a number | " + a + "+" + testString + "="+ funcs.add(a,testString) + " | test passed = " + addTestString(a,testString));
console.groupEnd();

console.info("=== Subtract function tests ===");
console.group();
console.log("predicted value is 2 | " + a + "-" + b + "="+ funcs.subtract(a,b) + " | test passed = " + subTestValue(a,b,2));
console.log("predicted value is a negative number | " + a + "-" + 5 + "="+ funcs.subtract(a,5) + " | test passed = " + subTestNegative(a,5));
console.log("predicted value is a number | " + a + "-" + testString + "="+ funcs.subtract(a,testString) + " | test passed = " + subTestString(a,testString));
console.groupEnd();

console.info("=== Divide function tests ===");
console.group();
console.log("predicted value is 2 | " + a + "/" + b + "="+ funcs.divide(a,b) + " | test passed = " + divTestValue(a,b,2));
console.log("predicted value is a positive number | " + a + "/" + b + "="+ funcs.divide(a,b) + " | test passed = " + divTestPositive(a,b));
console.log("predicted value is a number | " + a + "/" + testString + "="+ funcs.divide(a,testString) + " | test passed = " + divTestString(a,testString));
console.groupEnd();

console.info("=== Multiply function tests ===");
console.group();
console.log("predicted value is 8 | " + a + "x" + b + "="+ funcs.multiply(a,b) + " | test passed = " + mulTestValue(a,b,8));
console.log("predicted value is a positive number | " + a + "x" + b + "="+ funcs.multiply(a,b) + " | test passed = " + mulTestPositive(a,b));
console.log("predicted value is a number | " + a + "x" + testString + "="+ funcs.multiply(a,testString) + " | test passed = " + mulTestString(a,testString));
console.groupEnd();
