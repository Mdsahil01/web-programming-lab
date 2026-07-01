/*
=========================================================
Experiment 8
Program 5: Fibonacci Series
=========================================================

Aim:
To generate the Fibonacci series.

Objectives:
• Learn looping statements.
• Generate a sequence of numbers.

Theory:
The Fibonacci series is a sequence where each number is
the sum of the previous two numbers.

=========================================================
*/

let n = 10;
let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= n; i++) {

    let next = first + second;

    console.log(next);

    first = second;
    second = next;
}

/*
Expected Output

0
1
1
2
3
5
8
13
21
34

Result:
Thus, the Fibonacci series was generated successfully.
*/
