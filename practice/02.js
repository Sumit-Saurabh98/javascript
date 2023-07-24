const userMethods = {
    about: function(){
        console.log(`${firstName} ${lastName} is a ${occupation}`)
    },

    is18: function(){
       return this.age>=18;
    },

    sing: function(){
        console.log(`${firstName}, I am singing`)
    }
}
// --proto__ or [[prototype]]
function createUser(firstName, lastName, age, occupation, email, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.occupation = occupation;
    user.email = email;
    user.address = address;
    user.age = age;
    return user
}

const user1 = createUser("sumit", "saurabh", 22, "developer", "sumit@gmail.com","alpha 1")

// console.log(user1)

// console.log(user1.is18())


//prototype=> only function return prototype

function hello(){
    console.log("hello, everybody")
}



hello.prototype.abc = "abc"

hello.prototype.sing = function(){
    console.log("lalalalalalalalalal")
}

console.log(hello.prototype.sing())