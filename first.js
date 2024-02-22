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


// CHAPTER 2: OPERATORS

// -------------------------
// Arithmetic Operators
// -------------------------
let AA = 2;
let BB = 3;

// Displaying initial values
console.log("AA = ", AA, " & BB = ", BB);

// Addition
console.log("AA + BB = ", AA + BB); // Expected output: 5

// Subtraction
console.log("AA - BB = ", AA - BB); // Expected output: -1

// Multiplication
console.log("AA * BB = ", AA * BB); // Expected output: 6

// Division
console.log("AA / BB = ", AA / BB); // Expected output: 0.6666666666666666

// Modulo (remainder)
console.log("AA % BB = ", AA % BB); // Expected output: 2

// Exponentiation
console.log("AA ** BB = ", AA ** BB); // Expected output: 8 (2^3)


// -------------------------
// Unary Operators
// -------------------------
// Post-increment
AA++; // Increments AA by 1
console.log("AA after post-increment = ", AA); // Expected output: 3

// Post-decrement
AA--; // Decrements AA by 1
console.log("AA after post-decrement = ", AA); // Expected output: 2

// Pre-increment
console.log("Pre-increment ++AA = ", ++AA); // Expected output: 3 (First increments, then returns AA)

// Pre-decrement
console.log("Pre-decrement --AA = ", --AA); // Expected output: 2 (First decrements, then returns AA)

// Demonstrating the difference between pre and post increment
console.log("Pre-increment ++BB = ", ++BB); // Expected output: 4
console.log("Post-increment BB++ = ", BB++); // Expected output: 4 (Returns BB, then increments)

// Post-increment displayed with subsequent access
console.log("AA++ (displayed after increment) = ", AA++); // Expected output: 2 (Returns AA, then increments)
console.log("AA after post-increment = ", AA); // Expected output: 3

// Combining pre-decrement and display
console.log("--AA (Pre-decrement and display) = ", --AA); // Expected output: 2 (First decrements, then returns AA)
console.log("AA after pre-decrement = ", AA); // Expected output: 2

 
// -------------------------
// Assignment Operators
// -------------------------
let vara = 5;
vara += 4; // Equivalent to vara = vara + 4
console.log(vara); // Expected output: 9

let varb = 5;
varb -= 4; // Equivalent to varb = varb - 4
console.log(varb); // Expected output: 1

let varc = 5;
varc *= 4; // Equivalent to varc = varc * 4
console.log(varc); // Expected output: 20

let vard = 5;
vard /= 4; // Equivalent to vard = vard / 4
console.log(vard); // Expected output: 1.25

let vare = 5;
vare %= 2; // Equivalent to vare = vare % 2
console.log(vare); // Expected output: 1

let varf = 5;
varf **= 4; // Equivalent to varf = varf ** 4
console.log(varf); // Expected output: 625

// -------------------------
// Comparison Operators
// -------------------------
// == and != (Checks value regardless of type)
console.log("5 == 2", 5 == 2); // Expected output: false
console.log("7 != 2", 7 != 2); // Expected output: true
console.log("5 == '5'", 5 == '5'); // Expected output: true (type coercion)

// === and !== (Strict equality - checks value and type)
console.log("5 === '5'", 5 === '5'); // Expected output: false
console.log("5 !== '5'", 5 !== '5'); // Expected output: true

// >, <, >=, <= (Greater, lesser, greater or equal, lesser or equal)
console.log("4 >= 6", 4 >= 6); // Expected output: false
console.log("8 >= 6", 8 >= 6); // Expected output: true

// -------------------------
// Logical Operators
// -------------------------
// && (AND), || (OR), ! (NOT)
console.log("True && False", true && false); // Expected output: false
console.log("True || False", true || false); // Expected output: true
console.log("!True", !true); // Expected output: false

// -------------------------
// Conditional Statements
// -------------------------
// If, Else If, Else
// let age = 16;
// if (age >= 18) {
//     console.log("can vote");
// } else {
//     console.log("cannot vote");
// } // Expected output: "cannot vote"

// Ternary Operator
let status = age > 18 ? "Adult" : "Not Adult";
console.log(status); // Expected output: "Not Adult"

