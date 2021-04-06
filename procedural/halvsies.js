//given one array, return a 2d array with the first half (rounded up if the length is odd) in the first arr and the second half in the second arr
function halvsies(arr) {
  let half = Math.ceil(arr.length / 2);
  let first = arr.slice(0, half);
  let second = arr.slice(half);
  return [first, second];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]