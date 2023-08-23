// Promise
// let's make fried rice

const ingredients = ["rice", "oil", "vegetable", "salt"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    ingredients.includes("rice") &&
    ingredients.includes("oil") &&
    ingredients.includes("vegetable") &&
    ingredients.includes("salt")
  ) {
    resolve("Fried Rice");
  }else{
    reject("Couldn't do it!");
  }
});

friedRicePromise.then((res) => {
    console.log("Let's eat ",res)
}).catch((err) => {
    console.log(err)
})
