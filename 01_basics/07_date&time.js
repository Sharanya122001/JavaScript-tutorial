const date =new Date();
console.log(date); // this will give the current date and time
console.log(date.toString()); // this will give the date in string format
console.log(date.toDateString()); // this will give the date in string format without time
console.log(date.toLocaleString()); // this will give the date in locale string format

console.log(typeof date); // this will return 'object' because date is a date object


let d=new Date(2023,0,23); // month is 0-indexed so 0 is January
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toLocaleString());


let d1=new Date(); // current date and time
console.log(d1.getDay()); // this will give the day of the week (0-6) 0 is Sunday
console.log(d1.getDate()); // this will give the date of the month (1-31)
console.log(d1.getMonth());
console.log(d1.getFullYear()); // this will give the year
console.log(d1.getHours()); // this will give the hours (0-23)
console.log(d1.getMinutes()); // this will give the minutes (0-59)
console.log(d1.getSeconds()); // this will give the seconds (0-59)
console.log(d1.getMilliseconds()); // this will give the milliseconds (0-999)
let a=d1.toLocaleString('default',{weekday:'long'}); // this will give the full name of the day
console.log(a);


let timestamp=Date.now();
console.log(timestamp); // this will give the current timestamp in milliseconds

console.log(Math.floor(timestamp/1000)); // this will give the current timestamp in seconds
