/*
=========================================================
Experiment 9
Program 1: Student Object
=========================================================

Aim:
To create and access a Student object in JavaScript.

Objectives:
• Learn object creation.
• Access object properties.
• Use object methods.

Theory:
A JavaScript object is a collection of related properties
and methods. Objects help organize data efficiently.

=========================================================
*/

let student = {
    name: "Sahil",
    usn: "1RT24CS001",
    branch: "CSE",
    semester: 2,

    display() {
        console.log("Name:", this.name);
        console.log("USN:", this.usn);
        console.log("Branch:", this.branch);
        console.log("Semester:", this.semester);
    }
};

student.display();

/*
Expected Output

Name: Sahil
USN: 1RT24CS001
Branch: CSE
Semester: 2

Result:
Thus, a Student object was created and its properties were displayed successfully.
*/
