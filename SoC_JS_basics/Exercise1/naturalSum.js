const prompt = require('prompt-sync')();
function naturalSum(n){
    return (n*(n+1))/2;
}

var n = Number(prompt('Enter number: '));
console.log(naturalSum(n));