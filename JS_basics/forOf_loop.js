brr=[5,6,7,8];
for(i of brr){        //i stands for each element of brr same like c++
    console.log(i)
}

crr=[5,6,7,8];
for(let i of crr){
    i*=2;     //this can change the element but on printing the array
    console.log(i);
}
console.log(crr);// it will still be same, (while using forOf loop)