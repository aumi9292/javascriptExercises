//given two arrays, return a single array that holds all products from multiplying each element in the first array with each element in the second array, sorted

//for each number in the first array
//multiply it with each number in the second array
//push all products to a new array
//sort array in ascending order

let multiplyAllPairs = function (arr1, arr2) {
  let products = [];
  arr1.forEach(num => {
    arr2.forEach(num2 => {
      products.push(num * num2);
    });
  });
  return products.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]