const username=""

if(username){
    console.log("yes")
}
else{
    console.log("n")
}

//falsy values
//false, 0, -0, bigInt 0n, "" , null , undefined, Nan

//truthy values
// "0", "false", " ", [], {}, function(){}

//how to check if the array is empty or not
if(username.length===0){
    console.log("empty");
}

//how to check if the object is empty or not
const emptyobj={}
if (Object.keys(emptyobj).length===0){
    console.log("empty object")
}


// nullish coalescing operator (??)
// this return the right hand value when the left hand value is null or undefined
let var1;
//var1=5??10;
//var1=null?? 50??10
var1=undefined?? 40??100
console.log(var1)


//terniary operator
//condition? true:false

const price=90;
price<=100? console.log("less than 100 "):console.log("more than 100")