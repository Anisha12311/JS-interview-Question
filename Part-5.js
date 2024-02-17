// Flat array
// input = [1, [2, 3, 4, [5, [3], 4]], 4, [4, 3]];
// output = [1, 2, 3, 4, 5, 6, 3, 4, 4, 4, 3 ]

function flatArray(arr, depth) {
  return arr.reduce((acc, value) => {
    if (Array.isArray(value) && depth > 0) {
      return acc.concat(flatArray(value, depth - 1));
    } else {
      return acc.concat(value);
    }
  }, []);
}
const arr = [1, [2, 3, 4, [5, [3], 4]], 4, [4, 3]];

//console.log(flatArray(arr, 1));

function chunkArr(chunk, size) {
  let result = [];

  for (let i = 0; i < chunk.length; i += size) {
    result.push(chunk.slice(i, i + size));
  }
  return result;
}
let chunk = [1, 2, 3, 4, 5];
let size = 4;

//console.log(chunkArr(chunk, size));
//output [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

const obj = { 0: "a", 1: "b", 2: "c" };
// output = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const result = Object.keys(obj).map((key) => [key, obj[key]]);

//console.log(result);

const objectModify = { a: 1, b: 2, c: 3 };

//output = { a: 2, b: 3, c: 4 }

let data = {};

for (let key in objectModify) {
  data[key] = objectModify[key] * 2;
}
//console.log(data);
function deepFreeze(obj) {
  if (obj === null || typeof obj != "object") {
    return obj;
  }

  const properties = Object.keys(obj);
  properties.forEach((key) => {
    const nestedValue = obj[key];

    if (typeof nestedValue === "object" && nestedValue != null) {
      obj[key] = deepFreeze(nestedValue);
    }
  });
  return Object.freeze(obj);
}

const obj1 = {
  a: 1,
  b: {
    name: "Apex",
  },
};

obj1.b.name = "Jhon";

console.log(obj1);

deepFreeze(obj1);
obj1.a = 2;
obj1.b.name = "Alice";
console.log(obj1);
