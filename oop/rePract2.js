let shape = {
  getType() {
    console.log(this.type);
  },
  getPerimeter() {
    console.log(this.a + this.b + this.c);
  },
};

function Triangle(a, b, c, type = 'triangle') {
  Triangle.prototype.constructor = Triangle;
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = type;
}

Triangle.prototype = shape;


let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"


function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }
  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

function createObject(obj) {
  // let newObj = {};
  // return Object.setPrototypeOf(newObj, obj);
  function F() {};
  F.prototype = obj;
  return new F();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true

let fooo = {
  a: 1,
  begetObject() {
    function F() {};
    F.prototype = this;
    return new F();
  }
};

let barr = fooo.begetObject();
console.log(fooo.isPrototypeOf(barr));         // true

function neww(constructor, args) {
  let newObj = Object.create(constructor.prototype);
  constructor.apply(newObj, args);
  return newObj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}


function newPerson(name) {
  return Object.defineProperties({name: name}, {
    log: {
      value: function() { console.log(`${this.name}`); },
      writable: false
    },
  });
}



let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley

console.log(__filename)