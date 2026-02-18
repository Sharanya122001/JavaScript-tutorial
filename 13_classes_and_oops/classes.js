// 🌟 Step 3: Why Not class User(name, age)?
// Because:
// 👉 A class definition is NOT a function definition.
// 👉 The parameters belong to the constructor, not the class itself.

class user{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}
const p=new user("chai","mail","123444")
console.log(p.encryptPassword())


class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends  User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
}
//normal method in the class
class person{
    info(){
        console.log("this is the info")
    }
}
const p2=new person();
p2.info()

//static method in the class
class personone{
    static info(){
        console.log("this is the info")
    }
}
personone.info()
//direct call with the static method without creating the object

// Easy rule:
// Normal method → use object
// Static method → use class name


//handling errrors
class calculator{
    divide(a,b){
        if(b==0){
            throw new Error("cannot divide by zero")//throw creates the error
        }
    return a/b; 
    }
}

const cal=new calculator();
//try catch handles the error safely
try{ 
    console.log(cal.divide(10,0));
}catch(error){
    console.log(error.message);
}


//inheritance
class animal{
    constructor(name){
        this.name=name;
    }

    speak(){
        console.log("animal sound")
    }
}

class dog extends animal{
    constructor(name,bread){
        super(name),
        this.bread=bread
    }

    speak(){
        console.log("dog barks")
    }
}
const d1=new dog("lab","goldenretrevier")
console.log(d1)
// What is super()?
// Calls parent constructor
// Must be called before using this
// Required in child class constructor


// class Persontwo {
//   greet() {
//     console.log("Hi");
//   }
// }
// // Behind the scenes:
// Person.prototype.greet = function() {
//   console.log("Hi");
// }

class userone{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }

    login(){
        console.log("loggedin")
    }
    logout(){
        console.log("loggedout")
    }
}
const p5=new userone("shar","chat@b","1234")
p5.login();


class helper{
    constructor(number){
        this.number=number
    }
    squre(){
        return this.number*this.number  
    }
    static add(a,b){
        return a+b;
    }
}

const obj=new helper(5);
console.log(obj.squre());
console.log(helper.add(2,3))