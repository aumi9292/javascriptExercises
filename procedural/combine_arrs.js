function union(arr1, arr2) {
  let combined = [];
  let concated = arr1.concat(arr2);
  for (let idx = 0; idx < concated.length; idx++) {
    let current = concated[idx];
    if (combined.includes(current)) continue;
    combined.push(current);
  }
  return combined;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function union2(arr1, arr2) {
  return arr1.slice().concat(arr2.filter(el => !arr1.includes(el)));
}

console.log(union2([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function union3(...arrs) {
  let fin = arrs[0].slice();
  let toAdd = arrs.slice(1);
  toAdd.forEach(arr => fin = fin.concat(arr.filter(el => !fin.includes(el))));
  return fin;
}

console.log(union3([1, 3, 5], [3, 6, 9], [7, 8, 9]));    // [1, 3, 5, 6, 9]
