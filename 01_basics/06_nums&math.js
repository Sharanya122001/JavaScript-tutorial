const score = 100;
const bonus = 20;
console.log(score);

const balance=new Number(100);
console.log(balance); // this will print the number object

console.log(balance.toString().length); // this will convert the number to string and then give the length of the string
console.log(balance.toFixed(2)); // this will convert the number to string with 2 decimal places
const num1=1000000;
console.log(num1.toLocaleString('en-IN'));// this will convert the number to string with commas as per Indian locale

/******************* Math Object *******************/
console.log(Math);
console.log(Math.abs(-5)); // this will give the absolute value of -5
console.log(Math.round(4.6)); // this will round the number to nearest integer
console.log(Math.floor(4.9)); // this will round the number down to nearest integer
console.log(Math.ceil(4.1)); // this will round the number up to nearest integer
console.log(Math.min(1,2,3,4,5)); // this will give the minimum value among the numbers 
console.log(Math.max(1,2,3,4,5)); // this will give the maximum value among the numbers
console.log(Math.random()); // this will give a random number between 0 and 1
console.log(Math.random()*100); // this will give a random number between 0 and 100


const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1)+min))