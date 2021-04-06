

// function greet(greeting = "hello", recip = "world") {
//   console.log(`${greeting}, ${recip}!`);
// }

// greet('Salutations'); // logs: Salutations, world!

// greet(undefined);
// greet('Good morning', 'Launch School'); 

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}!`)
}

greet()

function calculateBMI(cmHeight, kgWeigth) {
  return String((kgWeigth / (cmHeight / 100) ** 2).toPrecision(4))
}

console.log(calculateBMI(180, 80));
age = 1

function catAge(age) {
let humanYears = 0; 
  for (let i = age; i > 0; i -= 1) {
    if (i >= 3) {
      humanYears += 4; 
    } else if (i === 2) {
      humanYears += 9; 
    } else if (i === 1) {
      humanYears += 15; 
    }
  }
  return humanYears
}

console.log(catAge(0))
console.log(catAge(1))
console.log(catAge(2))
console.log(catAge(3))
console.log(catAge(4))
console.log(catAge(5))

function removeLastChar(str) {
  return str.slice(0, str.length - 1)
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);


console.log(sentence('like', 'birds'));
// logs: I like birds.


let initGame = () => ({
    level: 1,
    score: 0
  })

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);