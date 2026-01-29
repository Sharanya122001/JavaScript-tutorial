// singleton object means there is only one instance of that object throughout the program
//object.create


//object literals

//how to add the symbol in the object
const sym=Symbol('mynewSymbol')

const user1={
    name:"shranya",
    [sym]:"myvalue",
    age:20,
    location:"India",
    email:"aharanya@gmial.com",
    isloggedin:true,
    lastlogin: '10-jan-2024'
}

console.log(user1);
console.log(user1[sym]); //dot notation won't work here
console.log(user1.sym); //undefined
console.log(user1.name); //dot notation
console.log(user1['name']); //bracket notation

user1.age=21; //updating the value of age
console.log(user1.age);
//Object.freeze(user1); //prevents any changes to the object
user1.age=26; //updating the value of age
console.log(user1.age);


user1.greeting=function(){
    console.log("hello user1");
} //adding a method to the object
user1.greeting(); //calling the method

user1.greeting2=function(){
    console.log(`hello ${this.name}`);
}
user1.greeting2(); //calling the method



