// let shape = {
//   getType() {
//     console.log(this.type);
//   }
// }

// function Triangle(s1, s2, s3) {
//   Object.setPrototypeOf(this, shape);
//   this.constructor = Triangle;
//   this.a = s1;
//   this.b = s2;
//   this.c = s3;
//   this.type = 'triangle';
// }

// Triangle.prototype = shape;

// shape.getPerimiter = function() {
//   console.log(this.a + this.b + this.c);
// };

// let tri = new Triangle(4, 5, 6);
// console.log(tri.constructor);
// console.log(shape.isPrototypeOf(tri));
// tri.getType();
// tri.getPerimiter();


// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = `${first} ${last}`;
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// function createObject(proto) {
//   let obj = {};
//   Object.setPrototypeOf(obj, proto);
//   return obj;
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

let foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  let F = function() {}
  F.prototype = this;
  return new F()
}

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true

function neww(constructor, args) {
  let obj = Object.create(constructor.prototype);
  constructor.apply(obj, args);
  return obj;
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
  let person = {
    name
  };
  Object.defineProperties(person, {
    log: {
      value: function() { console.log(this.name) },
      writable: false,
    },
  });
  return person;
}

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley