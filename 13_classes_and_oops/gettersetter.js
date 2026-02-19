const user={
    name:"sharanay",
    lname:"agnihotri",

    get fname(){
        return this.name+" "+ this.lname
    }
};

console.log(user.fname)

// 🚨 Notice Something Important
// We did NOT write:
// user.fullName()
// We wrote:
// user.fullName
// Because getters behave like properties,
// but actually they are functions.

//🧠 Important Rules
// Setter must have exactly ONE parameter.
// It is accessed like a property.
// You cannot return a value from setter.
// It belongs to accessor descriptor.
// Usually paired with getter.

// 🎯 Why Do We Need Setter?
// We use setter to:
// Validate data
// Control how value is stored
// Format data
// Protect internal variable
// Add restrictions
// Trigger side effects

// 🧠 What is a Setter?
// A setter is a special function that runs when you ASSIGN (set) a value to a property.
// 👉 Getter runs when you READ
// 👉 Setter runs when you WRITE


// 🎯 Main Use of Getter
// Getter is used when:
// 👉 You want something to behave like a property
// 👉 But actually calculate it like a function


//------------------ for more see chatgpt --------------------------------