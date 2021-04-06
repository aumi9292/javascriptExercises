function isBalanced(str) {
  let cleanChars = str.replace(/[^()]/g, '').split('');
  let pCount = 0;
  for (let idx = 0; idx < cleanChars.length; idx++) {
    pCount += cleanChars[idx] === '(' ? 1 : -1;
    if (pCount < 0) return false;
  }
  return pCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false