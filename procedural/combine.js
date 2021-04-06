function interleave(arr1, arr2) {
  let altered = [];
  arr1.forEach((el, idx) => altered.push(el, arr2[idx]));
  return altered;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
