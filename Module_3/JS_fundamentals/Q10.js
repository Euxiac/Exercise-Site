/*The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age >= 16 ? true : false; 
    }

    let person1 = new Person('James', 15);
    let person2 = new Person('Chris', 18);
    console.log(person1);
    console.log(person2);

class PersonClass {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age >= 16 ? true : false; 
    }}

    let person3 = new PersonClass('Danny', 23);
    console.log(person3);