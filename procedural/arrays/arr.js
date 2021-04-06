function concat(array1, secondArgument) {
  let concated = []; 
  for (let idx = 0; idx < array1.length; idx++) {
    concated.push(array1[idx]); 
  }
  if (Array.isArray(secondArgument)) {
    for (let idx = 0; idx < secondArgument.length; idx++) {
      concated.push(secondArgument[idx]); 
    }
  } else {
    concated.push(secondArgument)
  }
  return concated; 
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }

function concat2(array1, ...extras) {
  let concated = []; 
  for (let idx = 0; idx < array1.length; idx++) {
    concated.push(array1[idx]); 
  }
  for (let extInd = 0; extInd < extras.length; extInd++) {
    if (Array.isArray(extras[extInd])) {
      for (let idx = 0; idx < extras[extInd].length; idx++) {
        concated.push(extras[extInd][idx]); 
      }
    } else {
      concated.push(extras[extInd])
    }
  }
  return concated; 
}

console.log(concat2([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat2([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat2([1, 2], ['three'], 4));               // [1, 2, "three", 4]