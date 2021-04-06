let str1 = "cat\
catastrophe\
wildcat\
I love my cat\
<cat>"

let str2 = "catSimilarly, you can see the $ anchor in operation by trying /\ncat$/ against those same strings. This time, the regex matches the first, third, and fourth lines; those lines all end with cat"

console.log(str1.replace(/cat$/g, 'A')); // matches end of string
console.log(str2.replace(/^cat/g, 'A')); // matches start of string
console.log(str2.replace(/\Acat/g, 'A')); // matches start of string

let str3 = "Eat some food.";

console.log(str3.replace(/\b\w\w\w\b/g, 'BOUNDARY'));
console.log(str3.replace(/\B/g, 'BOUNDARY'));

let str4 = "The lazy cat sleeps.\
The number 623 is not a word.\
Then, we went to the movies.\
Ah. The bus has arrived."

console.log(str4.match(/\bThe\b/g));

let str5 = "The lazy cat sleeps\
The number 623 is not a cat\
The Alaskan drives a snowcat"

console.log(str5.match(/\bcat$/g) || []);

let str6 = "reds and blues\
The lazy cat sleeps.\
The number 623 is not a word. Or is it?";

console.log(str6.match(/\b[a-z][a-z][a-z]\b/gi));

let strs = ['A grey cat',
'The lazy dog',
'The white cat',
'A loud dog',
'Go away dog',
'The ugly rat',
'The lazy, loud dog'];

let matched = strs.map(str => {
  return str.replace(/^(A|The)\s[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]\s(dog|cat)$/g, 'MATCHED');
});

console.log(matched);