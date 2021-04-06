function sequence(limit) {
  let seq = [];
  for (let current = 1; current <= limit; current += 1) {
    seq.push(current);
  }
  return seq;
}

function seq2(upper) {
  return Array(upper).fill(0).map((_, idx) => idx + 1);
}

console.log(seq2(5));    // [1, 2, 3, 4, 5]
console.log(seq2(3));    // [1, 2, 3]
console.log(seq2(1));    // [1]