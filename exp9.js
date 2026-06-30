/*
=========================================================
Experiment 9: Objects
=========================================================

Aim:
To understand JavaScript Objects.

Objectives:
• Create JavaScript objects.
• Access object properties.
• Use object methods.

Theory:
Objects are collections of related properties and methods.
They help organize and manage data efficiently by grouping
related information into a single unit.

=========================================================
*/

let student = {
    name: "Sahil",
    usn: "1RT24CS001",
    branch: "CSE",

    display() {
        console.log("Student Name:", this.name);
        console.log("USN:", this.usn);
        console.log("Branch:", this.branch);
    }
};

let employee = {
    name: "Rahul",
    salary: 50000
};

let car = {
    brand: "Toyota",
    model: "Innova"
};

let book = {
    title: "JavaScript Basics",
    author: "John"
};

student.display();

console.log("Employee:", employee);
console.log("Car:", car);
console.log("Book:", book);
