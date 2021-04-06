function isAllUnique(string) {
  let toCheck = string.toLowerCase().replaceAll(/\s/g, '').split('');
  let verdict = toCheck.some(function (char) {
    return toCheck.indexOf(char) !== toCheck.lastIndexOf(char);
  });
  return !verdict;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true