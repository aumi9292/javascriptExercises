// function getDefiningObject(object, propKey) {
//   while (Object.getPrototypeOf(object) !== null) {
//     if (object.hasOwnProperty(propKey)) return object;
//     object = Object.getPrototypeOf(object);
//   }
//   return null;
// }
function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object;
}

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

// why doesnt this work?
// function shallowCopy(object) {
//   let copy = Object.create(object);
//   return copy;
// }

// function shallowCopy(object) {
//   let result = Object.create(Object.getPrototypeOf(object));
//   let prop;

//   for (prop in object) {
//     if (Object.prototype.hasOwnProperty.call(object, prop)) {
//       result[prop] = object[prop];
//     }
//   }

//   return result;
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
// console.log(baz.say());                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false

function extend(destination, ...sources) {
  sources.forEach(source => {
    Object.keys(source).forEach(key => destination[key] = source[key]);
  });
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

// What is happening in this snippet? 
// function extend(destination) {
//   for (let i = 1; i < arguments.length; i++) {
//     let source = arguments[i];
//     for (let prop in source) {
//       if (Object.prototype.hasOwnProperty.call(source, prop)) {
//         destination[prop] = source[prop];
//       }
//     }
//   }

//   return destination;
// }