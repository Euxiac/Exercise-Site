const employees = new WeakMap();
const o1 = {id: 1};
let o2 = {id: 2};
const o3 = {id: 3};

employees.set(o1, "Value");
employees.set(o2, "Jake")
employees.set(o3, "Shree")
console.log(employees.get(o1));
employees.delete(o1);
console.log(employees.get(o1));
console.log(`does employess include? ${employees.has(o2)}`);
console.log(employees.get(o2));
o2 = null;
console.log(employees.get(o2));
console.log(`does employess include? ${employees.has(o2)}`);

let testSet = new Set();
testSet.add("apple");
testSet.add("banana");
testSet.add("orange");
testSet.add("apple");
console.log(testSet);
console.log(testSet.has("apple"));
testSet.delete("apple");
console.log(testSet);
console.log(testSet.has("apple"));
testSet.forEach(element => {
    console.log(element);
});