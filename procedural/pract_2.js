let greetings = function(fullName, jobDetails) {
  let title = jobDetails['title']
  let occ = jobDetails['occupation']
  console.log(`${fullName.join(' ')}! Nice to have a ${title} ${occ} around!`)
}


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });


let repeatedCharacters = function(str) {
  let chars = str.toLowerCase().split(''); 
  let counts = {}; 
  for (let idx = 0; idx < chars.length; idx++) {
    let char = chars[idx]
    counts[char] ? counts[char] += 1 : counts[char] = 1
  }

  for (letter in counts) {
    if (counts[letter] < 2) delete counts[letter]; 
  }

  return counts; 
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }