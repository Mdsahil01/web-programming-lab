/*
=========================================================
Experiment 6: JavaScript Variables and Data Types
=========================================================

Aim:
To understand variables and different data types in JavaScript.

Objectives:
• Learn let and const.
• Understand Number, String, Boolean, Undefined, and Null.
• Display values using console.log().
• Find the type of each variable using typeof.

Theory:
Variables are used to store data in JavaScript. The 'let'
keyword is used for variables whose values can change,
while 'const' is used for constant values. JavaScript
supports different data types, and the typeof operator
returns the type of a variable.

=========================================================
*/

// Variables and Data Types

let studentName = "Sahil";
const college = "Rai Technology University";

let age = 19;
let cgpa = 8.82;

let isStudent = true;

let branch;

let address = null;

// Display Values

console.log("Name:", studentName);
console.log("College:", college);
console.log("Age:", age);
console.log("CGPA:", cgpa);
console.log("Student:", isStudent);
console.log("Branch:", branch);
console.log("Address:", address);

console.log("");

// Display Data Types

console.log(typeof studentName);
console.log(typeof college);
console.log(typeof age);
console.log(typeof cgpa);
console.log(typeof isStudent);
console.log(typeof branch);
console.log(typeof address);
