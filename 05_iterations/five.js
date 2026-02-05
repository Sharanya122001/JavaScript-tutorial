const code=["js","csharp","java","python"]

code.forEach(function(val){
    console.log(val)
})

code.forEach((item)=>
{console.log(item)})

//code.forEach(printme)

code.forEach((item, index,array)=>
{
    console.log(item,index,array)
})

const mynum=[1,2,3,4,5]
const newnum=mynum.filter((num)=>num>4)
console.log(newnum)