/*
Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

{uppercase: 10.00, lowercase: 85.00, neither: 5.00}

rules 
//  return values in object should be fixed floats with two decimal places
// input will always be string, always have length of at least 1
// spaces count as "neither" characters

// algorithm 
//  init a return object {}
//  split string into array of character, by empty space ['a', 'b', 'C', 'd', 'e', 'f', '1', '2', '3']

//  get the total length of the character array 9
//  iterate over the array of characters 
//  if the character matches /a-z/, add 1 to the object[lowercase]
//  if the character matches /A-Z/, add 1 to the object[uppercase]
//  if the character does not match /a-z/i, add 1 to the object[neither]

//  grab the values from the object
//  map over them the return value of fixing the quotient of val/total chars to 2 decimal places
//  
*/  

function letterPercentages(sent) {
  let counts = {lowercase: 0, uppercase: 0, neither: 0};
  let percentages = {};
  let chars = sent.split('')
  let totalChars = chars.length;
  chars.forEach(char => {
    if (/[a-z]/.test(char)) {
      counts.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  });
  let percs = Object.values(counts).map(count => (count / totalChars * 100).toFixed(2))
  Object.keys(counts).forEach((key, idx) => {
    percentages[key] = percs[idx];
  });
  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }