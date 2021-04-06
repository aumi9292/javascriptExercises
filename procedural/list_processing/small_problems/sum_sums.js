//given an array of numbers, return a number that represents the sum of adding each leading subsequence of numbers 

let sumOfSums = function (arr) {
  let sos = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    let roll = arr.slice(0, idx + 1).reduce((acc, curr) => acc + curr);
    sos += roll;
  }
  return sos;
};

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35