function crunch(str) {
  let deduped = ''; 
  for (let idx = 0; idx < str.length; idx++) {
    if (deduped[deduped.length - 1] != str[idx]) {
      deduped += str[idx]; 
    }
  }
  return deduped;
}

function crunch2(string) {
  return string.replace(/(.)\1/g, '');
}

console.log(crunch2('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch2('4444abcabccba'));              // "4abcabcba"
console.log(crunch2('ggggggggggggggg'));            // "g"
console.log(crunch2('a'));                          // "a"
console.log(crunch2(''));                           // ""

function logInBox(phrase) {
let phrLen = phrase.length; 
let corner = '+'; 
let side = '|'
let border = '';
let width = '';

for (let len = 0; len <= phrLen + 2; len++) {
  border += '-'; 
  if (len >= phrLen + 1) continue; 
  width += ' ';
} 

phrase += ' '; 

console.log(corner + border + corner); 
console.log(side, width, side)
console.log(side, phrase, side); 
console.log(side, width, side)

console.log(corner + border + corner); 

}

logInBox('To boldly go where no one has gone before.');
logInBox('');

function stringy(len) {
  toJoin = []; 
  for (let idx = 0; idx < len; idx++) {
    toAdd = (idx % 2 === 0) ? '1' : '0'
    toJoin.push(toAdd); 
  }
  return toJoin.join(''); 
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"


//given an integer, return the index of the fib series that has that number of digits
function fibIdx(idx) {
  let fib = [1, 1]
  let i = 1; 
  for (; String(fib[i]).length < idx; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2])
  } 
  return i; 
}

console.log(fibIdx(2));       // 7
console.log(fibIdx(10));      // 45
console.log(fibIdx(16));      // 74

function triangle(len) {
  for (let st = 1; st <= len; st++) {
    console.log('*'.repeat(st).padStart(len))
  }
}

triangle(5)
triangle(9);

let madLib = function() {
  let rlSync = require('readline-sync')
  let noun = rlSync.question('Enter a noun: ')
  let verb = rlSync.question('Enter a verb: ')
  let adj = rlSync.question('Enter a adjective: ')
  let adv = rlSync.question('Enter a adverb: ')

  console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? Hilarious!`)

}

//madLib()

function twice(num) {
  let strNum = String(num)
  let checkLen = Math.floor(strNum.length / 2)
  let firstHalf = strNum.slice(0, checkLen) 
  let secHalf = strNum.slice(checkLen, strNum.length)
  console.log(firstHalf === secHalf ? num : num * 2); 
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

function getGrades(g1, g2, g3) {
  let avg = (g1 + g2 + g3)/3; 
  switch(true) {
    case avg >= 90: 
    return 'A';
    case avg >= 80: 
    return 'B'; 
    case avg >= 70: 
    return 'C'; 
    case avg >= 60: 
    return 'D'; 
    default: 
    'F'; 
  }
}

console.log(getGrades(95, 90, 93))
console.log(getGrades(50, 50, 95))

function cleanUp(str) {
  let alphaOnly = str.replaceAll(/[^a-z]/gi, ' ')
  return alphaOnly.replaceAll(/\s+/g, ' ')
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

function century(year) {
  let century = Math.floor((year + 99) / 100); 
  century = String(century); 
  let twoCharEnding = century.slice(-2, century.length); 
  if (twoCharEnding === '11') return century + 'th'; 
  if (twoCharEnding === '12') return century + 'th'; 
  if (twoCharEnding === '13') return century + 'th'; 

  let ending = century[century.length - 1]
  if (ending === '1') return century + 'st'
  if (ending === '2') return century + 'nd'
  if (ending === '3') return century + 'rd'
  if (['0', '4', '5', '6', '7', '8', '9'].includes(ending)) return century + 'th'
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"