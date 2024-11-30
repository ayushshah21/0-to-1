/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();
  const sortedStr1 = newStr1.split('').sort();
  const sortedStr2 = newStr2.split('').sort();
  if(sortedStr1.length != sortedStr2.length) return false;
  for(let i = 0; i < sortedStr1.length; i++){
    let char1 = sortedStr1[i];
    let char2 = sortedStr2[i];
    if(char1 === char2){
      continue;
    }
    else{
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
