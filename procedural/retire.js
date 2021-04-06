let rlSync = require('readline-sync');

const age = Number(rlSync.question('What is your age? '));
const target = Number(rlSync.question('At what age would you like to retire? '));
const diff = target - age

console.log(`It's 2020. You will retire in ${2020 + diff}.\nYou have ${diff} more years of work!`)