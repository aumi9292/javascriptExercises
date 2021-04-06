/*
Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

// problem: given a number that represents a year, return a number that represents the number of fridays that fall on the 13th throughout the year

// edge cases: numberless than 1752 or non-number (return -1)

// input: year will be greater than 1752
// output: integer number

//data structures: number, date

// algorithm 
// return -1 if typeof arg is not num or if it is less than 1752
//  init unluckyDays and set to 0
//  init a month variable and set it to 0
//  instantiate a new date with the value of year, 0, 13 to represent jan 13 of the given year
//   iterate from 0 up to 11 for each month of the year
//  set the date to the new month, leaving the day unchanged
//  get the day of week of this new date
// if it is equal to 4, increment unlucky days

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
fridayThe13ths(0);         // -1
fridayThe13ths('hello');   // -1 
*/

function fridayThe13ths(year) {
  if (typeof year !== 'number' || year <= 1752) return -1;
  let unluckyFridays = 0;
  for (let month = 0; month < 12; month++) {
    let toCheck = new Date(year, month, 13);
    if (toCheck.getDay() === 5) unluckyFridays += 1;
  }
  return unluckyFridays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(0));         // -1
console.log(fridayThe13ths('hello'));   // -1 