/*
Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors. 
For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.
If no factors are given, use 3 and 5 as the default factors.

// Problem: 
  // description: Given a number that represents the highest number to iterate through and a set of one or more numbers, return a sum that is made from adding all of the list of numbers from 1 up to the given number that are multiples of any of the given set of factors.
    //in: number, array of numbers
    //out: number
  //rules: 
    // if given no second argument of factors, use default factors of 3 and 5
  //questions
    // What happens if there is no target? 
    // What happens if the target is lower than the factors? 
    // What if there are no factors? 
      // initial thought: return 0
    //negative factors?
    //will factors always be higher than 1? 
    //is there an upper limit that needs to be considered for efficiency? 
    //will the array be sorted? 

  // Examples
    // factorSum(5, [2]) --> 6 ([2, 4])
    // factorSum(20, [3, 5]) --> 78 ([3, 5, 6, 9, 10, 12, 15, 18])
    // factorSum(3, [4]) --> 0 ([0])

  // Data structures: given number, array of 1 or more numbers, return a number

  // Algorithm 
    return 0 if given no numbers in array, or upper limit is less than the smallest factors
    // sort the given array [2]
    // init a start equal to the smallest number in the given list 2 
      // iterate from that number up to the given target 2 up to 5
        // at each number 2, 3, 4, 5
          // for each factor, [2]
            // check if the remainder of dividing the number by the factor is zero % = 0, 1, 0, 1
              // if it is, keep it [2, 4]
              // if it is not, drop it [3, 5]
    // fold over the selected number, adding each one together 6
*/

function factorSum(target, factors) {
  if (target === undefined || factors === undefined) return 0;
  factors.sort((a, b) => a - b);
  let multiples = [];
  for (let potential = factors[0]; potential < target; potential++) {
    if (factors.some(factor => potential % factor === 0)) {
      multiples.push(potential);
    }
  }
  if (multiples.length === 0) return 0;
  return multiples.reduce((acc, mult) => acc + mult);
}

console.log(factorSum(5, [2])); //--> 6 ([2, 4])
console.log(factorSum(20, [3, 5])); //--> 78 ([3, 5, 6, 9, 10, 12, 15, 18])
console.log(factorSum(3, [4])); //--> 0 ([0])