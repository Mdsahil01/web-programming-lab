/*
=========================================================
Experiment 7
Program 2: Largest of Three Numbers
=========================================================

Aim:
To find the largest of three numbers.

Objectives:
• Use else-if ladder.
• Compare three numbers.

Theory:
The else-if ladder checks multiple conditions one after
another until a true condition is found.

=========================================================
*/

let a = 20;
let b = 50;
let c = 35;

if (a >= b && a >= c) {
    console.log("Largest Number =", a);
}
else if (b >= a && b >= c) {
    console.log("Largest Number =", b);
}
else {
    console.log("Largest Number =", c);
}

/*
Expected Output

Largest Number = 50

Result:
Thus, the largest of three numbers was found successfully.
*/
