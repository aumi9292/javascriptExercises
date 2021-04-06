function Rectangle(width, length) {
  this.width = width;
  this.length = length;
}

Rectangle.prototype.getWidth = function () { return this.width; };
Rectangle.prototype.getLength = function () { return this.length; };
Rectangle.prototype.getArea = function () { return this.width * this.length; };

let rect = new Rectangle(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

function Square(side1) {
  this.side = side1;
}

Square.prototype = Object.create(Rectangle.prototype);
Object.defineProperty(Square.prototype, 'constructor', {
  value: Square,
  enumerable: false,
});
Square.prototype.getArea = function () {
  return this.side ** 2;
};

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

// fake cat -- good snippet, shows some interesting implications of calling Object.create and passing some constructor's prototype object--the returned object acts like a "fake" instance of the class--it has the instance methods, but no state

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
function objectsEqual(obj1, obj2) {
  let keys = Object.keys(obj1);
  return keys.every(key => Object.keys(obj2).includes(key) && obj1[key] === obj2[key]);
}
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false