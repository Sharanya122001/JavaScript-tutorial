// this arrow function comes input picture in 2015 in the ES6
// this keyword refer to the current context

const user={
    username:"sharnya",
    price:999,

    welcome : function(){
        console.log(`${this.username}, hi how r u`)
        console.log(this)
    }

}
user.welcome()
user.username="sam"
user.welcome()

console.log(this)
///imp note: in browser the global object is windows object


function one(){
    username:"sharanay"
    console.log(this.username)
}
one()


const two=()=>{
    let username="shatanau"
    console.log(this)
}
two()

//arrow function
const a=(b,c)=>{
    return b+c
}

// we can see that we have the function with the {} and return in it
// so when ever we are using the {} then return is must with it if we dont use the return then
// code will be like this
const b=(y,m)=> y+m
// we can add the () for the y+m 
//const b=(y,m)=>(y+m) ........ this is implicit


// if we want to give output as the object then 
//const b=(y,m)=> ({usernmae:"sharanya"})
