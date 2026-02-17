function greet(city,country){
    console.log(this.name + " from " + city+","+ country)
}

const person={
    name:"sharanya"
};

greet.call(person,"banglore","India")


// 🔹 5️⃣ Why Do We Need call()?
// To:
// Borrow methods
// Control this
// Use one function for multiple objects

// method borrowing
const person1={
    name:"sharnay",
    greet(){
        console.log("Hi "+ this.name)
    }
}

const person2={
    name:"krishna"
}

person1.greet.call(person2);
// We borrowed greet() from person1.

// JavaScript internally does something like:
// 1️⃣ Temporarily attach function to object
// 2️⃣ Call it
// 3️⃣ Remove it


// call() does NOT work with arrow functions.
// Example:
// const greet = () => {
//   console.log(this.name);
// };
// greet.call({ name: "Sharanya" });

// It will NOT change this.
// Why?
// Because arrow functions:
// 👉 Do NOT have their own this
// 👉 They use surrounding this
// So call() cannot change it.


// call() means:

// 👉 “Run this function”
// 👉 “But use THIS object as this”


//syntax:  func.call(thisArg, arg1, arg2)


// 3️⃣ Does call() execute immediately?
// Yes ✅
// It executes the function immediately.

// 8️⃣ What is method borrowing?
// Using call() to use one object's method on another object.


// 7️⃣ Does call() work with arrow functions?
// No ❌
// Arrow functions do not have their own this.
// They use lexical this, so call() cannot change it.


// 4️⃣ What happens if thisArg is null or undefined?
// In browser (non-strict mode):
// this → window

// In strict mode:
// this → undefined


function greet(){
    console.log("hi i am "+this.name)
}

const p1={name:"shar"}
const p2={name:"phar"}

greet.call(p2)

function gree(city){
    console.log("hi "+this.name+ " from "+city)
}
const p3={name:"krish"}

gree.call(p3,"goa")