/*
// problem: write a function that takes a number that represents a grid in which an 8-pointed star made from asterisks * is displayed

// rules: 
//  The 8 points of the start must be the upper left, upper middle, upper right, middle left, middle right, lower left, lower middle, lower right
//  The middle row should have n number of asterisks in a complete horizontal line, while every other row should have 3 stars
//  Must be given a number
//  The given number must be >= 7 and must be odd
//  The first row above and below the middle row should have 3 stars in the exact middle. This means that to each side of the set, there should be (n - 3) / 2 number of spaces
After that, the middle star should stay in the same position, while an additional space should be added between the middle star and each outer star for each subsequent row
//  The final top and bottom rows should have a total length of the given number, with enough spaces between the middle * and the outer 2 *s to equal the length (n - 3) / 2 is equal to the number of spaces to each side of the middle *
//  For every row except the middle, the number of spaces in that row is always equal to (n - 3) / 2, the spaces are just moved around

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

star(11);
// logs
*    *    *
 *   *   *
  *  *  *
   * * *
    ***
***********
    ***
   * * *
  *  *  *
 *   *   *
*    *    *

star(5) // logs -1 
star(10) // logs -1
star() // logs star(7)
star([]) // logs -1 

// data structures
//  strings, arrays (for indexes and repetition for lower and upper half)

// algorithm 
// init middle, a string with n stars
// init a string with (n - 3) / 2 spaces, 3 *s, and (n - 3) / 2 spaces
//   pad left and right up to length of n
// init an array with (n - 1) / 2 slots, fill the array with initial star pattern
// map over each string in the array
//  for each string, idx number of spaces to n - idx

*/


