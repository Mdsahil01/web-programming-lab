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