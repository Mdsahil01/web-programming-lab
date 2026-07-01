/*
=========================================================
Experiment 8
Program 2: Multiplication Table
=========================================================

Aim:
To generate the multiplication table of a given number.

Objectives:
• Learn looping statements.
• Perform repeated multiplication.

Theory:
A loop can repeatedly multiply a number by consecutive
integers to generate its multiplication table.

=========================================================
*/

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

/*
Expected Output

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

Result:
Thus, the multiplication table was generated successfully.
*/
