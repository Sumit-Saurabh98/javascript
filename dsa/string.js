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

function getAllSubstrings(str) {
  const substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = "";
      for (let k = i; k < j; k++) {
        substring += str[k];
      }
      substrings.push(substring);
    }
  }

  return substrings;
}

// Example usage:
const inputString = "abc";
const result = getAllSubstrings(inputString);
console.log(result);


