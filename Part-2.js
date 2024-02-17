// Palindrome String

let str = "Listen";

function String(str) {
  let a = str.split("").reverse().join("");
  return str === a;
}

//console.log(String(str));

//  To count the frequency of each number in the array

let num = [1, 2, 4, 2, 1, 2, 5, 6, 4, 3, 8, 7, 9, 7];

function Count_Frequency(num) {
  let numValue = {};
  let count = 1;
  for (let i = 0; i < num.length; i++) {
    if (!numValue.hasOwnProperty(num[i])) {
      numValue[num[i]] = count;
    } else {
      numValue[num[i]] = numValue[num[i]] + 1;
    }
  }

  return numValue;
}

//console.log(Count_Frequency(num));

//Removes any duplicate elements from the array and return the modified array in ascending order

let arr = [1, 2, 4, 2, 1, 2, 5, 6, 4, 3, 8, 7, 9, 7];

function Remove_Duplicate(arr) {
  let num = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!num.has(arr[i])) {
      num.add(arr[i]);
    }
  }

  let sortarr = Array.from(num).sort((a, b) => a - b);
  return sortarr;
}

//console.log(Remove_Duplicate(arr));

// remove any key-value pairs where the value is falsy. Falsy values include false, 0, "" (empty string), null, undefined, and NaN

const obj = {
  a: 1,
  b: null,
  c: undefined,
  d: 0,
  e: 2,
  f: false,
  g: 3,
};

function RemoveFalsyValues(obj) {
  let result = Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});
  return result;
}

console.log(RemoveFalsyValues(obj));
