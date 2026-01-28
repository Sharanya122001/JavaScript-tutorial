const name="sharanya"
const age=25

console.log(`my name is ${name} and i am ${age} years old`)// this is string interpolation

const gamename=new String("sharanya") // this is string object in this we are creating the object of the string class
//if we want to access methods of string class we have to create string object we can see in the developertools
console.log(gamename[0])

console.log(gamename.__proto_); // this will give all the methods of string class
console.log(gamename.length); // this will give length of the string
console.log(gamename.toUpperCase()); // this will convert the string to uppercase
console.log(gamename.toLowerCase()); // this will convert the string to lowercase
console.log(gamename.indexOf('a')); // this will give the index of the first occurrence of 'a'
console.log(gamename.charAt(3)); // this will give the character at index 3
console.log(gamename.substring(1,4)); // this will give the substring from index 1 to 4, 4 is not included
console.log(gamename.slice(1,4)); /* this will give the substring from index 1 to 4, 4 is not included
                                    but it can also take negative indices */
console.log(gamename.replace('sharanya','sagni')); // this will replace 'sharanya' with 'sagni'
console.log(gamename.includes('a')); // this will return true if 'a' is present in the string
console.log(gamename.split('a')); // this will split the string at each occurrence of 'a' and return an array
console.log(gamename.trim()); // this will remove whitespace from both ends of the string
console.log(gamename.concat(' hotri')); // this will concatenate ' hotri' to the string
console.log(gamename.repeat(3)); // this will repeat the string 3 times
console.log(typeof gamename); // this will return 'object' because gamename is a string object


//example for replace
const url="https://www.youtube.com/watch?v=abcdefg";
const newUrl=url.replace("?","--");
console.log(newUrl); // https://www.vimeo.com/watch?v=abcdefg