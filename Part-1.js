const Product = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];

function ProductGroup(product) {
  let result = new Map();

  for (let i = 0; i < product.length; i++) {
    if (!result.has(product[i].type)) {
      result.set(product[i].type, [product[i]]);
    } else {
      let getValue = result.get(product[i].type);

      getValue.push(product[i]);
    }
  }

  return result;
}
console.log(ProductGroup(Product));

// {
//     'vegetables' : [
//         { name: "asparagus", type: "vegetables"  }
//     ]
//     'fruit' : [
//         { name: "bananas", type: "fruit"},
//         { name: "cherries", type: "fruit" }
//     ]
//     'meat' : [
//         { name: "goat", type: "meat" },
//         { name: "fish", type: "meat"}
//     ]
// }
