//const user2=new Object()// this is another way to create an object, its equivalent to {}, and its singleton object
const user2={};// not singleton object, we can create multiple instances of this object
user2.id="123455";
user2.name="sagni";
user2.age=21;
user2.location="India";
//console.log(user2);


const ru={
    email:"ujghkjsg",
    isloggedin:false,
    fullname:{
        firstname:"rahul",
        lastname:"kumar"
    }
}
console.log(ru);
//console.log(ru.fullname.firstname); //dot notation
console.log(ru['fullname']['lastname']); //bracket notation


const o1={'a':1,'b2':3,'c4':4};//keys are treated as strings
const o2={'1':1,'2':2,'3':3,'4':4};//keys are strings

const o3=Object.assign({},o1,o2);//merging two objects, {} this is the target object where the merged values will be stored, other are source
console.log(o3);
const o4={...o1,...o2};//spread operator to merge two objects
console.log(o4);
