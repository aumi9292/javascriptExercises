//given a string, return a new string where all number words are replaced with their corresponding digit characters.
function wordToDigit(sent) {
  const DIG = [
    'zero', 'one', 'two',
    'three', 'four', 'five',
    'six', 'seven', 'eight',
    'nine'
  ];
  return sent.split(/\b/)
    .map(word => (DIG.includes(word) ? DIG.indexOf(word) : word))
    .join('');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."