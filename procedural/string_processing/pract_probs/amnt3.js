let firstName = 'Austin';
let lastName = 'Miller';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(firstName.concat(' ', lastName));
console.log(fullName.split(' '));
const language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);
let charCode = language.charCodeAt(idx);
console.log(charCode);
console.log(String.fromCharCode(charCode));
console.log(language.lastIndexOf('a'));
let a = 'a';
let b = 'b';

console.log(a > b);
b = 'B';
console.log(a > b);

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

let fact1 = 'Javascript is fun';
let fact2 = 'Kids like it too';

let compundSentence = fact1 + ', ' + fact2.toLowerCase();
console.log(compundSentence);

console.log(fact1[0], fact2[0]);

let pi = 22 / 7;

console.log(String(pi).lastIndexOf('14'));

let boxNumber = (365).toString();

console.log(typeof String(parseInt(boxNumber, 10)));

let rlSync = require('readline-sync');

let response = rlSync.question('What is your name?');

let shout = response[response.length - 1] === '!';

if (shout) {
  console.log('HELLO BOBBB');
} else {
  console.log('hey bo');
}