// -------------------------
// Practice Questions
// -------------------------
// Q1. Check if a number is divisible by 3
let number = 9; // Example input
if(number % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible by 3");
} // Expected output: "Divisible by 3"

// Q2. Grade according to score
let score = 60; // Example input
if(score >= 80) {
    console.log("A");
} else if(score >= 70) {
    console.log("B");
} else if(score >= 60) {
    console.log("C");
} else if(score >= 50) {
    console.log("D");
} else {
    console.log("F");
} // Expected output: "C"



// Chapter 3: Loops and Conditional Statements

// ---FOR LOOP---
// Example: Print a statement multiple times
for (let i = 1; i < 5; i++) {
    console.log("My name is Goutam Tiwari");
    // Expected output: "My name is Goutam Tiwari" printed 4 times
}

// Example: Calculating the sum from 1 to n
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum); // Expected output: 15
console.log(typeof sum); // Expected output: number
console.log("End of loop");

// Important Note: Avoid writing infinite loops to prevent website crashes.

// ---WHILE LOOP---
let n = 5;
let i = 1;
while (i <= n) {
    console.log("i = ", i);
    // Expected output: "i = 1" to "i = 5"
    i++;
}

// Example: Print a name multiple times
i = 1;
while (i <= n) {
    console.log("Goutam name print 5 times");
    // Expected output: "Goutam name print 5 times" printed 5 times
    i++;
}

// Example: Calculating sum using while loop
i = 1;
sum = 0;
while (i <= n) {
    sum += i;
    i++;
}
console.log(sum); // Expected output: 15

// Printing sum at each step
i = 1;
sum = 0;
while (i <= 5) {
    sum += i;
    i++;
    console.log("i = " + sum);
    // Expected output: "i = 1" to "i = 15" (sum at each step)
}

// ---DO-WHILE LOOP---
// Example: Executes at least once regardless of the condition
i = 1;
do {
    console.log("hello Dear community atleast one time run");
    // Expected output: "hello Dear community atleast one time run"
    i++;
} while (i < 1);

// ---FOR-OF LOOP---
// Example: Iterating over a string
let str = "Goutam-Tiwari";
let size = 0;
for (let char of str) {
    console.log("char = ", char);
    size++;
}
console.log(size); // Expected output: Length of "Goutam-Tiwari"

// ---FOR-IN LOOP---
// Example: Iterating over an object to access keys and values
let Employee = {
    name: "Goutam Tiwari",
    age: 20,
    sex: "male"
};

for (let key in Employee) {
    console.log("key = ", key, "value = ", Employee[key]);
    // Expected output: key = name value = Goutam Tiwari, and so on for each property
}

// ---PRACTICE QUESTIONS---
// Q1: Print all even numbers from 0 to 100 //even number
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("i = ", i);
        // Expected output: Even numbers from 0 to 100
    }
}

// Q2: Guessing Game 
let gameNumber = 30;
let userNumber = parseInt(prompt("Guess a random number:"));
while(userNumber != gameNumber){
    userNumber = parseInt(prompt("You guessed wrong. Guess again:"));
}
console.log("Congrats! You guessed the right number.");

// ---STRINGS & TEMPLATE LITERALS---
// Example of template literals
let pen = {
    name: "Techno",
    prize: 50
};
let output = `The name of pen is ${pen.name} of cost = ${pen.prize} rupees`;
console.log(output); // Expected output: The name of pen is Techno of cost = 50 rupees

// ---STRING METHODS/FUNCTIONS---
// Strings are immutable in JavaScript. To reflect changes, reassign the modified string to the original variable.
let str4 = "Hello Roshni";
str4 = str4.toUpperCase();
console.log(str4); // Expected output: HELLO ROSHNI

// ---PRACTICE TIME---
// Prompt user for full name, generate a username with @, full name, and length of full name
let fullName = prompt("Enter your Fullname");
let userName = "@" + fullName.replace(" ", "") + fullName.length;
console.log(userName);

// This organized and simplified version should help in quick understanding and revision of loops, conditional statements, and basic string manipulation in JavaScript.










