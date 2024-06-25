arr=[1,3,5,7];
n=arr.length;
console.log(arr);
for(let i=0;i<n;i++){
    console.log(arr[i]);
}

arr.push(9); // adds 9 at the end of array
console.log(arr);
arr.pop(); // removes last element of array
console.log(arr);
arr.unshift(0);// adds 0 at the start of array
console.log(arr);
arr.shift();// removes first element from array
console.log(arr);