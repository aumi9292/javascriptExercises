
let hasSigil = (email) => /@/.test(email);
const localEnd = (email) => email.indexOf('@');
let isAlpha = (char) => /[a-z]/i.test(char);
let isNum = (char) => /[0-9]/.test(char);
let isAlphaOrNum = (char) => isAlpha(char) || isNum(char);
let validLocal = (email) => email.substr(0, localEnd(email)).split('').every(isAlphaOrNum) && hasSigil(email);

let getDomain = (email) => email.slice(localEnd(email) + 1);
let validDomain = (email, getDom) => /[a-z]+\.[a-z]+$/i.test(getDom(email));

function isValidEmail(email) {
  return validLocal(email) && validDomain(email, getDomain);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
console.log(getDomain('foo@bar.a12'));