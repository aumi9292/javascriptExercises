let str = 'hello';

for (let idx1 = 0; idx1 < str.length - 2; idx1++) {
  for (let idx2 = idx1 + 1; idx2 <= str.length; idx2++) {
    console.log(str.slice(idx1, idx2))
  }
}