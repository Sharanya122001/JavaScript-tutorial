// for
for (let i=0; i<10;i++){
    const element=i
    if(element==5){
        //console.log("this is 5")
    }
    //console.log(element)
}
//console.log(i)--- not visible outside the scope as we discussed  


for (let i=0; i<=10;i++){
    //console.log(`outerloop value ${i}`)
    for(let j=0; j<=10;j++){
        //console.log(`inner loop values ${j} and ${i}`)
        //console.log(i + '*' + j + '=' + i*j)
    }
}

let arr=["shar","pooru","krish"]
console.log(arr.length)
for(let i=0; i<arr.length;i++){
    console.log(arr[i])
}


//break and continue

// for(let i=1; i<=20 ; i++){
//     if (i==5){
//         console.log("5 detected")
//         break; // here at 5 the execution stops
//     }
//     console.log(`values ${i}`)
    

// }

for(let i=1; i<=20 ; i++){
    if (i==5){
        console.log("5 detected")
        continue;//here 5 is not printed its moved to 6 
    }
    console.log(`values ${i}`)
    

}