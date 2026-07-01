/*
=========================================================
Experiment 8
Program 4: Factorial of a Number
=========================================================

Aim:
To calculate the factorial of a given number.

Objectives:
• Learn multiplication using loops.
• Calculate factorial values.

Theory:
The factorial of a number is the product of all positive
integers from 1 to that number.

=========================================================
*/

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("Factorial =", factorial);

/*
Expected Output

Factorial = 120

Result:
Thus, the factorial of the given number was calculated successfully.
*/
