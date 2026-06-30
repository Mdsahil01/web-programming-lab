/*
=========================================================
Experiment 8: Loops in JavaScript
=========================================================

Aim:
To understand iteration statements in JavaScript.

Objectives:
• Learn the for loop.
• Learn the while loop.
• Learn the do-while loop.
• Solve problems using looping statements.

Theory:
Loops execute a block of code repeatedly until a specified
condition becomes false. JavaScript provides for, while,
and do-while loops to perform repetitive tasks efficiently.

=========================================================
*/

// Print 1 to 10 using for loop
console.log("Numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Multiplication Table

console.log("\nTable of 5");

let table = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${table} x ${i} = ${table * i}`);
}

// Sum of first 10 numbers

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("\nSum =", sum);

// Factorial

let factorial = 1;

for (let i = 1; i <= 5; i++) {
    factorial *= i;
}

console.log("Factorial =", factorial);

// Fibonacci

console.log("\nFibonacci Series");

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= 10; i++) {

    let next = first + second;

    console.log(next);

    first = second;
    second = next;

}
