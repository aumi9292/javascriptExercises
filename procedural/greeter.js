let name = "Victor";
console.log( `Good morning ${name}\nGood afternoon ${name}\nGood evening ${name}`);

let age = 10; 

console.log(`In 10 years, you will be ${age + 10}`)
console.log(`In 20 years, you will be ${age + 20}`)
console.log(`In 30 years, you will be ${age + 30}`)
console.log(`In 40 years, you will be ${age + 40}`)

let name2 = 'Jane'; 

console.log(`Good morning, ${name2}!`);

let rlSync = require('readline-sync');
let name22 = rlSync.question("What's your name?\n");
console.log(`Good morning, ${name22}!`)

let num1 = Number(rlSync.question("Please enter a number\n"))
let num2 = Number(rlSync.question("Please enter another number\n"))
console.log(`${num1 + num2}`)
