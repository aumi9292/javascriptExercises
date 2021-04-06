const rlSync = require('readline-sync')

console.log('What is the bill?'); 
let bill = parseFloat(rlSync.prompt()); 
console.log('What is the tip percentage?'); 
let percentage = parseFloat(rlSync.prompt()); 

let tip = (bill * percentage * 0.01); 
let total = (bill + tip); 

console.log(`The tip is ${tip.toFixed(2)}`); 
console.log(`The total is ${total.toFixed(2)}`); 