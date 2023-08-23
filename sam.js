// function changeColor(index) {
//     const navItems = document.getElementsByClassName("nav-item");

//     // Reset the color for all items
//     for (let i = 0; i < navItems.length; i++) {
//       navItems[i].classList.remove("active");
//     }

//     // Set the color to red for the selected item
//     navItems[index].classList.add("active");
//   }

let array = [1, 2, 3, 4, 5, 2, 3, 4, 1, 2, 3, 2, 5, 4, 2, 3, 3, 6, 6];

// const keyValue = {};

// for(let i = 0; i < array.length; i++) {
//   if(keyValue[array[i]]){
//     keyValue[array[i]]++;
//   }else{
//     keyValue[array[i]] = 1;
//   }
// }

// for(let key in keyValue){
//   console.log(key, ":", keyValue[key])
// }

// console.log(array.length)


// const filteredArray = array.filter((ele, idx, self)=>{
//   return self.indexOf(ele)===idx
// })

// console.log(filteredArray)


let products = ["a", "b", "c", "d", "e"];
let prices = [23, 43, 56, 87, 69];

const productsPrice = {};

for (let i = 0; i < products.length; i++) {
  productsPrice[products[i]] = prices[i];
}

for (let item in productsPrice) {
  console.log(item);
  console.log(productsPrice[item]);
}
