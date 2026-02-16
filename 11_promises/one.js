const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("THis task is async and complete")
        resolve();// if we dont write this then we can't write anything saying "this". resolve is connected to this
    },1000)
})

promiseone.then(function(){
    console.log("completed!!!")
})

//not manditory to store the promise in the variable
// now we can see we have created both in one instead of taking one promise variable and then adding anoither then for it 
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log('async 2!!!!')
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})//whatver we pass in th resolve that parameter will be seen in the output
    },1000)
})

promisethree.then(function(user){
    console.log(user);
});


const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"saa",password:"123"})
        } else{
            reject('error:something went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{console.log("finally everything is executed")})



const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('error:something went wrong')
        }
    },1000)
})
//instead of using then we will use the async and await
// promisefive.then()
async function consumepromisefivez(){
    try{
        const r=await promisefive
        console.log(r);
    }
    catch(error){
        console.log(error)
    }
}
consumepromisefivez()