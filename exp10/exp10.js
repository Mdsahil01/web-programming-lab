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
