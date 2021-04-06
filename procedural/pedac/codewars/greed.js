/*
https://www.codewars.com/kata/5270d0d18625160ada0000e4/solutions/javascript
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

 In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

*/

function score(dice) {
  let counts = {};
  let score = 0;
  dice.forEach(roll => {
    counts[roll] = (counts[roll] || 0) + 1;
  })
  let rolls = Object.keys(counts);
  rolls.forEach(roll => {
    if (counts[roll] >= 3) {
      let factor = roll === '1' ? 1000 : 100;
      score += Number(roll) * factor;
      counts[roll] -= 3;
    }
    if (counts[roll] > 0) {
      if (roll === '1') {
        score += 100 * counts[roll]
      } else if (roll === '5') {
          score += 10 * Number(roll) * counts[roll];
        }
      }
    })
  return score;
}


function rot13(str) {
  let alpha = [...'abcdefghijklmnopqrstuvwxyz'];
  let cipher = str.split('').map(char => {
    if (/[a-z]/gi.test(char)) {
      let transposed = alpha[(alpha.indexOf(char.toLowerCase()) + 13) % 26];
      if (/[A-Z]/.test(char)) transposed = transposed.toUpperCase();
      return transposed;
    } else {
      return char;
    }
  }).join('');
  return cipher;
}

console.log(rot13("EBG13 rknzcyr."))
console.log(rot13("This is my first ROT13 excercise!"))
console.log(rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."))

// for in loop
//Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

//Examples
expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
//➞ { "a": 3000, "c": 1050 }
expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
//➞ { "Gucci Fur": 24600 }

// problem: Given an object with k-v pairs of items and their costs, return an object with the same or fewer k-v pairs based on whether the items cost more or less than a specified number that represents a cost to check. 

// rules 
//  k-v pairs can only be returned if their value is larger than the given 2nd argument
//  keys: strings with or without spaces
//  values: will always be a number greater than 0
//  2nd arg: if no cost, return 'Invalid' string, otherwise, it will be a number greater than 0
//  if no values are larger than the given 2nd arg, return an empty {}
//  may not receive an object, if so, return {}
//  will always be given at least one valid argument 
//  no item in the orders object will be the same (all items will be unique)
//  never receive more than 2 arguments

// tests/examples

// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000) // {"a": 3000, "c": 1050}
// expensiveOrders({'a': 10, 'b': 20}, 15) // {'b': 20}
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1050) // {"a": 3000}
// expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000) // { "Gucci Fur": 24600 }
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 10000) // {}
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }) // 'Invalid'
// expensiveOrders(10000) // {}

// Data Structures
//  input: object (orders), number (cost)
//  output: new object (based on orders), empty {} or 'Invalid' string
//    Additional potential data structures: [] (iteration, selection)

// Algorithm {'a': 10, 'b': 20}, 15
//  check if either argument is undefined
//    if given 1 argument, check if it is an object, if it is, return 'Invalid' 10000
//      if it is a number, return {} 
//  init a expensiveItems object {}
//  pull out the items from orders ['a', 'b']
//  iterate over each item 'a' and then 'b'
//    At each item, check if the cost associated with it is higher than the specifiedCost orders[item] > specifiedCost
//      If it is, add the item and its associated cost into the expensiveItems object {} {'b': 20} expensiveItems[item] = orders[item]
//  return ExpensiveItems

function expensiveOrders(orders, specifiedCost) {
  if (specifiedCost === undefined) {
    if (typeof orders === 'object') return 'Invalid';
    if (typeof orders === 'number') return {}; 
  }
  let expensiveItems = {};
  let items = Object.keys(orders);
  items.forEach(item => {
    if (orders[item] > specifiedCost) {
      expensiveItems[item] = orders[item];
    }
  })
  return expensiveItems;
}

console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)); // {"a": 3000, "c": 1050}
console.log(expensiveOrders({'a': 10, 'b': 20}, 15)); // {'b': 20}
console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1050)); // {"a": 3000}
console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)); // { "Gucci Fur": 24600 }
console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 10000)); // {}
console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 })); // 'Invalid'
console.log(expensiveOrders(10000)); // {}


Pros:
- Walking through the test cases
- Identifying the return value & logic
- Rephrasing the problem statement 
- Understanding that keys can only be strings in objects 
- Dissecting elements of the inputs, 2nd input, values, keys (systematic)
- Understanding that keys are unique in objects, duplicates will override the first
- Caught yourself understanding you cannot compare objects to other objects in JS based solely of the values they contain
- Technically precise in communication, Calm, Focused
- Sytematically building up test cases
- There are a lot of small pieces that make up this problem, nice job keeping everything organized 
- Good job asking questions as you went along and updating your rules/notes 
- You clearly understood the problem, all the edge cases and how objects work in JavaScript, well done! 
- Nice use of your keyboard/shortcuts for quick formatting 
- Good work continuously refining your understanding notes and process 
Pre-coding: 37 minutes 

-Systematic testing
- typeof operator, good use 
- good job understanding the logic behind the gard clause and simplifying your code
- good job using arrays and the methods you know to create your solution 
Coding/Validating: 9 minutes

Potential/Notes: 
- Iteration on objects with for .. in loop as an alternative to converting to an array for iteration

let orders = { "a": 3000, "b": 200, "c": 1050 }
console.log(orders);

for (let item in orders) {
  console.log('item is', item, 'value is', orders[item]);
}

- Don't create new test cases to walk through the algo, save time and use the ones you already 

Edge cases: 
Asked ---- non object input for orders, return empty object
Asked ---- missing cost, return 'invalid' string 
