function centerOf(str) {
  let midx = Math.floor(str.length / 2);
  return str.length % 2 !== 0 ? str[midx] : str.slice(midx - 1, midx + 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"