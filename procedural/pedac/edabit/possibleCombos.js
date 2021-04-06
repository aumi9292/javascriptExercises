/* 6:14

Write a function that returns the amount of possible combinations when drawing the given amount of cards from a deck of cards.

The function must take two inputs: k is the amount of cards to draw. n the total amount of cards in the deck.

For example, a poker hand can be described as a 5-combination (k = 5) of cards from a 52 card deck (n = 52). The 5 cards of the hand are all distinct, and the order of cards in the hand does not matter. There are 2,598,960 such combinations.

The amount of combinations should be returned as an integer.

combinations(52, 52) ➞ 1

combinations(5, 52) ➞ 2598960

combinations(10, 52) ➞ 15820024220

Try solving this nativly without any imports.
Remember to return result as integer.

// Problem
//  Given a number of cards to draw and a total number of cards in the deck, return the total number of possible combinations that the specified number of cards to draw could be. 

// Examples
// combinations(52, 52) // 1
// combinations(5, 52) // 2598960
// combinations(10, 52) // 15820024220
// combinations(2, 3) // 3 -- 2 cards to draw, 3 total cards, 1, 2, 3 -- [13, 12, 23]
// combinations(3, 4) // 6 -- [1, 2, 3, 4] 2 cards to draw, 4 total cards, 1, 2, 3, 4 -- [12, 13, 14, 23, 24, 34]
// combinations(1) // null
// combinations('hello') // null
// combinations(Infinity) // null
// combinations(NaN) // null
// combinations(52, 5) // 2598960

// Data Strcutures
//  input: two numbers (one is toDraw, one is deckSize)
//  output: one number (possibleCombos)
//  intermediate: numbers, array (store elements, access the length of an array (possibleCombos))

// Algorithm 2, 3
//  If either argument has a type of anything other than number or is === to + or - Infinity, or is NaN, return null
//  init an array of deckSize length [<3 empty slots]
//  pull the keys from the array of empty slots, map over this array of keys, its index + 1 [1, 2, 3], save as deck
//  init combos empty array []
//  iterate over each number in the deck, from index 0 to deck.length - toDraw 2 [1, 2, 3]
//    at each index, init a currCombo counter that starts at index + 1 and goes up to deck.length
//    at each number, pull that number and the number at currCombo [1, 2], [1, 3]
//    push this combo into the combos array [[1, 2], [2, 3], [1, 3]]
//  return the length of combos array 3
*/

function combinations(toDraw, deckSize) {
  if (typeof toDraw !== 'number' || typeof deckSize !== 'number') return null;
  if ([toDraw, deckSize].some(input => Math.abs(input) === Infinity)) return null;
  if ([toDraw, deckSize].some(input => Number.isNaN(input))) return null;
  if (toDraw > deckSize) [toDraw, deckSize] = [deckSize, toDraw];
  let deck = [...Array(deckSize).keys()].map(idx => idx + 1);
  let combos = [];

  for (let idx1 = 0; idx1 <= deck.length - toDraw; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < deck.length; idx2++) {
      combos.push(deck.slice(idx1, idx2 + toDraw));

    }
  }

  return combos.length;
}
// [1, 2, 3]
// console.log(combinations(52, 52)); // 1
// console.log(combinations(5, 52)); // 2598960
console.log(combinations(10, 52)); // 15820024220
console.log(combinations(2, 3)); // 3 -- 2 cards to draw, 3 total cards, 1, 2, 3 -- [13, 12, 23]
console.log(combinations(2, 4)); // 6 -- [1, 2, 3, 4] 2 cards to draw, 4 total cards, 1, 2, 3, 4 -- [12, 13, 14, 23, 24, 34]
console.log(combinations(3, 4)); // 2 [123, 234]
// console.log(combinations(1)); // null
// console.log(combinations('hello')); // null
// console.log(combinations(Infinity)); // null
// console.log(combinations(NaN)); // null
console.log(combinations(52, 5)); // 2598960