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