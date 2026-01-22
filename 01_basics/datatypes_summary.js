//primitive

//7 types : string, boolean, number, null, undefined, symbol, bigint



//Reference(non-primitive)

// array, objects, functions


/*
Q. JavaScript is a dynamically typed language or statically typed language?
A. Dynamically typed language. 
Because we don't have to specify data types while declaring variables. 
The data type is determined at runtime based on the value assigned to the variable.
*/


let s1=Symbol("113")//it creates the different symbol for the same value
let s2=Symbol("113")
console.log(s1===s2) //false


/*

If the value is Undefined, the result of typeof is "undefined".

If the value is Null, the result of typeof is "object".

If the value is Boolean, the result of typeof is "boolean".

If the value is Number, the result of typeof is "number".

If the value is String, the result of typeof is "string".

If the value is a native object that does not implement [[Call]], the result of typeof is "object".

If the value is a native or host object that implements [[Call]], the result of typeof is "function".

If the value is a host object that does not implement [[Call]], the result is implementation-defined, but it will not be "undefined", "boolean", "number", or "string".

*/