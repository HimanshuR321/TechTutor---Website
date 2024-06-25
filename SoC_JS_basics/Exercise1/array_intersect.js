const prompt = require('prompt-sync')();
function arrayIntersect(arr1,arr2){
    n1=arr1.length;
    n2=arr2.length;
    let arr3 = [];
    for(let i=0;i<n1;i++){
        for(let j=0;j<n2;j++){
            if(arr1[i]==arr2[j] && !arr3.includes(arr1[i])){
                arr3[i]=arr1[i];
            }
        }
    }
    return arr3;
}

let n1 = prompt('Enter array1 size: ');
let n2 = prmopt('Enter array2 size: ');

let arr1=[], arr2=[];
console.log("Fill Array1")
for(let i=0;i<n1;i++){

}