/*
=========================================================
Experiment 8
Program 3: Sum of First N Numbers
=========================================================

Aim:
To calculate the sum of the first N natural numbers.

Objectives:
• Use loops for arithmetic calculations.
• Find the cumulative sum.

Theory:
The sum of natural numbers can be calculated by adding
each number sequentially using a loop.

=========================================================
*/

let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum =", sum);

/*
Expected Output

Sum = 55

Result:
Thus, the sum of the first N natural numbers was calculated successfully.
*/
