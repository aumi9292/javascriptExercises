// 9:36
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
// chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null

// Notes
// All wines will be different prices, so there is no confusion in the ordering.

// Problem 
//  Given an array of wine objects (that each have a name and price property), return the name value of the wine with the second lowest price. 

// Edge case rules
//  If given an empty array, return null
//  If given an array with 1 object, return the name value of that object
//  All wines will have different prices
//  Wine names: strings with or without a space
//  Wine prices: number (potentially with decimals)
//  If given any other type/object other than an array that contains all objects, return null

// Examples
//chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"
// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
// chosenWine([{ name: "Wine A", price: 8.99 }, 
// { name: "Wine B", price: 9.99 }]) // "Wine A"
//chosenWine([]) // null
//chosenWine() // null
//chosenWine(true) // null
//chosenWine([1, 2]) // null
//chosenWine([[1], []]) // null

// Data structures: 
//  Input: array of objects (list of wines)
//  Output: a string or null
//  Intermediate: arrays (sort, accessing elements by index)

// Algorithm
//  if the type of list is not an array, return null
//  return null if not every wine is an object or if some wine is an array
//  if wineList has a length of 1, pull and return wineList[0].name
//  pull the wine names from the wine list,
//    iterate over the array of wine names, map each wines name as elements in a new array, wineNames
//  sort wineNames by wineList.price, ascending
//  pull and return the name from wineNames which is located at idx 1 'wine 9'

function chosenWine(wineList) {
  if (!Array.isArray(wineList)) return null;
  if (!wineList.every(wine => typeof wine === 'object') || wineList.some(wine => Array.isArray(wine))) return null;
  if (wineList.length === 1) return wineList[0].name
  
  let wineNames = wineList.map(wine => {
    return wine.name
  })
  let winePrices = wineList.map(wine => {
    return wine.price
  })
  wineNames.sort((a, b) => winePrices[wineNames.indexOf(a)] - winePrices[wineNames.indexOf(b)]);
                 
  return wineNames[1];
}

console.log(chosenWine([{ name: "Wine A", price: 8.99 },{ name: "Wine 32", price: 13.99 },{ name: "Wine 9", price: 10.99 }])); //"Wine 9"
console.log(chosenWine([{ name: "Wine A", price: 8.99 }])); // "Wine A"
console.log(chosenWine([{ name: "Wine A", price: 8.99 },{ name: "Wine B", price: 9.99 }])); // "Wine B"
console.log(chosenWine([])); // null
console.log(chosenWine()); // null
console.log(chosenWine(true)); // null
console.log(chosenWine([1, 2])); // null
console.log(chosenWine([[1, 2], {'wine a': 10}])); // null
console.log(chosenWine([[1], []])); // null

Pros
- Understand, test cases
- Data structures
- Excellent understanding and questions 
- Good catch on array being an object and adjusting how you will verify for it 
- Wonderful walkthrough of test casses and algorithm, refactoring your wording and improving your algo for different conditions
- Technical precisions in communication, clear, calm, professional
- Isolating test cases and running them case by case
- Great use of the JavaScript methods and using abstractions to get to the results 
- Excellent debugging and quickly understanding why the output is what it is 
- Excellent job adjusting your algo (winePrices as a 

Potential:
- Practice nested data structures and access 