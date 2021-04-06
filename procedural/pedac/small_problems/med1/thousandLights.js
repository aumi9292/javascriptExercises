/*
1 off, 2 off , 3 off, 4 off 5 off 6 off 7 off 8 off 9 off 10 off
round 1: 1 on, 2 on , 3 on, 4 on 5 on 6 on 7 on 8 on 9 on 10 on
round 2: 1 on, 2 off , 3 on, 4 off 5 on 6 off 7 on 8 off 9 on 10 off
round 3: 1 on, 2 off , 3 off, 4 off 5 on 6 on 7 on 8 off 9 off 10 off

given 5 means 1) have 5 switches and 2) go up to multiples of 5 
round 1: [on, on, on, on, on] all on
round 2: [on, off, on, off, on] 1, 3, 5 on pattern: 2, 4, 6, 
round 3: [on, off, off, off, on] 1 and 5 on pattern: 3, 6, 9
round 4: [on, off, off, on, on] 1, 4, 5 pattern: 4, 8, 12
round 5: [on, off, off, on, off] 1, 4 pattern: 5, 10, 15

problem: given a number, return an array of numbers depending on the state for each element in an array. The array must be generated, and elements' states toggled, based on 1000 lights rules: 
//  a bank of switches, numbered from 1 to the given number
//  there are given number rounds of toggling switches
//  the toggling starts at switch 2 and increments by 2
//  each round of togglings starts at the next highest numbered switch in the bank and is incremented by the same namber (starting with 2, then 3, then 4) (incremented by 2, then 3, then 4)

//  test cases
//    lightsOn(5) // [1, 4]
//    lightsOn(100) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//  edge cases
//    lightsOn(0) // null
//    lightsOn([]) // null
//    lightsOn('a') // null

//  data structures
//    input: number 5  output: array of numbers [1, 4]

//  algorithm
//    return null if given type is not number or given is less than 1
//    create an array that is given number length [<5 empty items>]
//    fill the array with true, representing first round [true, true, true, true, true]
//    init toToggle at 2 2
//    iterate over bank of switches 
//    if the index + 1 is a multiple of 2, set the switch to false [true, false, true, false, true]
//    increment toToggle += 1 3
//    repeat last 3 steps until toToggle === given number
//    map over the array the indexes of elements + 1, if their current value is true [1, false, false, 4, false]
//    select only truthy values from the array [1, 4]
*/

function buildBank(switchNum) {
  let bank = Array(switchNum).fill(true);
  for (let toToggle = 2; toToggle <= switchNum; toToggle++) {
    bank = bank.map((swch, idx) => {
      return (idx + 1) % toToggle === 0 ? !swch : swch;
    });
  }
  return bank;
}

function selectOn(bank) {
  return bank
    .map((swch, idx) => (swch ? idx + 1 : swch))
    .filter(swch => swch);
}

function invalidInput(switchNum) {
  return typeof switchNum !== 'number' || switchNum < 1;
}

function lightsOn(switchNum) {
  if (invalidInput(switchNum)) return null;
  let bank = buildBank(switchNum);
  return selectOn(bank);
}

console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // null
console.log(lightsOn([])); // null
console.log(lightsOn('a')); // null
console.log(lightsOn(1)); // [1]