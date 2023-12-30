// Function in Javascript

// Q1: What is Function Declaration?

// In JavaScript, a function declaration is a way to define a function. It allows you to create a named function with a specified set of parameters and a block of code that will be executed when the function is called. Here's the basic syntax for a function declaration:

// Declare the function 
function square(num) {
    return (num * num);
};

// Call the Function and console the value
console.log(square(10)); // 100


// Q2: What is Function Expression?

// A function expression in JavaScript is another way to define a function. Unlike function declarations, which are hoisted to the top of the scope, function expressions are not hoisted. In a function expression, you create a function and assign it to a variable. Here's the basic syntax:

const square2 = function (num) {
    return num * num;
};

console.log(square2(5)); //25


// Q3: What Are First Class Function?

// In JavaScript, functions are considered first-class citizens, meaning they have the same properties and abilities as other values (like numbers, strings, and objects). Here are the characteristics of first-class functions in JavaScript

function square3(num) {
    return num * num;
};

function displaySquare(fn) {
    console.log(fn(10)); //100
};

displaySquare(square);


// Q4: What is IIFE?

// IIFE stands for Immediately Invoked Function Expression. It is a design pattern in JavaScript where you define and execute a function immediately after its creation. The primary purpose of an IIFE is to create a new scope for variables, preventing them from polluting the global scope.

(function square4(num) {
    console.log(num * num); //25
})(5);

(function square5(x) {
    return (function (y) {
        console.log(x); //1
    })(2);
})(1);