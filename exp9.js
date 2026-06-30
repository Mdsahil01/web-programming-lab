let student = {
    name: "Sahil",
    usn: "1RT24CS001",
    branch: "CSE",

    display() {
        console.log("Student Name:", this.name);
        console.log("USN:", this.usn);
        console.log("Branch:", this.branch);
    }
};

let employee = {
    name: "Rahul",
    salary: 50000
};

let car = {
    brand: "Toyota",
    model: "Innova"
};

let book = {
    title: "JavaScript Basics",
    author: "John"
};

student.display();

console.log("Employee:", employee);
console.log("Car:", car);
console.log("Book:", book);
