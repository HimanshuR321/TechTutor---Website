const arr=[1,2,3,4];
console.log(arr);
arr=5;// this will give error because we can change array but not its type
console.log(arr);

arr=[5,"hima",6.9,true, [5,6,7,8]]; // it can store anything
console.log(arr); // the type of this array is object
console.log(typeof(arr));