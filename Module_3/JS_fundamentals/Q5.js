//Rewrite the following function using: a) function expression syntax, and b) arrow functionsyntax. Test each version to make sure they work the same.

function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

console.log(getGreeting('Ivan'));

let functionExpressionSyntax = function(name) {return 'Hello ' + name + '!'};
console.log(functionExpressionSyntax('Ivan'));


let functionArrowfunction = (name) => 'Hello ' + name + '!';
console.log(functionArrowfunction('Ivan'));
