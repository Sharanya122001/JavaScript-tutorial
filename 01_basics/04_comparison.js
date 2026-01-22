//== value check only

console.log("Comparison operations");
console.log(2>1)
console.log("2">1)
console.log("02">1)


console.log(null>=0)//true
console.log(null>0)//false
console.log(null==0)//false


console.log(undefined>0)//false
console.log(undefined==0)     //false
console.log(undefined>=0)//false

//=== strict equality operator
//wehn this comes into picture no type conversion takes place
//it checkst he datda type and value both

console.log(0===false)//false
console.log(1===true)//false
console.log(1==="1")//false