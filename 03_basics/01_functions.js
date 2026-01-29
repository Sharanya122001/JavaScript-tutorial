//functions in JS

function name(){
    console.log("s")
    console.log("a")
    console.log("g")
}

//name(); //function call or function invocation

function addnum(a,b){//here a and b are parameters
    console.log(a+b);
}
//here we can't assign any variable to the output of the function because it will return undefined
addnum(2,3); //5, here 2 and 3 are arguments
addnum(10,"10"); //1010

function addnum2(a,b){
    return a+b;
    console.log("hieee")// this will not work because after return statement no code will be executed
}
// here we can assign the return value to a variable
const returnvalue=addnum2(5,10);
console.log(returnvalue);//15


function loggedin(username="user"){// here username is parameter with default value 'user'
    if(username===undefined){
        console.log("please enter the username");
        return
    }// if we dont want to go througth this we can assign a default value to the parameter
    return `${username} is logged in`;
}

const message=loggedin("sagar");
console.log(message);//sagar is logged in

const message2=loggedin("");
console.log(message2);// is logged in

const message3=loggedin();//undefined is logged in
console.log(message3);