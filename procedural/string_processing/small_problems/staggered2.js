// function valid(char) {
  
//   return function testChar() {
//     let counter = 0;
//     if (/[a-z]/i.test(char)) {
//       if (counter === 0) {
//         counter += 1;
//         return true;
//       }
//       counter += 1;
//     }
//     return counter % 2 === 0;
//   };
// }

// function staggeredCase(str) {
//   return str
//     .split('')
//     .map((char) => (valid(char)() ? char.toUpperCase() : char.toLowerCase()))
//     .join('');
// }

function staggeredCase(str) {
  let final = '';
  let counter = 0;
  str.split('').forEach(char => {
    if (/[a-z]/i.test(char)) counter += 1;
    if (counter % 2 === 1) {
      final += char.toUpperCase();
    } else {
      final += char;
    }
  });
  return final;
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"