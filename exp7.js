/*
=========================================================
Experiment 7: Decision Making using if-else
=========================================================

Aim:
To implement conditional statements in JavaScript.

Objectives:
• Understand if statements.
• Learn if-else statements.
• Use else-if ladder.
• Implement nested if statements.

Theory:
Conditional statements allow a program to make decisions
based on given conditions. JavaScript provides if,
if-else, else-if, and nested if statements to execute
different blocks of code depending on the condition.

=========================================================
*/

let num1 = 20;
let num2 = 35;
let num3 = 15;

// Largest of two numbers
if (num1 > num2) {
    console.log("Largest of Two:", num1);
} else {
    console.log("Largest of Two:", num2);
}

// Largest of three numbers
if (num1 >= num2 && num1 >= num3) {
    console.log("Largest of Three:", num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Largest of Three:", num2);
} else {
    console.log("Largest of Three:", num3);
}

// Even or Odd
if (num1 % 2 === 0) {
    console.log(num1 + " is Even");
} else {
    console.log(num1 + " is Odd");
}

// Positive or Negative
if (num3 > 0) {
    console.log(num3 + " is Positive");
} else if (num3 < 0) {
    console.log(num3 + " is Negative");
} else {
    console.log("Number is Zero");
}

// Nested if
let age = 19;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Eligible to Vote");
    } else {
        console.log("ID Required");
    }
} else {
    console.log("Not Eligible");
}