let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

let firsts = names.map((nm) => {
  return nm[0];
});

// let getCount = function (letter, str) {
//   return str.split('').reduce((acc, curr) => {
//     return curr === letter ? acc + 1 : acc;
//   }, 0);
// };
let counts = {};
firsts.forEach(letter => {
  counts[letter] = (counts[letter] || 0) + 1;
});



firsts.sort((l1, l2) => {
  if (counts[l1] > counts[l2]) {
    return -1;
  } else if (counts[l1] < counts[l2]) {
    return 1;
  } else {
    return 0;
  }
});

let counts2 = firsts.reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});

console.log(firsts[0]);
console.log(counts2);

let highestCount = Object.keys(counts2).reduce((last, curr) => {
  if (counts2[last] > counts2[curr]) {
    return last;
  } else {
    return curr;
  }
})

console.log(highestCount);