//Longest Substring Without Repeating Characters

function LongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let currentIndex = s[i];
    if (charMap.has(currentIndex) && charMap.get(currentIndex) >= start) {
      start = charMap.get(currentIndex) + 1;
    }

    charMap.set(currentIndex, i);

    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

let s = "abcabcbb";
//console.log(LongestSubstring(s));

// missing number in an array

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let exceptedsum = (n * (n + 1)) / 2;
  let acutalsum = arr.reduce((sum, num) => sum + num, 0);

  let result = exceptedsum - acutalsum;

  return result;
}

const numbersArray = [1, 2, 4, 6, 3, 7, 8];
//console.log(findMissingNumber(numbersArray));
