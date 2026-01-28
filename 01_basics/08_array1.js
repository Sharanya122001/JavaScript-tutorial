const arr=[1,2,3,4,5];
console.log(arr[0]); // this will give the first element of the array
console.log(arr.length); // this will give the length of the array

//aarray methods
arr.push(6); // this will add 6 to the end of the array
console.log(arr);
console.log(arr.pop()); // this will remove the last element of the array and return it
console.log(arr.unshift(8));
arr.shift(); // this will remove the first element of the array and return it
console.log(arr);
console.log(arr.indexOf(3)); // this will give the index of the first occurrence of 3
console.log(arr.includes(-1)); // this will return true if 4 is present in the array

const newa=arr.join();
console.log(newa); // this will convert the array to string with commas in between
console.log(typeof newa); // this will return 'string'

//slice and splice
const a1=[1,2,3,4,5,6,7,8,9];
const a2=a1.slice(1,3); // this will give a new array from index 1 to 3, 3 is not included, original array will not be modified
console.log("A",a2);
a1.splice(2,3); // this will remove 3 elements from index 2, and modify the original array
console.log("B",a1);