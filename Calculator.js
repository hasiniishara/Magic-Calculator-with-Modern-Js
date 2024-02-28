
//Function for addition
function add(num1, num2) {
    return `${num1} plus ${num2} equals ${num1 + num2}`;
}

//Function for subtraction
function subtract(num1, num2) {
    return `${num1} subtract ${num2} equals ${num1 - num2}`;
}

//Function for multiplication
function multiply(num1, num2) {
    return `${num1} times ${num2} equals ${num1 * num2}`;
}

//Function for division
function divide(num1, num2) {
    return `${num1} divided by ${num2} equals ${num1 / num2}`;
}

//Function for magicoperation
function magicOperation(num) {
    switch (true) {
        case num < 10:
            return "Magic dust makes the number grow: " + (num * 10);
        case num >= 10 && num <= 100:
            return "A magic gnome double the number: " + (num * 2);
        default:
            return "The number is too mighty for magic and remains unchanged.";
    }
}

//Prompt-sync library and assigns it to a constant variable named prompt.
//Prompt-sync is a library that allows synchronous prompting for user input in Node.js applications.
const prompt = require('prompt-sync')();

//Declares a variable named userContinueCalculating and initializes it with the boolean value true as a default.
let userContinueCalculating = true;
 
//To print the Welcome message to the screen
console.log("\nWelcome to the Magic Calculator!");

//Instructions for input value and select operation, continue the process untill select exit
while (userContinueCalculating) {

    let operation = prompt("Choose an operation: add, subtract, multiply, divide, magic, or exit: ");
   
    //Exit process and message
    if (operation === "exit") {
        console.log("Goodbye! Have a nice day!");
        break;
    }else if (operation === "magic") {
        //Declare variable
        var num1 = parseFloat(prompt("Enter the number: "));
    }else if  (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide"){
        //If user input invalid operations, Ssytem print out the error message.
        console.log("Invalid Operation. Please choose one of the specified operations.");
        continue;
    }
    else {
        //Declare two varibles & getting user inputs
        var num2 = parseFloat(prompt("Enter First number: "));
        var num3 = parseFloat(prompt("Enter Second number: "));
    }
    

    //To print error msg if inputs are not numbers
    if (isNaN(num2) || isNaN(num3)) {
        console.log("Invalid numbers. Please enter valid numbers.");
        continue;
    }

    //To skip divide by 0 and print an error msg
    if (num3 === 0 && operation === "divide") {
        console.log("Cannot divide by zero. Try another operation.");
        continue;
    }

    //call the correct function according to selected operation
    switch (operation) {
        case "add":
            console.log(add(num2, num3));
            break;
        case "subtract":
            console.log(subtract(num2, num3));
            break;
        case "multiply":
            console.log(multiply(num2, num3));
            break;
        case "divide":
            console.log(divide(num2, num3));
            break;
        case "magic":
            console.log(magicOperation(num1));
            break;
        default:
            console.log("Invalid operation. Please try again.");
    }
}