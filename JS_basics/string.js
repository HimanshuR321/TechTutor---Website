let s="Himanshu Raj"
console.log(s,s.length);
for(let i=0;i<s.length;i++){
    console.log(s[i]);
}
//forOp loop works with strings but forEach doesn't
console.log(s.toUpperCase()); // this doesn't change the original string
s=s.toUpperCase();
console.log(s.toUpperCase());

let a="  Pintu Singh  ";
console.log(a,a.length);
b=a.trim(); //trims unnecessary spaces from string but not middle spaces
console.log(b,b.length);

let z="Baldev Singh";
console.log(z.slice(2,6)); // slices from i to j-1 

let q="Acche se shovel chalao baldev";
console.log(q.split(' '));
let w="Meri,baatb,hi,maano";
console.log(w.split(','));
