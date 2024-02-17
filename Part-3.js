// find the even number from an array

let arr = [1, 2, 5, 4, 6, 8, 11, 21, 22];

function EvenNum(arr) {
  let findevennum = arr.filter((num) => num % 2 === 0);

  return findevennum;
}

//console.log(EvenNum(arr));

// Prints the phrase 'Good morning' three times every second

function WriteContent() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("Good morning"), i * 1000);
  }
}

//WriteContent();

// factorial of a number

function Factorial(n) {
  if (n <= 0 || n == 1) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
}
let n = 10;
//console.log(Factorial(n));

// Given Two strings, Rreturn true if they are anagrams of  one another

function AnagramsStr(S1, S2) {
  let cleanS1 = S1.toLowerCase();
  let cleanS2 = S2.toLowerCase();

  let sortS1 = cleanS1.split("").sort().join("");
  let sortS2 = cleanS2.split("").sort().join("");

  return sortS1 === sortS2;
}

let str1 = "Listen";
let str2 = "Good";

console.log(AnagramsStr(str1, str2));
