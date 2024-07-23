/*Lab Exercise 5

• For understanding more about arrays, try creating an array that
has 5 elements.
• Replace the value of the element at position 1 and 4.
• Add a new element to the beginning of the array
• Remove the element at the end of the array
• Print the array to the console.
Extension: attach the VS Code debugger to your script and add a
breakpoint on the first line. Step through your code line by line to
watch how it executes.*/


let favouriteFoods = ["Icecream", "Jelly", "Waffles", "Fried Chicken", "Rice"];

function replaceEntry (array, index, newEntry)
{
    if (array[index] != null) array[index]=newEntry;
}

function deleteFirstEntry (array)
{
    array.shift();
}

function deleteLastEntry (array)
{
    array.pop();
}

function addEntryToTop (array, newEntry)
{
    array.unshift(newEntry);
}

function deleteEntry(array, indexToDelete)
{
    array.splice(indexToDelete, 1);
}

console.log(favouriteFoods);

replaceEntry(favouriteFoods, 0, "Milkshake");
replaceEntry(favouriteFoods, 3, "Mantou");

console.log(favouriteFoods);

addEntryToTop(favouriteFoods, "Tofufa");

console.log(favouriteFoods);

deleteFirstEntry(favouriteFoods);

console.log(favouriteFoods);

deleteLastEntry(favouriteFoods);

console.log(favouriteFoods);

deleteEntry(favouriteFoods,0);

console.log(favouriteFoods);
