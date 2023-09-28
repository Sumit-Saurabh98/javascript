function calculateCharacterFrequency(inputString) {
  // Create an empty object to store character frequencies
  const charFrequency = {};

  // Iterate through the input string
  for (const char of inputString) {
    // If the character is already in the object, increment its count
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      // If the character is not in the object, initialize its count to 1
      charFrequency[char] = 1;
    }
  }

  // Create an empty result string
  let resultString = '';

  // Iterate through the keys (characters) in the charFrequency object
  for (const char in charFrequency) {
    // Append the character and its frequency to the result string
    resultString += char + charFrequency[char];
  }

  return resultString;
}

// Example usage:
// const inputString = "aaabbcddcdc";
// const result = calculateCharacterFrequency(inputString);
// console.log(result); // Output: "a3b2c3d3"


function decryptString(given) {
 
  let decrypted = ""
  let i = 0;

  while(i<given.length){
    let char = given[i];
    i++;

    let count = '';

    if(i<given.length && !isNaN(parseInt(given[i]))){
      count += given[i];
      i++;
    }

    if(count === ''){
      decrypted += char
    }else{
      for(let j = 0; j<parseInt(count); j++){
        decrypted += char;
      }
    }
  }
  return decrypted;
}

// const given = "a3b2";
// const decryptedString = decryptString(given);
// console.log(decryptedString);

// character at k th point;

function kthPoint(str){
  let result = '';
let i = 1;
  while(i<=str.length){
    let char = str[i]
    i++;

    if(i%2===0){
      result += char
    }
  }
  return result;
}

console.log(kthPoint("a3b2e1c4"))


