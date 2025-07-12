// Assignment 1: Build a basic calculator with two numbers and print the result for all 
// arithmetic operations.

let a=parseInt(prompt("Enter number "));
let b=parseInt(prompt("Enter number "));
let operation=prompt("Enter operation ");
switch(operation){
    case "addition":
        console.log("the addition is" ,a+b);
        break;
    case "subtraction":
        console.log("the subtraction is ",a-b);
        break;
    case "division":
        console.log("the division is ",a/b);
        break;
    case "multiplication":
        console.log("The multiplication is ",a*b);
        break;
    case "mod":
        console.log("The modulos is " , a%b);
        break;
    default:
        console.log("Invalid operations");
}

//  Assignment 2: Create two string variables (name, city) and log a message using a 
// template literal.
let name='Rohit';
let city='Mumbai';

console.log(`the name is ${name} and the city name is ${city}`)

// Assignment 3: Write 3 expressions that mix types (number + string, boolean + 
// number) and log their output.
let num=10;
let str="ajinkya";
console.log(num+" "+str+" ");
console.log(num+" "+true+" ");
console.log(num+" "+str+" "+true);