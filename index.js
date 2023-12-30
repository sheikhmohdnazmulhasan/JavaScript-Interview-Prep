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
    return num * num
};

console.log(square2(5)); //25