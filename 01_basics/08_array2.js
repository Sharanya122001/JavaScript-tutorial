// const h=["Hello", "World", "!"];
// const w=["How", "are", "you", "?"];

// h.push(w); // adds array w as the last element of array h
// console.log(h); // ["Hello", "World", "!", Array(4)]// this will give array in array

// w.push(h); // adds array h as the last element of array w
// console.log(w); // ["How", "are", "you", "?", Array(4)]


// const a=h.concat(w); // this will concatenate array w to array h and return a new array
// console.log(a); // ["Hello", "World", "!", Array(4)]// original array h will not be modified    


// //we can spread the elements of an array using spread operator(...)
// const b=[...h,...w]; // this will spread the elements of array h and w and create a new array
// console.log(b); // ["Hello", "World", "!", "How", "are", "you", "?"]

const c=[1,2,3,[4,5],[6,7],8,[7,[9,10]]];
console.log(c.flat()); // this will flatten the array by 1 level [1, 2, 3, 4, 5, 6, 7, 8, 7, Array(2)]
console.log(c.flat(2)); // this will flatten the array by 2 levels [1, 2, 3, 4, 5, 6, 7, 8, 7, 9, 10]
// here flat() method is used to flatten the array, it is having the depth parameter which is optional, by default it is 1
// if we want to flatten the array completely we can use Infinity as depth parameter
console.log(c.flat(Infinity)); // this will flatten the array completely [1, 2, 3, 4, 5, 6, 7, 8, 7, 9, 10]


console.log(Array.isArray(c)); // this will return true if c is an array
console.log(Array.isArray("sharanya")); // this will return false if the given value is not an array
console.log(Array.from("sharanya")); // this will convert the string to array ['s', 'h', 'a', 'r', 'a', 'n', 'y', 'a']


let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3)); // this will create an array from the given values [100, 200, 300] 