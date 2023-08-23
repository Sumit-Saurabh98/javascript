function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}



about.call(user1, "guitar", "bach");
// about.call(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();


    
