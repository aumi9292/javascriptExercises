let counter = 0
let people = ['jamie', 'bill', 'graham', 'dill']

while (counter < people.length) {
  console.log(people[counter]); 
  counter ++;
}



let upperNames = [];
let idx = 0;

while (idx < people.length)  {
  let upperCaseName = people[idx].toUpperCase()
  upperNames.push(upperCaseName)
  idx += 1 
}

console.log(upperNames)

// for (let idx = 0, upperNames = []; idx < people.length; idx++) {
//   let upperCaseName = people[idx].toUpperCase()
//   return upperNames.push(upperCaseName)
// }


// let rlSync = require("readline-sync")
// let ans 
// do {
//   ans = rlSync.question("Would you like to repeat an action?");
// } while (ans == 'y')

let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);

people.forEach(function(name) {
  console.log(name); 
});

people.forEach(name => console.log(name))

function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5)

let fibs = [0, 1]

function fib(number) {
  if (number < 2) return number;  
  return fib(number - 1) + fib(number - 2);
}

console.log(fib(7))

function get_age() {
  let rlSync = require("readline-sync") 
  let given_age = Number(rlSync.question("How old are you?  "))
  for (let fiveCounter = 5; fiveCounter < 21; fiveCounter += 5) {
    given_age += 5
    console.log(`In ${fiveCounter} years, you will be ${given_age}`);
  }
}

//get_age()

// function factorial(int) {
//   let product = 1 
//   while (int > 1) {
//     product *= int 
//     int -= 1 
//   }
//   return product 
// }

function factorial(int) {
  let product = 1
  for (let counter = int; counter > 0; counter -= 1) {
    product *= int 
  } 
  return product
}

function recursiveFactorial(int) {
  if (int === 1) return 1;
  return int * recursiveFactorial(int - 1);
}

console.log(factorial(7))
console.log(recursiveFactorial(7))

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result
do {
    result = randomNumberBetween(1, 6);
    tries += 1;
} while (result <= 2)

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');