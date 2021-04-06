/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

// problem
// given a string that contains a set of numbers, where only the "significant" digit of each number is written, return a list of complete numbers

// rules 
  // each number in the list is delimited by - : or .. 
  // the given string can hold numbers or ranges of numbers
  // if the delimiter is - : or .., the two digits on either side represent a lower and upper limit, the lower number up to the higher number should be included in the output 

// sub problem 1
  // given a list of "significant digit" numbers, return a list of the full versions of each number in the given list 
  // given a string of digits separated by commas
  // return an array of numbers 

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21

  // input: string, output: array of numbers

  // algorithm
    // init a holding array for each complete number  
    // split the string by ', ' ['1', '3', '7', '2', '4', '1']
    // check the string length at the first element '1'
      // init insignificant
        // if the length is 1, set insignificant to 0
        // if the length is greater than 1, set insignificant to str.slice(0, str.length - 2) '543' -- '54'
      convert insignificant to a number
    // map each digit to its number equivalent [1, 3, 7, 2, 4, 1]
    // iterate over this array, keeping track of the array and each index
      //if index is 0, push this number, converted to a string, concatenated with the current insignificant digit, to completeNumbers array [].push(Number('0' + '1')), continue to the next iteration
      // for each remaining element, check if it is greater than the number at the previous index
        // if it is, push this number, converted to string, concatenated with the current insignificant digit, then converted back into a number, into completeNumbers
        // if the current significant digit is less than the last significant digit, increment the insignificant digit by one, and then continue the process of converting the number to a string, concatenating it with the insignificant digit, converting back to a number, and pushing to array of numbers
*/

function getCompleteNumbers(significants) {
  let completeNumbers = [];
  let signifs = significants.split(', ');
  let first = String(signifs[0]);
  let insignificant = first.length === 0 ? '0' : first.slice(0, first.length - 1);
  console.log(insignificant)
  signifs.forEach((num, idx, set) => {
    if (idx === 0) {
      completeNumbers.push(Number(num));
    } else {
      if (Number(num) > Number(set[idx - 1])) {
        completeNumbers.push(Number(insignificant + String(num)));
      } else {
        insignificant = String(Number(insignificant[0] || insignificant) + 1);
        completeNumbers.push(Number(insignificant + num));
      }
    }
  });
  return completeNumbers;
}

console.log(getCompleteNumbers("1, 3, 7, 2, 4, 1")) // --> [1, 3, 7, 12, 14, 21]
console.log(getCompleteNumbers("1, 3, 7, 2, 4, 1, 8, 4, 3, 2, 01")) // --> [1, 3, 7, 12, 14, 21]

// problem 2
// generate a full list of complete numbers (insignificant and significant), given 1 or more ranges of numbers
// build a string of 

// given a string of comma-delineated ranges
// return an array of numbers

// rules
// each range is separated by ', '
// the lower and upper limits of each range are delineated with - : or ..
// ranges can be chained together-- 1:5:2-- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// 

// examples 
  // "1-3, 1-2" -- "1, 2, 3, 1, 1"
  // "1:5:2" -- "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"

// algorithm 
// init range holder [] or '' 
// split each string by ', ' ['1-3', '1-2' ]
// mpa over each string an array of the characters split by /(\.\.)|(-)|(:)/ [['1', '3'], ['1', '2']]
// 

function generateRange(arr) {
  let range = [];
  let start = arr[0];
  let end = arr[arr.length - 1]
  for (let iterator = Number(start); iterator <= Number(end); iterator++) {
    range.push(iterator);
  }
  return range.join(', ');
}


function expand(shortHand) {
  let ranges = shortHand.split(', ').map(pair => pair.replace(/[^0-9]/g, ', '));
  return ranges.map(range => getCompleteNumbers(range))
  //.map(range => generateRange(range));
  return ranges.map(range => generateRange(range));
  let cleanRanges = ranges.map(range => generateRange(range)).join(', ');
  return cleanRanges
  //return getCompleteNumbers(cleanRanges);
}

console.log(expand("1-3, 1-2"));
console.log(expand("1:5:2"));
console.log(expand("104-2"));
console.log(expand("104-02"));
console.log(expand("545, 64:11"));

// "1-3, 1-2" --> 1, 2, 3, 11, 12 "1, 2, 3, 1, 2"
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611
