

let array = [1, 2, 3, 4, 5, 2, 3, 4, 1, 2, 3, 2, 5, 4, 2, 3, 3, 6, 6];

const keyValue = {};

for(let i = 0; i < array.length; i++) {
  if(keyValue[array[i]]){
    keyValue[array[i]]++;
  }else{
    keyValue[array[i]] = 1;
  }
}

// console.log(keyValue)


// filter array

function removeDuplicates(arr) {
  // Create an empty array to store unique values
  const uniqueArray = [];

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is not already in the uniqueArray
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

// Example usage:
// const inputArray = [1, 2, 2, 3, 4, 4, 5];
// const uniqueValues = removeDuplicates(inputArray);
// console.log(uniqueValues); // Output: [1, 2, 3, 4, 5]


function removeDuplicates(arr) {
  const uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }
  
  return uniqueArray;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueValues = removeDuplicates(inputArray);
console.log(uniqueValues); // Output: [1, 2, 3, 4, 5]





// const filteredArray = array.filter((ele, idx, self)=>{
//   return self.indexOf(ele)===idx
// })

// console.log(filteredArray)


// let products = ["a", "b", "c", "d", "e"];
// let prices = [23, 43, 56, 87, 69];

// const productsPrice = {};

// for (let i = 0; i < products.length; i++) {
//   productsPrice[products[i]] = prices[i];
// }

// for (let item in productsPrice) {
//   console.log(item);
//   console.log(productsPrice[item]);
// }
