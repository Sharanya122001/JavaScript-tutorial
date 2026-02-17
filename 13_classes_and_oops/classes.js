// 🌟 Step 3: Why Not class User(name, age)?
// Because:
// 👉 A class definition is NOT a function definition.
// 👉 The parameters belong to the constructor, not the class itself.

class user{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}
const p=new user("chai","mail","123444")
console.log(p.encryptPassword())


class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends  User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
}