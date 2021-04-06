function reverse2(string) {
  return string
    .split(' ')
    .map(wrd => wrd
      .split('')
      .reverse()
      .join(''))
    .join(' ');
}

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"