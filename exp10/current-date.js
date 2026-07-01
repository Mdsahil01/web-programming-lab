/*
=========================================================
Experiment 10
Program 3: Display Current Date
=========================================================

Aim:
To display the current date and time.

Objectives:
• Use the Date object.
• Display the current date using DOM.

Theory:
JavaScript provides the Date object to retrieve the
current system date and time.

=========================================================
*/

let today = new Date();

document.getElementById("date").innerHTML = today;

/*
Expected Output

Mon Jul 01 2026 ...

(Result depends on the current date and time.)

Result:
Thus, the current date was displayed successfully.
*/
