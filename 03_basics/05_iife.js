//Immediately Invoked Function Expressions (IIFE)

// if we want to immediately invoke a function then 

(function w(){
    // this is named IIFE --w
    console.log("hi DB!")
})();

// we add the () for whole function and another () after that to execute it immediately
// second () is execution call 

// why we use this to avoid the global scope  pollution problem so whaterever the global scope var
// are present to avoid there pollution we use this IIFE
(()=>{
    // not named IIFE
    console.log("hi dbbbb")
})();

((name)=>{
    console.log(`hi ${name}`);
})("shar")

// when we are writing 2 IIFE in same file then its imp to add the ; at end of first IIFE