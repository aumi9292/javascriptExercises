// The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

// You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.

// Problem
//  Given an object with property names of rooms and values of a nested object with property names of items and values of their associated costs, return a new object that only includes values that are valid numbers, as their number type

// Rules
//  first level properties are room names
//  values are objects
//  keys can be any string
//  values are strings. Some strings are valid numbers, while other strings are not valid numbers. 
//  Return an object with the same structure as the given object, but one that only includes nested properties and their values if their values can be coerced to valid numbers

// Examples
// findAndRemove({
//   bedroom: {
//     slippers: "10000",
//     piano: "550",
//     call: "vet",
//     travel: "world",
//   },
// }) ➞ {
//   bedroom: {
//     slippers: 10000,
//     piano: 5500,
//   },
// }

// Walkthrough
// init a validItems object
//  for (rooms in house) 
//  add each room property to the validItems object
//  for (items in room) 
//  check if house[room][item] split into characters, tests positive for each character being 0 -9
//  if it does, add validItems[room][item] = Number(value) to the validItems object
//  return the validObjects object 

// findAndRemove({
//   kitchen: {
//     ["gold spoons"]: "900",
//     piano: "550",
//     notes: "ga0r76ba22g4e",
//   },
//   cellar: {
//     reminder: "dog",
//     bottle: "750",
//   },
// }) ➞ {
//   kitchen: {
//     ["gold spoons"]: 900,
//     piano: 550,
//   },
//   cellar: {
//     bottle: 750,
//   },
// }

// Algorithm
// init a validItems object
//  for (rooms in house) 
//  add each room property to the validItems object
//  for (items in room) 
//  check if house[room][item] split into characters, tests positive for each character being 0 -9
//  if it does, add validItems[room][item] = Number(value) to the validItems object
//  return the validObjects object 

function findAndRemove(house) {
  let validItems = {};
  for (let room in house) {
    validItems[room] = {};
    for (let item in house[room]) {
      let value = house[room][item];
      if (/^\d+$/.test(value));
      validItems[room][item] = Number(value);
    }
  }
  return validItems;
}

console.log(findAndRemove({
  kitchen: {
    ["gold spoons"]: "900",
    piano: "550",
    notes: "ga0r76ba22g4e",
  },
  cellar: {
    reminder: "dog",
    bottle: "750",
  },
}));