const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

const frequencyMap = {}

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    // skip for empty elements like "".
    if(element===undefined){
        continue;
    }

    if(!frequencyMap[element]){
        frequencyMap[element] = 0;
    }else{
        frequencyMap[element]++;
    }
}

for(let i in frequencyMap){
    console.log("key: "+i+" frequency: "+frequencyMap[i]);
}

let a = "delhi";
let PRICE = "2cr"

let obj = {};

obj[a] = PRICE;

console.log(obj)

const country = ["india", "america", "austria", "south Africa"]
const population = [89437, 954377, 7327, 9343453,]

const data = {}

country.map((country, index)=>{
    data[country] = population[index];
})

console.log(data)

const dataA = [1, 2, 3, 4, 7, 6, 7, 8, 9, 10]

const newArr = dataA.slice(3, 7)

console.log(newArr)

const results = dataA.find((i)=>{
  return i===5;
})

console.log(results)

const cart  = [
    {id:1, product:"iphone", price:30000},
    {id:2, product:"tv", price:343300},
    {id:3, product:"laptop", price:8450},
    {id:4, product:"airplane", price:12000}
]

const ans  = cart.every((item)=>item.price>=8450)

console.log(ans)

const lowToHight  = cart.sort((a,b)=>a.price-b.price)

console.log(lowToHight)

// METHOD ON array
// push, pop, shift, upshift, foreach, map, filter, reduce, some, sort, find every, fill, slice, splice, 


const newObject = {name:"sumit", age:34, height:'7.6 inch', weight:'57 kg'}


for(let i in newObject){
    console.log(`key: ${i} --- value: ${newObject[i]}`)
}


let set = new Set(arr);
//set.add()
console.log(set)

for(let i of set){
    console.log(i)
}

const person = new Map();

person.set("firstName", "harshit")
person.set("lastName", "Chukanda")
person.set("gender", "male")
person.set("age", "22")

// console.log(person)

for(let key of person){
    console.log(key)
}

function userInfo(){
    console.log(`my name is ${this.name} and my age is ${this.age}`)
}
const person1 = {
    name:"suresh",
    age: 21,
    about: userInfo
}

const person2 = {
    name:"naresh",
    age: 43,
    about: userInfo
}

const person3 = {
    name:"bukesh",
    age: 34,
    about: userInfo
}

const person4 = {
    name:"gangesh",
    age: 24,
    about: userInfo
}

console.log(person4.about())

// this key represent which on which this is called. here this is called on person4 so this is representing person4


/// call, apply , bind method on function

const user1 = {
    name: "mohit",
    age : 22,
    about: function(weight, height){
        console.log(this.name, this.age)
    }
}

const user2 = {
    name: "rajan",
    age : 12
}

user1.about.call(user2, 50, 5)
user1.about.apply(user2, [50, 5])

const func = user1.about.bind(user2, 70, 3)

func()