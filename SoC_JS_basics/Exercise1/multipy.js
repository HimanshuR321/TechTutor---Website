const prompt = require("prompt-sync")();
function multiple(a){
    for(let i=1;i<=10;i++){
        console.log(a,"x",i,"=",a*i);
    }
}

var c=prompt("Enter the number: ");
multiple(c);