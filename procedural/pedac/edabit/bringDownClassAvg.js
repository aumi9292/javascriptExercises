// start time: 12:55
/*
What is the percentage you can score on a test, which singlehandedly brings down the class average by 5%? Given an array of your classmates scores, create a function that returns the answer. Round to the nearest percent.

takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"]) ➞ "54%"

takeDownAverage(["10%"]) ➞ "0%"

takeDownAverage(["53%", "79%"]) ➞ "51%"

No tests will include empty arrays or require negative percentages.
Note that you need to return a string.

// Problem
//  Given an array of string digits, return a string digit (formatted with % after the 1 or 2 digit number) that represents the first number that would lower the average of all numbers parsed from the array

// Rules
//  Can always expect an array for input
//  Can always expect the array to have strings (not be empty)
//  Can always expect strings to represent valid test scores (formatted as 1-2 digits followed by a %)
//  Array of test scores will always have at least one score

// Requirements
//  Must return a string number that represents the first number that will lower the average of all test scores by 5%

// Examples
takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"]) // "54%"
takeDownAverage(["10%"]) // "0%"
takeDownAverage(["53%", "79%"]) // "51%"

// Data Structures
//  Input: Array of string digits
//  Output: A new string digit
//  Intermediate: array, numbers

// Algorithm
//  map over each element its coerced number equivalent, save to testScores [53, 79]
//  save the length of the testScores array as numberOfTests
//  reduce to a sum 132
//  divide by the length of the array, save as average 66
//  select the minimum grade from the array, save as min 53
//  
//  init potentialLowest at min - 1 52
//    until Math.round(avg - ((sum + potentialLowest) / (numberOfTests + 1))) < 5 
//          Math.round(66  - (61.333333)) < 5
//      decrement potential lowest
//  save potential lowest as lowest 51

//  format number into grade string 51
//  coerce to string '51'
//  add '%' to end of string '51%'
//  return this string 
*/

// function reCompute(testScores, potentialLowest) {

// }

function takeDownAverage(scores) {
  let testScores = scores.slice().map(formattedGrade => {
    let strGrade = formattedGrade.replace(/[^0-9]/g, '');
    return Number(strGrade);
  });

  let numberOfTests = testScores.length;
  let totalPts = testScores.reduce((sum, curr) => sum + curr, 0);
  let avg = totalPts / numberOfTests;
  let min = testScores.sort((a, b) => a - b)[0];
  let lowest;
  for (let potentialLowest = min; Math.round(avg - ((totalPts + potentialLowest) / (numberOfTests + 1))) <= 5; potentialLowest--) {
    let test = Math.round(avg - ((totalPts + potentialLowest) / (numberOfTests + 1))) == 5
    if (test) {
      lowest = potentialLowest;
    }
  }
  return lowest;
}

console.log(takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"])); // "54%"
console.log(takeDownAverage(["10%"])); // "0%"
console.log(takeDownAverage(["53%", "79%"])); // "51%"