let randomNumber = Math.round(Math.random());
if (randomNumber) {
  console.log('Yes!')
} else {
  console.log("no!")
}

randomNumber ? console.log('yes!') : console.log('no');

let weather = 'dd'

if (weather === 'sunny') {
  console.log("It's a beautiful day!")
} else if (weather === 'rainy') {
  console.log("Grab your umbrella!")
} else {
  console.log("Let's stay inside")
}

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!")
    break; 
  case "rainy":
    console.log("Grab your umbrella!")
    break;
  default:
    console.log("Let's stay inside")
}

function sum(num1, num2) {
  return num1 + num2; 
}

let sumExp = function(num1, num2) {
  return num1 + num2; 
}

console.log(sum(10, 5))

let brandonEichQuote = () => console.log('Always bet on JavaScript.'); 

brandonEichQuote()

function cite(author, quote) {
  console.log(`${author} said: "${quote}"`)
}

cite('Brendan Eich', 'Always bet on JavaScript.');

function squaredNumber(num) {
  return num ** 2;
}

let squareNum = function(num) { 
  return num ** 2; }

console.log(squaredNumber(3))
console.log(squareNum(10))

function compareByLength(str1, str2) {
  const len1 = str1.length
  const len2 = str2.length
  if (len1 > len2) {
    return 1;
  } else if (len1 === len2) {
    return 0;
  } else {
    return -1;
  }
}


console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

str = "Captain Ruby"
console.log(str.replace("Ruby", "JavaScript"))
console.log(str.split(' ')[0] + " Javascript")

function greet(code) {
  switch(code) {
    case 'en':
      return "hi"
      break; 
    case 'fr':
      return "Salut!"
      break; 
    case 'pt': 
      return "Ola!"
      break;
    case 'de': 
      return "Hallo"
      break;
    case 'sv': 
      return "hej";
      break; 
    case 'af':
      return "haii"
      break;
    default: 
      return "Sorry, we do not have that language"
  }
}

console.log(greet('en'))
console.log(greet('de'))
console.log(greet('pt'))
console.log(greet('xxx'))

function extractLanguage(locale) {
  return locale.slice(0, 2)
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

function extractRegion(locale) {
  console.log(locale.slice(3, 5));
}
extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

function localGreet(locale) {
  let lang = extractLanguage(locale);
  console.log(greet(lang)); 
}

localGreet('en_GB.UTF-8')
localGreet('de_GB.UTF-8')
localGreet('gg_GB.UTF-8')

