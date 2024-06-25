let x={
    name:"Himanshu",
    age:18,
    pecentage:89.2,   //name, age, etc. are called keys here and other are values
    isMarried:false,  // so key-value pairs
    "nick name":"Solty" // key can be string
};
console.log(x);
console.log(x.age);
console.log(x[`age`]);
// x[`age`]=40; // this will change the object
x.age=50;// this will also change the object
console.log(x[`age`]);
console.log(x);