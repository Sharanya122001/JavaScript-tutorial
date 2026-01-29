// Destructuring Objects in JavaScript

const course = {
  title: "JavaScript - The Weird Parts",
  instructor: "Sagar Nihotri",
    level: 1
};

const {level:levelValue}=course;//destructuring
console.log(levelValue);// we can rename it also
console.log(course.level);//normal way to access the value 

//when ever we see the curly braces{} it means we are destructuring an object

// {} this is the object in the JS
//[] this is the array in the JS