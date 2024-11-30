/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
    for(const char of str){
      const lowerChar = char.toLowerCase();
      if(lowerChar == 'a' || lowerChar == 'e' || lowerChar == 'i'|| lowerChar == 'o' || lowerChar == 'u') count++;
    }
    return count;
}

module.exports = countVowels;