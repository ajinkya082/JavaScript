// Assinment 1: Declare at least 5 different variables (e.g., name, age, 
// isStudent, etc.), log each variable's value, and its type using typeof. Add 
// comments to explain what you expect from typeof
let name='Ajinkya';
let age=21;
let isStudent=true;
let married;
let address=null;

console.log("Name : ",name);
console.log("Age :" , age);
console.log("isstudent", isStudent);
console.log("Married :" , married);
console.log("Address" , address)

// OUTPUT.
// Name :  Ajinkya
// May_11.js:12 Age : 21
// May_11.js:13 isstudent true
// May_11.js:14 Married : undefined
// May_11.js:15 Address null

console.log("Name : ",typeof name);
console.log("Age :" ,typeof age);
console.log("isstudent",typeof isStudent);
console.log("Married :" ,typeof married);
console.log("Address" ,typeof address)

// OUPTUT
// Name :  string
// May_11.js:24 Age : number
// May_11.js:25 isstudent boolean
// May_11.js:26 Married : undefined
// May_11.js:27 Address object

//  Assignment 2: Create a string variable that contains your favorite quote. 
// Use console.log to display the quote and use typeof to verify it's a string.

let quote="MY mind is mine not others so be yourself not me ";
console.log("quote",quote)
console.log("quote",typeof quote)
// OUTPUT
// quote MY mind is mine not others so be yourself not me 
// May_11.js:41 quote string