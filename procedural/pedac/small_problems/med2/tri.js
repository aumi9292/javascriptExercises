// problem: given three numbers, return one of 4 strings--'equilateral', 'isosceles', 'scalene', or 'invalid' depending on triangle rules
//  triangle rules
//    all side lengths must be larger than 0
//    the two shorter sides must sum to a number larger than the third number

// data structures: input: numbers; output: string
// array could be used to sort the numbers 

// algorithm
// return 0 if any given numbers are <= 0
// return 'invalid' if given more than 3 args
// return 'equilateral' if all 3 args are equal
// sort the array of given numbers in descending order (b - a)
// init a variable longest and set it equal to the first element
// init a variable otherSides and set it equal to the other two sides
// return 'invalid' if otherSides sums to =< longest
// return 'scalene' if neither otherSides is equal to longest
// else return 'isosceles'

function triangle(...sides) {
  if (sides.some(side => side <= 0) || sides.length > 3) return 'invalid';
  if (sides.every(side => side === sides[0])) return 'equilateral';
  let [longest, ...otherSides] = sides.sort((a, b) => b - a);
  if (otherSides.reduce((total, len) => total + len) <= longest) return 'invalid';
  return otherSides.some(side => side === longest) ? 'isosceles' : 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(3, 1, 1, 10));        // "invalid"