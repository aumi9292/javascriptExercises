function repeater(str) {
  return str.split('').map(char => char.repeat(2)).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

function shouldDouble(char) {
  return /[b-z]/i.test(char) && /[^aeiou]/i.test(char);
}

function consoRepeater(str) {
  return str.split('').map(char => {
    return shouldDouble(char) ? char.repeat(2) : char;
  }).join('');
}

console.log(consoRepeater('Hello'));        // "HHeelllloo"
console.log(consoRepeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(consoRepeater(''));             // ""

console.log(consoRepeater('String'));          // "SSttrrinngg"
console.log(consoRepeater('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(consoRepeater('July 4th'));        // "JJullyy 4tthh"
console.log(consoRepeater(''));                // ""