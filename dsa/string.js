// reverse string

// function reverseString(str) {
//   const strArray = str.split(''); // Convert the string to an array

//   for (let i = 0; i < Math.floor(strArray.length / 2); i++) {
//     // Swap characters from the beginning and end of the array
//     const temp = strArray[i];
//     strArray[i] = strArray[strArray.length - 1 - i];
//     strArray[strArray.length - 1 - i] = temp;
//   }

//   // Join the array back into a string
//   let reversedStr = '';
//   for (let i = 0; i < strArray.length; i++) {
//     reversedStr += strArray[i];
//   }

//   return reversedStr;
// }

// // Example usage:
// const inputString = "Hello, World!";
// const reversedString = reverseString(inputString);
// console.log(reversedString); // Output: "!dlroW ,olleH"


// function getAllSubstrings(str){
// let subStrings = [];

// for(let i = 0; i < str.length; i++){
//   let subString = "";
//   for(let j = i; j<str.length; j++){
//     subString += str[j];
//     subStrings.push(subString);
//   }
// }

//     return subStrings

// }

// Example usage:
// const inputString = "abc";
// const result = getAllSubstrings(inputString);
// console.log(result);



let str = "let"

const permutation = (str, result) =>{
  if(str.length === 0){
    console.log(result)
  }

  for(let i = 0; i < str.length; i++){
    let left = str.substring(0, i);
    let right = str.substring(i+1);
    let rest = left + right;
    permutation(rest, result+str[i])
  }
}

permutation(str, '');

