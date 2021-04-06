//https://edabit.com/challenge/oK8YTFzTDBzjQpmtH

// 55 minutes, partial solution

// Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

// An array with a single name should be returned
// An empty array, or an input of null or undefined should return an empty array.
// An array with more than one name should return the same array with elements sorted by the second word in the string
// If an array with more than one element is given, each element in the array will be a string with two words separated by a series of one or more spaces


/*
sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC") ➞ [
  "Thomas  Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]

// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

sortContacts([
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
], "DESC") ➞ [
  "Carl Gauss",
  "Leonhard Euler",
  "Paul Erdos"
]

// Gauss (G) > Erdos (ER) > Euler (EU)

sortContacts([], "DESC") ➞ []

sortContacts(null, "DESC") ➞ []

sortContacts(undefined, "DESC") ➞ []
*/

// Problem
//  Given an array of strings that each consist of two words, return the array sorted by the last word in each string. If the second argument is the string 'DESC', return the array sorted from highest to lowest alpha order. If the second argument is a string 'asc' sort from lowest to highest alpha. If only given one argument, sort the string in ascending order, from lowest to highest

// Rules
// If given null, undefined, anything other than an array for the second argument, return empty []
// If the length of the first argument is 0 or 1, return the array
// If given no second argumet, return the array sorted ascending
// If given a second argument that is equal to "ASC", return the same array sorted from a-z
// If given a second argument that is equal to "DESC", return the same array sorted from z-a
// If given an array, all elements will hold strings of two words separated by 1 or more spaces
// Whether the second word in the string is lowercase or uppercase, it should be sorted as though it were the same case
// Assume casing for ascending or descending will can be lower or uppercase
// Assume that if given a string, it will always be asc or desc in some casing

// Examples
// sortContacts([]) // []
// sortCountacts(null) // []
// sortCountacts() // []
// sortCountacts("hello") // []
// sortCountacts(["austin miller"]) // ["austin miller"]
// sortCountacts(["austin miller", "bob adams"]) // ["bob adams", "austin miller"]
// sortCountacts(["austin miller", "bob adams"], "ASC") // ["bob adams", "austin miller"]
// sortCountacts(["austin    miller", "bob adams"], "ASC") // ["bob adams", "austin miller"]
// sortCountacts(["austin miller", "bob adams"], "asc") // ["bob adams", "austin miller"]
// sortCountacts(["austin miller", "bob Adams"], "ASC") // ["bob adams", "austin miller"]
// sortCountacts(["austin Miller", "bob Adams"], "ASC") // ["bob adams", "austin miller"]
// sortCountacts(["austin Miller", "bob Adams"], "DESC") // ["austin miller", "bob adams"]
// sortCountacts(["austin Miller", "bob Adams"], "desc") // ["austin miller", "bob adams"]

// Algorithm 
//  If list is not an array, return []
//  If the length of list is 0 or 1, return list
//  Check the second argument (sortOrder)
//    If it is undefined, set sortOrder to ASC
//    If it is a string, reassign sortOrder to sortOrder.toUpperCase()
//    
//  Create an ascending sort function 
//    create a function that takes an array and returns it sorted in alpha order by the uppercase second word in a string sort((a, b) => a.split(/\s+/)[1].toUpperCase() - b.split(/\s+/)[1].toUpperCase()
//
//  Create an descending sort function 
//    create a function that takes an array and returns it sorted in alpha order by the uppercase second word in a string sort((a, b) => b.split(/\s+/)[1].toUpperCase() - a.split(/\s+/)[1].toUpperCase()

// Time: 23 minutes

function sortContacts(list, order = 'ASC') {
  if (!Array.isArray(list)) return [];
  if ([0, 1].includes(list.length)) return list;
  order = order.toUpperCase();

  let ascSorter = (a, b) => a.split(/\s+/)[1].toUpperCase().charCodeAt() - b.split(/\s+/)[1].toUpperCase().charCodeAt();
  let descSorter = (a, b) => b.split(/\s+/)[1].toUpperCase().charCodeAt() - a.split(/\s+/)[1].toUpperCase().charCodeAt();

  return order === 'ASC' ? list.sort(ascSorter) : list.sort(descSorter);
}

console.log(sortContacts([])); // []
console.log(sortContacts(null)); // []
console.log(sortContacts()); // []
console.log(sortContacts("hello")); // []
console.log(sortContacts(["austin miller"])); // ["austin miller"]

console.log(sortContacts(["austin miller", "bob adams"])); // ["bob adams", "austin miller"]
console.log(sortContacts(["austin miller", "bob adams"], "ASC")); // ["bob adams", "austin miller"]
console.log(sortContacts(["austin    miller", "bob adams"], "ASC")); // ["bob adams", "austin miller"]
console.log(sortContacts(["austin miller", "bob adams"], "asc")); // ["bob adams", "austin miller"]
console.log(sortContacts(["austin miller", "bob Adams"], "ASC")); // ["bob adams", "austin miller"]
console.log(sortContacts(["austin Miller", "bob Adams"], "ASC")); // ["bob adams", "austin miller"]
console.log(sortContacts(["austin Miller", "bob Adams"], "DESC")); // ["austin miller", "bob adams"]
console.log(sortContacts(["austin Miller", "bob Adams"], "desc")); // ["austin miller", "bob adams"]
console.log(sortContacts(["austin Miller", "bob Maller"], "ASC")); // ["austin miller", "bob adams"]