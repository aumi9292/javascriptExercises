let str1 = 'abbcda';

let str2 = str1;
let combos = [];

[...str1].forEach(char => {
  [...str2].forEach(char2 => {
    combos.push(char + char2);
  })
})

console.log(combos.reduce((subs, curr) => {
  subs.includes(curr) ? subs : subs.push(curr);
  return subs;
}, []));

let str3 = 'abbcda';

let subs = [];
for (let idx = 0; idx < str3.length - 1; idx++) {
  for (let idxInner = idx + 1; idxInner < str3.length; idxInner++) {
    subs.push(str3.slice(idx, idxInner + 1));
  }
}
console.log(subs)

// let subs = [];

// for (let outerIdx = 0; outerIdx < str3.length; outerIdx++) {
//   for (let innerIdx = outerIdx + 1; innerIdx <= str3.length; innerIdx++) {
//     subs.push(str3.slice(outerIdx, innerIdx));
//   }
// }

// console.log(subs);

let num = 10
for (let outer = 0; outer < num; outer++) {

    console.log('*'.repeat(outer));
}