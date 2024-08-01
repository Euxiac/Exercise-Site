//Filter the employees array to include only developers who earn more than $50,000.
// DATA ================================================================================================
const employees = [
  { name: "John", age: 30, position: "Manager", salary: 60000 },
  { name: "Jane", age: 25, position: "Developer", salary: 50000 },
  { name: "Mark", age: 35, position: "Designer", salary: 55000 },
  { name: "Sara", age: 28, position: "Developer", salary: 52000 },
];
//======================================================================================================

let filteredArray = [];
let sortedArray = [];
let threshold = 50000;

// UTILITIES ============================================================================================
function checkSalary(employee, threshold) {
  let salary = employee.salary;
  if (salary != null && Number.isInteger(salary) && salary >= threshold)
    return employee;
  //checks if salary exists and if the salary is larger than threshold
}

function addtoFilteredArray(employee) {
  if (employee != null) filteredArray.push(employee);
  //check if employee exists and pushes to filtered array
}

function clearFilteredArray() {
  filteredArray = [];
  //clears array
}


function sortNumber(pram) {
    return function (a, b) {
      return a[pram] - b[pram];
    };
  }
  
  function sortString(pram) {
      return function (a, b) {
        return a[pram].localeCompare(b[pram]);
      };
  }
// ======================================================================================================

function filterBySalary() {
  clearFilteredArray(); //clear array
  for (let i = 0; i < employees.length; i++)
    addtoFilteredArray(checkSalary(employees[i], threshold));
  //interate through employee array, pass through AddToFilteredArray through checkSalary
}

//make a function to sort the filter
function sortArray(parameter, array) {
    if (parameter === "salary"|| parameter ==="age")array.sort(sortNumber(parameter));
    else if (parameter === "name" || parameter === "position")array.sort(sortString(parameter));
    else console.log("!! failed to sort, invalid sorting parameter !!");
    return array;
}

filterBySalary();
sortArray("age", filteredArray);

console.log("employees who earn more than " + threshold + " : ");
console.log(filteredArray);