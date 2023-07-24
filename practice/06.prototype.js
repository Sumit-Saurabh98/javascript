// constructor function

function CreateUser (firstName, lastName, email, age, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.password = password;
}

CreateUser.prototype.about = function(){
    console.log(`Hi, I am ${this.firstName}`)
}

CreateUser.prototype.is18 = function(){
    return this.age>=18
}

CreateUser.prototype.checkPassword = function(){
    return this.password.length
}

const user1 = new CreateUser('Ram', "John", "ram@gmail.com", 56, "ram@123")

user1.about()

console.log(user1.checkPassword())

for(let key in user1){
    // console.log(key)
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}