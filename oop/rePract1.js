// function getDefiningObject(object, propKey) {
//   let parent = object;
//   while (parent !== null) {
//     if (parent.hasOwnProperty(propKey)) return parent;
//     parent = Object.getPrototypeOf(parent);
//   }
//   return parent;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

// function shallowCopy(object) {
//   let newObj = Object.create(Object.getPrototypeOf(object));
//   for (let prop in object) {
//     newObj[prop] = object[prop];
//   }
//   return newObj;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
// console.log(foo.isPrototypeOf(baz) === true);  // false

function extend(destination, ...sources) {
  sources.forEach(source => {
    Object.getOwnPropertyNames(source).forEach(prop => {
      destination[prop] = source[prop];
    })
  })
  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe

let Foo = function() {
  this.constructor.prototype.a = function() {console.log("AAAA")};
}

let bee = new Foo();
console.log(bee.a());

function Circle(radius) {
  this.radius = radius;
  Circle.prototype.area = function() {
    return this.radius ** 2 * Math.PI;
  }
}
let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27