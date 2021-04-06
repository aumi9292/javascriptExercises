function shortLongShort(str1, str2) {
  let short; 
  let long; 
  [short, long] = [str1, str2].sort((a, b) => a.length - b.length);
  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"


function isLeapYear(year) {
 if (year % 4 === 0) {
   if ((year < 1752 || year % 100 === 0 && year % 400 === 0) || year % 100 !== 0)
   return true; 
 }
 return false; 
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true

let multisum = function(limit) {
  let sum = 0; 
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i; 
    }
  }
  return sum; 
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

function asciiValue(str) {
  let sum = 0; 
  for (let idx = 0; idx < str.length; idx++) {
    sum += str[idx].charCodeAt(); 
  }
  return sum; 
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0