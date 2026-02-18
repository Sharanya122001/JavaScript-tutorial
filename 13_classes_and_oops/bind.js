const dog={
    name:"tommy",
    bark:function(){
        console.log("woof! i am "+this.name);
    }
};
dog.bark()

const sound=dog.bark
sound()//name is undefined Because now we didn't call it like dog.bark()
//So now there is no object before the dot
// So this becomes something else (not dog).
// Dog forgot its own name 😭

const sound1=dog.bark.bind(dog)
sound1()

// Means:
// 👉 “Hey function, ALWAYS use dog as this.”
// 👉 Even if someone calls you separately.
// 👉 Never forget who you are.


//syntax:
const newFunction = oldFunction.bind(someObject);


const person1 = { name: "Sharanya" };
const person2 = { name: "Rahul" };
function sayHello() {
  console.log("Hello " + this.name);
}

const helloSharanya = sayHello.bind(person1);
const helloRahul = sayHello.bind(person2);

helloSharanya();  // Hello Sharanya
helloRahul();     // Hello Rahul


//setTimeout Problem
const user = {
  name: "Sharanya",
  greet: function() {
    console.log("Hi " + this.name);
  }
};
setTimeout(user.greet, 2000);//Output:Hi undefined
//Why?
// Because setTimeout calls the function separately.
// So this is lost.

// ✅ Fix With bind()
setTimeout(user.greet.bind(user), 2000);//output: Hi Sharanya



//bind() = Glue that sticks `this` forever

//because when we just call the obj with variable assignment it will define undefined, so bind will help to glue this keyword.
