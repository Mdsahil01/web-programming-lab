/*
=========================================================
Experiment 10: DOM Manipulation
=========================================================

Aim:
To manipulate HTML elements using JavaScript.

Objectives:
• Use getElementById().
• Use getElementsByClassName().
• Use querySelector().
• Modify webpage content using innerHTML and textContent.

Theory:
The Document Object Model (DOM) represents an HTML document
as a tree of objects. JavaScript can access and modify HTML
elements dynamically using DOM methods and properties,
making web pages interactive.

=========================================================
*/

// Change Heading
document.getElementById("heading").innerHTML = "Welcome to JavaScript";

// Change Paragraph
document.getElementById("paragraph").textContent =
"DOM Manipulation Successful";

// Display Current Date
document.getElementById("date").innerHTML = new Date();

// Display Username
let username = "Sahil";
document.getElementById("user").innerHTML =
"Welcome " + username;

// querySelector()
document.querySelector(".title").style.color = "blue";

// getElementsByClassName()
let items = document.getElementsByClassName("demo");
items[0].innerHTML = "First Item Changed";
