/*In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it. It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.

A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).

A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime. For example, 19.

Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".

primalStrength(211) ➞ "Balanced"

primalStrength(17) ➞ "Strong"

primalStrength(19) ➞ "Weak"

// Problem
//  Given a number, return a string based on prime number theory rules
//    rules
//      If the given number is equal to the mean of the nearest lower prime and the nearest higher prime, return 'balanced'
//      If the given number is greater than the mean of the nearest lower prime and nearest higher prime, return 'strong'
//      Otherwise, return 'weak'

// Definitions
//  Prime: a number that is divisible only by itself and 1, it does not evenly divide by any other number

primalStrength(5) //➞ "Balanced" 3 + 7 = 10 / 2 === 5
primalStrength(211) //➞ "Balanced"
primalStrength(17) //➞ "Strong"
primalStrength(19) //➞ "Weak"

// Data structures
//  input: number
//  output: string
//  intermediate: number, array

// High level overview
// Create a function to determine if a number is a prime number
//  input: number, output: boolean
//  from number down to 2, check if the number % factor === 0 
//  if it does, break and return true
//  if it never does, return false at the end


// from the given number until isPrime(num) is equal to true, iterate from the given number down
// when it is true, save this number as lowerPrime
// from the given number until isPrime(num) is ture, iterate from the given number up
// when it is true, save this number as upperPrime
// calculate upperPrime + lowerPrime / 2, save as mean
// if mean === given, return 'balanced'
// if mean > given, return 'strong'
// else return weak

*/

function isPrime(num) {
  for (let factor = num - 1; factor > 1; factor--) {
    if (num % factor === 0) return false;
  }
  return true;
}

function primalStrength(num) {
  let lowerPrime = num - 1;
  let upperPrime = num + 1;
  while (!isPrime(lowerPrime)) {
    lowerPrime -= 1;
  }
  while (!isPrime(upperPrime)) {
    upperPrime += 1;
  }
  let mean = (upperPrime + lowerPrime) / 2;
  if (mean === num) return 'Balanced';
  if (mean < num) return 'Strong';
  if (mean > num) return 'Weak';
}


// console.log(isPrime(5)); // true
// console.log(isPrime(10)); // false
console.log(primalStrength(5)); //➞ "Balanced" 3 + 7 = 10 / 2 === 5
console.log(primalStrength(211)); //➞ "Balanced"
console.log(primalStrength(17)); //➞ "Strong"
console.log(primalStrength(19)); //➞ "Weak"