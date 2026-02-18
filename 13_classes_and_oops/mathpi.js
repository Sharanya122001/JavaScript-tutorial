console.log(Object.getOwnPropertyDescriptor(Math,"PI"))
// Now you will get:

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


const chai={
    name:'ginger chai',//this are properties
    price:250,//this are properties
    isAvaliable:true//this are properties
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(Object.getOwnPropertyDescriptor(chai,"price"));
console.log(Object.getOwnPropertyDescriptor(chai,"isAvaliable"));

// Object.defineProperty(chai,'name',{//for changing single porperty
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// Object.defineProperties(chai,{
//     name:{//for changig multiple porperty
//     writable:false,
//     enumerable:false//after this we can'titerate the object
// },
// price:{
//     writable:false,
//     enumerable:false
// }})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

// for(let [key,value] of chai){ //only object is not iterable
//     console.log(`${key}:${value}`);
// }so---------->


// for(let [key,value] of Object.entries(chai)){ 
//     console.log(`${key}:${value}`);
// }

Object.defineProperties(chai,{
    name:{//for changig multiple porperty
    writable:false,
    enumerable:false//after this we can'titerate the object
},
price:{
    writable:false,
    enumerable:false
}})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(Object.getOwnPropertyDescriptor(chai,"price"));


for(let [key,value] of Object.entries(chai)){ 
    console.log(`${key}:${value}`);
}
