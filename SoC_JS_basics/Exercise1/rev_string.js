const prompt = require('prompt-sync')();
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function reverse_string(s){
    let arr = s.split(''); // Convert string to array, because strings are immutable in JS
    let n = arr.length;
    for(let i = 0; i < (n / 2); i++) {
        swap(arr, i, n - i - 1);
    }
    return arr.join(''); // Convert array back to string
}

var s=prompt('Enter string:');
console.log(reverse_string(s));