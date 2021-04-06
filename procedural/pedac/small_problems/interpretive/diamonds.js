// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

// problem 
// use an integer to log a diamond of asterisks, where the integer will be the number of asterisks at the largest height and width

// rules
// will always receive an integer
// will always receive an odd integer

// examples
// diamond(1) --> *
// diamond(3) --> *
//               ***
//                *

// algorithm 
// from 1 up to the given odd number (inclusive), iterate over each odd number 1; 1, 3
  // check how much less the current number is than the given number 0, 2
  // if the difference is greater than 0, divide this number by 2 (for the left and right sides of the diamonds) / and 1
    // if difference is zero, output the number amount of asterisks 1, 3
  // concatenate quotient number of spaces, asterisk, quotient number of spaces

//code
function diamond(len) {
  for (let dCount = 1; dCount <= len; dCount += 2) {
    let spaces = len - dCount;
    if (spaces > 0) spaces /= 2;
    console.log(' '.repeat(spaces) + ('*'.repeat(dCount) + ' '.repeat(spaces)));
  }

  for (let dCount = len - 2; dCount > 0; dCount -= 2) {
    let spaces = len - dCount;
    if (spaces > 0) spaces /= 2;
    console.log(' '.repeat(spaces) + ('*'.repeat(dCount) + ' '.repeat(spaces)));
  }
}

diamond(1);
diamond(3);
diamond(5);
/*
Small Code Challenge Problems
  - 20 - 45 minutes
  - typical solutions: 10 - 40 lines of code
  - used extensively in interviews for a reason
    - mastery of a language
    - logic / reasoning
    - communications
  - not a skill that you "acquire and file away", but needs a lot of practice

Understand the Problem
  - requirements are explicit
    - take notes
    - the "odd words" problem
  - requirements are not so explicit and need to be modeled
    - examples need to be described in computational words
    - "diamond of stars"
  - implicit knowledge needs to be captured
    - convert to explicit rules, in computational language
    - "what century is that"
  - identifying and defining important terms and concepts
    - "queen attack"
    - same row; same column; especially same diagonal
  - ask questions to verify your understanding!

Examples / Test Cases
  - Input / Output
  - Test cases serve two purposes:
    - help you understand the problem
    - allow you to verify your solution
  - Happy paths
    - combination of requirements; the "obvious" result
  - Edge cases
    - focus on input
    - emptiness (nil/null, "", [], {})
    - boundary conditions
    - repetition / duplication
    - upper case / lower case
    - data types
  - Failures / Bad Input
    - raise exceptions / report errors
    - return a special value (nil/null, 0, "", [], etc.)
  - ask questions to verify your understanding!

  ls 215 3.3

 Data Structure
 - input data
 - rules/requirements as data
   - hash/object

 - string, array, hash/object, number
   - string
     - concact, strip, reverse, etc.
     - Regular Expression! split, replace, match...
   - array
     - need to walk through it (iteration)
     - index
     - abstractions!!
       - map
       - reduce
       - select/filter
       - all
       - ...
   - hash/object
     - lookup table / dictionary
     - partition data for more efficient access downstream
     - digest
   - number
     - math operations
     - number as string may have advantage over numbers
 - compound data structures
   - array of arrays
   - hash with array/object values, etc.

Algorithm
 - algorithms have to be described in the language of chosen data structure!
   - "then solve it" doesn't count
 - have to be really fluent with
   - String / Regex
   - Array
     - Ruby: Enumerable
     - JavaScript: Higher-Order Functions
   - Hash / Object
     - Creation (default values)
     - Access (default values)
     - Iteration
 - verify your algorithm with your examples / test cases
 */