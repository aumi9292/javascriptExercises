// Which JS OO pattern is associated with the static method Object.create(). Can you demonstrate using this pattern? 

let Place = {
  init(temp, scenery) {
    this.temp = temp;
    this.scenery = scenery;
    return this;
  },
  observe() {
    console.log(`${this.scenery} as far as the eye can see`);
  }
};

let Habitat = {
  init(name, temp, scenery, population) {
    Object.create.call(this, Place).init(name, temp);
    this.scenery = scenery;
    this.population = population;
    return this;
  },
  visit() {
    console.log(`Wow, ${this.name} is really cool!`);
  },
};

let rockies = Object.create(Place).init(60, 'Mountains');
rockies.observe();

let denver = Object.create(Habitat).init('Denver', 10, 'High desert', 3000000);
denver.visit();

// How is JavaScript’s [[Prototype]] chain not like traditional/classical inheritance?
// What does “behavior delegation” mean and how does it describe object linking in JS?
// Why is “behavior delegation” as a design pattern a helpful thing? What are the tradeoffs?


// function getDefiningObject(object, propKey) {
//   for (let parentProto = Object.getPrototypeOf(object);
//     parentProto;
//     parentProto = Object.getPrototypeOf(parentProto)) {
//     if (parentProto.hasOwnProperty(propKey)) return parentProto;
//   }
//   return null;
// }

// let obj = {a:1, b:2};
// console.log(Object.getOwnPropertyNames(obj).map(key => obj[key]));

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
//   let copied = Object.create(Object.getPrototypeOf(object));
//   Object.keys(object).forEach(key => copied[key] = object[key])
//   return copied;
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

// let a = {
//   hasOwnProperty: 1,
// };

// console.log(shallowCopy(a));

function extend(destination, ...sources) {
  sources.forEach(source => Object.assign(destination, source));
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

function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.constructor.prototype.bark = function() {
    console.log('bark bark');
  };
}

let bub = new Dog('bub', 'he', 15);
let jarjar = new Dog('jarjar', 'he', 15);
console.log(Object.prototype.hasOwnProperty.call(bub, 'bark'));

function createObject(obj) {
  function F() {
    //this.contructor.prototype = obj; //what happens here?
  };
  F.prototype = obj;
  return new F();
}

let foo2 = {
  a: 1
};

let bar = createObject(foo2);
console.log(Object.getPrototypeOf(bar));
console.log(foo2.isPrototypeOf(bar));         // true

function newPerson(name) {
  let person = {};
  person.name = name;
  Object.defineProperties(person, {
    log: {
      value: function() {console.log(this.name)},
      writable: false,
    },
  });
  return person;
}

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley