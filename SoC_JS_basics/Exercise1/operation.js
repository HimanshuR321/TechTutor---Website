const prompt = require('prompt-sync')();
function operation(a,b){
    console.log("Sum =",a+b);
    console.log("Difference =",a-b);
    console.log("Product =",a*b);
    console.log("Quotient =",a/b);
}

var a = Number(prompt("Enter a:")); // because prompt("Enter a:") gives a string
var b = Number(prompt("Enter b:"));
operation(a,b);