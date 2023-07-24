// const userMethods = {
//     about: function(){
//         console.log(`${firstName} ${lastName} is a ${occupation}`)
//     },

//     is18: function(){
//        return this.age>=18;
//     },

//     sing: function(){
//         console.log(`${firstName}, I am singing`)
//     }
// }
//prototype
function createUser(firstName, lastName, age, occupation, email, address){
    // const user = Object.create(userMethods);
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.occupation = occupation;
    user.email = email;
    user.address = address;
    user.age = age;
    return user
}

createUser.prototype.about = function(){
            console.log(`${this.firstName} ${this.lastName} is a ${this.occupation}`)
        }

createUser.prototype.is18 = function(){
                   return this.age>=18;
                }

 createUser.prototype.sing = function(){
                    console.log(`${this.firstName}, I am singing`)
                }


const user1 = createUser("Ram", "Lakshman", 17, "save world", "ram@gmail.com", "joan")

user1.sing()
console.log(user1.is18()); 
user1.about();