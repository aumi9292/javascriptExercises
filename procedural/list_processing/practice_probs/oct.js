//given a string that represents an octal, base 8 number, return a number that is the return value of converting the octal string to a decimal, base 10 number

//in: string out: number

//'1' -- 1 * 8 ** 0 = 1
//'10' -- 0 * 8 ** 0 + (1 * 8 ** 1) = 8
//'130' -- (0 * 8 ** 0) + (3 * 8 ** 1) + (1 * 8 ** 2)

//strings, numbers

//algorithm
//split up each string into an array of string numbers ['1', '0']
//convert each digit to a number [1, 0]
//reverse the array [0, 1]
//replace each element with the element * 8 ** index [0, 8]
//sum all elements 8


function octalToDecimal(oct) {
  return oct.split('')
  .reverse()
  .map(oct => Number(oct))
  .map((tmp, idx) => tmp * 8 ** idx)
  .reduce((acc, curr) => acc + curr);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9