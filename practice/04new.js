function createUser(name, age){
    this.name = name;
    this.age = age;
}

// new key word
// 1.) create a empty object
//2.) create this

createUser.prototype.about = function(){
    console.log(this.name, this.age);
}

const user1  = new createUser("himanshu", 45)

createUser.prototype.sing = function(){
    console.log(this.name, this.age, "i am singing")
}

user1.about()

user1.sing()