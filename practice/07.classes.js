// we can do the same thing using classes the we were doing with constructor function
// classes are fake, internally classes use constructor function

class CreateUser {
  constructor(firstName, lastName, email, age, password) {
    // constructor called
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.password = password;
  }
  about(){
    console.log(`Hi, I am ${this.firstName}`)
  }
  is18(){
    return this.age>=18
  }
  checkPassword(){
    return this.password.length
  }
}

// function CreateUser (firstName, lastName, email, age, password) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.password = password;
// }

// CreateUser.prototype.about = function(){
//     console.log(`Hi, I am ${this.firstName}`)
// }

// CreateUser.prototype.is18 = function(){
//     return this.age>=18
// }

// CreateUser.prototype.checkPassword = function(){
//     return this.password.length
// }

const user1 = new CreateUser('Ram', "John", "ram@gmail.com", 56, "ram@123")

user1.about()

console.log(user1.checkPassword())

console.log(Object.getPrototypeOf(user1))
