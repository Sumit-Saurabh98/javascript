class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user1 = new User("John", "ankonda", 34);

console.log(user1)
console.log(user1.fullName) // we can directly call the method without ().

user1.fullName = "bara bakra"

console.log(user1.fullName)