
let strs = ["Four and 20 black birds",
  "365 days in a year, 100 years in a century.",
  "My phone number is 222-555-1212.",
  "My serial number is 345678912."];

console.log(strs.map(str => str.match(/\b\d\d\d\d*\b/g)));
console.log(strs.map(str => str.match(/\b\d\d\d+\b/g)));

let strs2 = ['ct',
  'cot',
  'coot',
  'cooot'];


console.log(strs2.map(str => str.match(/co*t/g)));

let strs3 = [
  '15',
  '12345',
  '12342342345',
  '1234235',
];

console.log(strs3.map(str => str.match(/1(234)*5/g)));

let str4 = "2225551212 1234567890 123456789 12345678900";

console.log(str4.match(/\b\d{10}\b/g));

//greed
let str5 = "xabcbcbacy";

console.log(str5.match(/a[abc]+?c/g));

//exercises
let str6 = ['To be or not to be',
  'Be a busy bee',
  'I brake for animals.'];

console.log(str6.map(str => str.match(/\bb[a-z]*e\b/g)));

let strs7 = ['What\'s up, doc?',
  'Say what? No way.',
  '?',
  'Who? What? Where? When? How?'];

console.log(strs7.map(str => str.match(/.+\?$/g)));

let strs8 = [
  'http://launchschool.com/  ',
  'https://mail.google.com/mail/u/0/#inbox',
  'htpps://example.com',
  'Go to http://launchschool.com/',
  'https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello',
  '  http://launchschool.com/'
];

console.log(strs8.map(str => str.match(/\bhttps?:\/\/\S+/g)));

let strs9 = [
  'Mississippi',
  'ziti 0minimize7',
  'inviting illegal iridium'
];
console.log(strs9.map(str => str.match(/\b([a-hj-z]*i+[a-hj-z]*){3,}\b/gi)));

let strs10 = [
  'What\'s up, doc?',
  'I tawt I taw a putty tat!',
  'Thufferin\' thuccotath!',
  'Oh my darling, Clementine!',
  'Camptown ladies sing this song, doo dah.'
];

console.log(strs10.map(str => str.match(/\b[a-z]+(\.|!|\?)$/gi)));

let strs11 = [
  ',123,456,789,123,345,',
  ',123,456,,789,123,',
  ',23,56,7,',
  ',13,45,78,23,45,34,',
  ',13,45,78,23,45,34,56,'
];

let strs12 = [
  '123,456,789,123,345',
  '123,456,,789,123',
  '23,56,7',
  '13,45,78,23,45,34',
  '13,45,78,23,45,34,56'
];

// console.log(strs11.map(str => str.match(/^,(\d+,){3,6}$/g)));
// console.log(strs12.map(str => str.match(/^(\d+,){2,5}?\d+$/g)));
console.log(strs12.map(str => str
  .match(/^((\d+,){2}\d+)$|^((\d+,){5,}\d+)$/g)));

let htmlHeaders = ['<h1>Main Heading</h1>',
  '<h1>Another Main Heading</h1>'
];

console.log(htmlHeaders.map(header => header.match(/^<h1>.*?<\/h1>$/gi)));
let final = '<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>'

console.log(final.match(/<h1>.*?<\/h1>/g));