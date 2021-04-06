const rlSync = require('readline-sync')


console.log('Please enter an integer greater than 0: ')
let num = parseInt(rlSync.prompt()); 
rlSync.setDefaultOptions({limit: ['s', 'p']})
console.log('Enter "s" to compute the sum, or "p" to compute the product.')
let action = rlSync.prompt()

let total = action === 's' ? 0 : 1 

for (let start = 1; start <= num; start++ ) {
  action === 's' ? total += start : total *= start
}

let result = action === 's' ? 'sum' : 'product'

console.log(`The ${result} of the integers between 1 and ${num} is ${total}.`); 