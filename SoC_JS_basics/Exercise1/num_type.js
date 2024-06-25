const prompt = require('prompt-sync')();
function num_type(a){
    if(a>0){
        console.log("Positive");
    } else if(a<0){
        console.log("Negative");
    } else{
        console.log("Zero");
    }
}

var c = prompt("Enter number: ");
num_type(c);