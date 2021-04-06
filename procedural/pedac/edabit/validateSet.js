/* 8:37 - 9:17
In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.


[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.

// Problem
//  Given an array of objects that each represent a card, return a boolean indicating whether the objects represent a set by the game's rules
//  Set game
//  Set properties: number, color, shape, shade
//  Valid set: Values for all three cards for all four properties must be either all the same or all different for each property. If there are two values for a given property that are the same, the set of cards is not a valid set. 

//  Edge cases
//    Will always be given a valid "hand" with three "cards"
//    Values of each property for each card will be valid strings (and numbers for number property)

// Examples: 
// validSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) // true

// validSet([
  { color: "blue", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) // false

// validSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "empty", shape: "diamond" },
  { color: "red", number: 3, shade: "empty", shape: "oval" }
]) // true //shade and color are all equal, number and shape are all different

// validSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "empty", shape: "diamond" },
  { color: "red", number: 2, shade: "empty", shape: "oval" }
]) // false //shade and color are all equal, shape are all different, number have two equal

// Data Structures: 
//  Input: array of objects, properties are strings, values are strings and numbers
//  Output: true or false

// Algorithm
//  iterate over the hand of cards
//  map over each card its associated values
//  flatten this array of arrays, save as allProps
init object called propCounts
//  iterate over each value in the allProps
//    add the property and value 1 to propCounts, or ++ propCount values {red: 3, 1: 1, 2: 2, empty: 3, squiggle: 3}
//  return false if Object.values(propCounts).some(count => 2)
*/

function validSet(hand) {
  let handValues = hand.map(card => Object.values(card));
  let allProps = handValues.flat(1);
  let propCounts = {};
  allProps.forEach(prop => {
    propCounts[prop] = (propCounts[prop] || 0) + 1;
  });
  return !Object.values(propCounts).some(propCount => propCount === 2);
}

console.log(validSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
])); // true

console.log(validSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 1, shade: "empty", shape: "squiggle" }
])); // true

console.log('test', validSet([
  { color: "red", number: 1, shade: "lined", shape: "squiggle" },
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 1, shade: "full", shape: "squiggle" }
]));

console.log(validSet([
  { color: "blue", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
])); // false

console.log(validSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "empty", shape: "diamond" },
  { color: "red", number: 3, shade: "empty", shape: "oval" }
])); // true //shade and color are all equal, number and shape are all different

console.log(validSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "empty", shape: "diamond" },
  { color: "red", number: 2, shade: "empty", shape: "oval" }
])); // false //shade and color are all equal, shape are all different, number have two equal

/*
In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.

// Valid set

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes

// Invalid set

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.

*/

//Leena notes
// Nice work walking through first set, explaining why it's valid
// Awesome working
// Awesome naming test arrays for readability
// Cool format with lots of space
// Good memory with forEach and return, continue, etc. not working
// nice catch with : in a for loop rather than ,