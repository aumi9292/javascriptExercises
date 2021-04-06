const rlSync = require('readline-sync')
console.log('Enter the length of the room in meters: ')
let length = Number(rlSync.prompt())
console.log('Enter the width of the room in meters: ')
let width = Number(rlSync.prompt()); 

let areaM = (length * width).toFixed(2) 
let areaFt = (10.7639 * areaM).toFixed(2)

console.log(`The area of the room in meters: ${areaM} \
square meters (${areaFt} square feet)`)