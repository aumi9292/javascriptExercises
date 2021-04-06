function isUrl(str) {
  return /^https?:\/\/[a-z]+.[a-z]+$/i.test(str);
}

console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false


function fields(str) {
  return str.split(/[ \t,]+/);
}

console.log(fields("Pete,201,Student"));
// -> ['Pete', '201', 'Student']

console.log(fields("Pete \t 201    ,  TA"));
// -> ['Pete', '201', 'TA']

console.log(fields("Pete \t 201"));
// -> ['Pete', '201']

console.log(fields("Pete \n 201"));
// -> ['Pete', "\n", '201']

function mysteryMath(eq) {
  return eq.replace(/[+\-/*]/g, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

function danish(str) {
  return str.replace(/\bapple|blueberry|cherry\b/, 'danish');
}


console.log(danish('An apple a day keeps the doctor away'));
//# -> 'An danish a day keeps the doctor away'

console.log(danish('My favorite is blueberry pie'));
// # -> 'My favorite is danish pie'

console.log(danish('The cherry of my eye'));
// # -> 'The danish of my eye'

console.log(danish('apple. cherry. blueberry.'));
// # -> 'danish. cherry. blueberry.'

console.log(danish('I love pineapple'));
// # -> 'I love pineapple'

function formatDate(str) {
  return str.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3.$2.$1') ||
  str;
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

function formatDate2(str) {
  return str.replace(/^(\d{4})([-/])(\d{2})\2(\d{2})$/g, '$4.$3.$1') || str;
}
console.log(formatDate2('2016-06-17')); // -> '17.06.2016'
console.log(formatDate2('2017/05/03')); // -> '03.05.2017'
console.log(formatDate2('2015/01-31')); // -> '2015/01-31' (no change)