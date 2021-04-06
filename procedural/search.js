let rlSync = require('readline-sync');

let nums = [];
let iteration = 1;
while (iteration <= 6) {
  let specifiedNumber = '';
  if (iteration === 1) {
    specifiedNumber = '1st';
  } else if (iteration === 2) {
    specifiedNumber = '2nd';
  } else if (iteration === 3) {
    specifiedNumber = '3rd';
  } else if (iteration === 6) {
    specifiedNumber = 'last';
  } else {
    specifiedNumber = String(iteration) + 'th';
  }

  let current = Number(rlSync.question(`Enter the ${specifiedNumber} number: `));

  iteration += 1;

  if (iteration === 7) {
    if (nums.includes(current)) {
      console.log(`The number ${current} appears in [${nums.join(', ')}].`);
    } else {
      console.log(`The number ${current} does not appear in [${nums.join(', ')}].`);
    }
  }
  nums.push(current);
}
