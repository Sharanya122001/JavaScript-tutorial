// in array javascript we will find 2 types:
//1. continous array
//2. holey array

//smi (small integer)
//packed element
//Double(float,string,function)

//things in the array are called elements

const arrtwo=[1,2,3,4,5]
//packed_smi_arr---by default 

arrtwo.push(6.0)
//packed_double_elements--> the double include NaN and infinity

arrtwo.push('7')
//packed_elements--STRINGS

//remember once the array becomes packed_elements it is not been converted to the packed_smi_arr

arrtwo[10]=11
//holey_elements----because it include multiple elements numbers,doubel and string

console.log(arrtwo)
console.log(arrtwo.length)
console.log(arrtwo[9])
console.log(arrtwo[19])

//bound check


//optimization presence high to low
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED


const arr=new Array[3]
//we mentioned the length , so its become holey
arr.push('2')//H_packed
arr.push('3')//H_packed
arr.push('4')//H_packed
//this will not give that good performance when compared to this

const arrr=[]// this is packed which is more optimized then above
arr.push('2')//PACKED
arr.push('3')//PACKED
arr.push('4')//PACKED

