const num=[1,2,3,4,5,6,7,8,9,10]

num.forEach((i)=>{
    //console.log(i+10)
})
//Map function

const n=num.map((num)=>num+10)
console.log(n)

//chaining means using 2 to 3 methods at a time....let's seee
const b=num.map((i)=>i*10)//this map result is passed to next method
           .map((j)=>j+5)// this output will be sent to the next
           .filter((g)=>g>50)// this si the final method which is executed

console.log(b)