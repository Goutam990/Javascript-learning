// Variable Declarations and Basic Console Output
let name = "Goutam";
console.log(name);

let surname = "tiwari";
console.log(surname);

// Constants and Mathematical Calculations
const PI = 3.14;
let r = 2;
let answerr = PI * r * r; // Calculation of circle area
// console.log(answerr); // Uncomment to see the calculated area

// Variable Declarations with Different Types
let age = 40.00; // Explicit declaration added for clarity
console.log(age);

let x = null;
let y = undefined; // Explicit declaration added for clarity
console.log(x);
console.log(y);

let isfollow = true; // Boolean value
console.log(isfollow);

// Naming Variables with Different Styles
let Fullname = "goutam"; // Lowercase variable declaration
let $FullName = "Tiwari"; // Variable with special character
console.log(Fullname);
console.log($FullName);

let Console = "apna colle"; // Variable that shadows global Console object
console.log(Console);

let isFollowing = true; // Boolean variable
console.log(isFollowing);

// Undefined Variable Example
let A; // Variable declared without initialization
console.log(A);

// Block Scope Demonstration
{
    let c = 40; // Block-scoped variable
    console.log(c);
}

{
    let c = 50; // Same variable name, different block scope
    console.log(c);
}

// Working with Objects
const Student = {
    Studnet_name: "Goutam Tiwari",
    age: 21,
    cgpa: 8.2,
    isPass: true
};

// Accessing Object Properties
console.log(Student.cgpa); // Dot notation
console.log(Student["age"]); // Bracket notation

// Updating Object Properties
Student["age"] = Student["age"] + 1; // Incrementing age
console.log(Student.age);

// Practice Question 1: Object Creation
const Parker_pen = {
    name: "parker jotter standard CT ball pen",
    Ratings: 4.5,
    isdeal: true,
    prize: 270
};
console.log(Parker_pen);
console.log(Parker_pen.isdeal);
console.log(Parker_pen["prize"]);

// Practice Question 2: Another Object Creation
const Profile = {
    UserName: "@Goutam Tiwari",
    isfollow: false,
    post: 195,
    followers: 5567,
    following: 4,
    Discription: "Computer Science Student | college Student",
};
console.log(Profile);
// Demonstrating the use of 'typeof' operator with objects and their properties
console.log(typeof Profile);
console.log(typeof Profile["UserName"]);
console.log(typeof Profile["isfollow"]);


