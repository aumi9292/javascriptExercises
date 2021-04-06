function say(words) {
  console.log(words);
}

say()

// function add(a, b) {
//   return a + b; 
// }

//console.log(add("he", "lo"))

function doNothing() {
  
}

console.log(doNothing()); 

function greetPeople() {
  let greetingMessage = "Good morning"; 
  console.log(greetingMessage);
}

greetPeople() 

// let add = (a, b) => a + b; 

// console.log(add(10, 20))

function multiply(num1, num2) {
  return num1 * num2; 
}

function getNumbers() {
  let rlSync = require('readline-sync')
  let num1 = Number(rlSync.question("Please enter the first number:"))
  let num2 = Number(rlSync.question("Please enter the second number: "))
  console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`)
}

getNumbers()

let say10 = function() {
  return 10;
}

function toPower10(say10, number) {
  return number ** say10; 
}

console.log(toPower10(say10(), 2))