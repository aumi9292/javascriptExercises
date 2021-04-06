// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   this.bark = function() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   };
// }

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'

// let DogPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, DogPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   // this.bark method removed.
// }

//below, the relationship between the constructor and its prototype object is more concretely stated:

// Delete DogPrototype

function Dog(name, breed, weight) {
  //Object.setPrototypeOf(this, Dog.myPrototype);
  // rest of the code
}

function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
// Object.getPrototypeOf(maxi).bark === DogPrototype.bark; // true
// Object.getPrototypeOf(dexter).bark === DogPrototype.bark; // true
// Object.getPrototypeOf(biggie).bark === DogPrototype.bark; // true

console.log(Dog.prototype.isPrototypeOf(maxi));
console.log(Object.getPrototypeOf(Dog));
//console.log(maxi[[prototype]]);
console.log(maxi.__proto__)
console.log(Dog.prototype)
console.log(Dog.prototype.constructor)