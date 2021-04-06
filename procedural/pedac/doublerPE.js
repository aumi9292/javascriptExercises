// "Write a function called doubler that doubles every value in an array". We are not given any test cases, so we'll have to create them all on our own.

//given an array of numbers, return a new array with all elements doubled. 

// input: array of numbers
// output: array of doubled numbers (num * 2)

// rules
  //return null if 
    //no array given
    //any elements have any non numeric characters (Infinity, NaN, null, undefined, a-z, special chars)
    //return a new array, do not mutate the original array

//edge cases
  // if an element is 0 -- return 0
  // if an array is empty, return the empty array

// tests
// [1, 2, 3] -- [2, 4, 6]
// () -- null
// [] -- []
// ['a'] -- null 
// [0, 1] -- [0, 2]
// [Infinity, 1] -- null

//tests after clarified
// [1, 2, 3] -- [2, 4, 6]
// ['a'] -- ['aa']
// [[]] -- [[][]]
//[NaN] -- [NaN]
//[Infinity] --[Infinity]
// [''] -- ['']
// [1, 'a', NaN] -- [2, 'aa', NaN]
// [<1 empty slot>] -- []
// [[<1 empty slot]] -- [[<1 empty slot], [<1 empty slot]]
// [a: 1, 1] --[a: 1, 2]
//[] -- []
//[1], [5] -- [2]
//'hi' -- ['hh', 'ii']
// 123 -- [2, 4, 6]
//{a: 1, b: 2} -- [2, 4]
// new Date(2020-01-01) -- 'Invalid Input'
// () -- 'Invalid Input'
// false -- 'Invalid input'

// missed
// [true, false] -- [true, true, false, false]
