const prompt = require('prompt-sync')();
function vowelCount(s){
    let count = 0;
    let n = s.length;
    for(let i=0;i<n;i++){
        if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
            count++;
        }
    }
    return count;
}

var s=prompt("Enter string: ");
console.log(vowelCount(s));