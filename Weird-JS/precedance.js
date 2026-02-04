//precedance and associativity

var a=7
var b=5
var c=8

a=b=c;
console.log(a)
console.log(b)
console.log(c)
// we can see that the assignment operator has right-to-left associativity
//so we are getting the values as value of c

//if the case is something like this if the operator is || between two then
//console.log(null || "hello") then the output will be the hello
// same in case of the the 0||1 output will be 1