/*You have an array of employee objects, each containing a name, department, and an array of performance scores for the year. Your tasks are as follows:

1.Map: Create a new array containing the average performance score of each employee.
2.Filter: Filter out the employees whose average performance score is less than 70.
3.Reduce: Calculate the overall average performance score of the remaining employees.
4. forEach: Print the name, department, and average performance score of each remaining employee.
5. Map Data Structure: Create a Map where the key is the employee's name and the value is their average performance score.
*/
const employees = [
  { name: "Alice", department: "Sales", scores: [75.5, 85.5, 95.5] },
  { name: "Bob", department: "HR", scores: [55, 65, 70] },
  { name: "Charlie", department: "Development", scores: [80, 80, 80] },
  { name: "Dave", department: "Marketing", scores: [60, 70, 65] },
  { name: "Eve", department: "Sales", scores: [90, 95, 100] },
];
//!!!!! 1.Map: Create a new array containing the average performance score of each employee.
/*
let addAvgPerformance = (arr) => {
  arr.map((student) => {
    let avgPerformance = 0;
    let studentScoreArray = student?.scores ? student?.scores : [];
    studentScoreArray.forEach((score) => {
      avgPerformance += score;
    });
    student.averagePerformance = (
      avgPerformance / student.scores.length
    ).toFixed(2);
  });
  return arr;
};
*/
let addAvgPerformReduce = (arr) => {
  arr.map((student) => {
    let studentScoreArray = student?.scores ? student?.scores : [];
    let avgPerformance = studentScoreArray.reduce(
      (previousValue, currentValue) => {
        return (previousValue += currentValue);
      }
    );
    student.averagePerformance = (
      avgPerformance / studentScoreArray.length
    ).toFixed(2);
  });
  return arr;
};
//console.log(addAvgPerformance(employees));
//console.log("_------------");
//console.log(addAvgPerformReduce(employees));
addAvgPerformReduce(employees);
//!!!! 2.Filter: Filter out the employees whose average performance score is less than 70.
let filteredEmployees = [];
for (let i= 0; i<employees.length; i++) {
    if (employees[i].averagePerformance > 70 && employees[i].name) {
        filteredEmployees = [...filteredEmployees, employees[i]];
    }
}
console.log(filteredEmployees);


//!!!!! 3.Reduce: Calculate the overall average performance score of the remaining employees.
// reduce, calculate overall performance average for employees averaging over 70 points
//step 1 create function that takes scores[] and returns averageScore[]
//step 2 filter averageScore[] into over70[]
//step 3 create a function that takes over70[] and returns an average of scores in that array

function getPerformanceScores(array){
  let arr = [];
  array.forEach(element => {
    arr.push(element.averagePerformance);
  });
  return arr;
}

let above70 = getPerformanceScores(filteredEmployees);
console.log(`scores >= 70 are ${above70}`);
filteredEmployees.forEach(element => {
  above70.push(element.averagePerformance);
});

//console.log(above70);

/*
function sum(acc, element){
  return Number(acc) + Number(element);
}

function getAverage(array){
return array.reduce(sum ,0) / array.length;
}
*/
let averagePerformanceOver70 = above70.reduce((acc, element) => {return Number(acc) + Number(element)}, 0) / above70.length;
console.log(`Average performance score for employees scoring 70 or over is ${averagePerformanceOver70}`);

//JASON SOLUTION
const overallAverageScore = filteredEmployees.reduce((acc, employee, _, array) => acc + employee.averageScore / array.length, 0);
//reduce (accumulator, employee, index, array)
console.log(overallAverageScore);