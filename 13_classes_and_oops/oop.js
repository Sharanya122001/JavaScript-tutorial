function User(username,logincount,isliggedin){
    this.username=username;
    this.logincount=logincount;
    this.isliggedin=isliggedin
    return this//even without this the console output is shown
}

//without using the new keyword
const userone =User("sharnay",12,true)
const usertwo =User("agnihotri",3,true)// this will be executed as no new instance is created so it will override the userone
console.log(userone)

//with new 
const userthree = new User("pooru",12,true)
const userfour = new User("krishna",3,true)
console.log(userthree)
//now we can see it is not overrideing because it is creating the new instance of that object literal