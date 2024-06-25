let x={
    name:"Himanshu",
    age:18,
    pecentage:89.2,   
    isMarried:false,  
    "nick name":"Solty" 
};

for(const key in x){
    if(Object.hasOwnProperty.call(x,key)){
        console.log(key+":"+x[key]);
    }
}