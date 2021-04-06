console.log(first(['Earth', 'Moon', 'Mars']));
console.log(first([]));

function first(arr) {
  return arr[0] || "Empty array"
}

function last(arr) {
  return arr[arr.length -1]
}

console.log(last(['Earth', 'Moon', 'Mars'])); 

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

console.log(energy.slice(1))

console.log(energy)

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

console.log(alphabet.split("")); 

let scores = [96, 47, 113, 89, 100, 102];

let above100 = scores.reduce((acc, score) => {
  return score >= 100 ? acc + 1 : acc; 
}, 0)

console.log(above100)

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach((list) => {
  list.forEach((word) => {
    console.log(word);
  })
})

function filter(input) {
  console.log(Array.isArray(input))
}

filter([1, 2, 3])
filter("asasa")

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(to_find, collection) {
  return collection.reduce((acc, place) => {
    return place === to_find ? true : acc
  }, false)
}

console.log(contains('Barcelona', destinations)); 
console.log(contains('Nashville', destinations));

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'))

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift(); 

  console.log(checkedItem)
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []