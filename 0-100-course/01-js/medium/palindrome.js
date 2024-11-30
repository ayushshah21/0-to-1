/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const trimStr = str.trim();
  const newStr = trimStr.toLowerCase();
  let low = 0;
  let high = str.length - 1;
  console.log(newStr);
  while(low < high){
    let lowChar = newStr.charAt(low);
    let highChar = newStr.charAt(high);
    if(lowChar === ' ' || lowChar === '.' || lowChar === '?' || lowChar === ',' || lowChar === '!'){
      low++;
      continue;
    }
    if(highChar === ' ' || highChar === '.' || highChar === '?' || highChar === ',' || highChar === '!'){
      high--;
      continue;
    }
    console.log(newStr);
    console.log(lowChar + " " + highChar);
    if(lowChar !== highChar) return false;
    low++;
    high--;
  }
  return true;
}

module.exports = isPalindrome;
