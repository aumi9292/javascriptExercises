let Foo = function() {};
let obj = Foo.prototype;

let bar = new Foo();
let baz = new Foo();

Object.getPrototypeOf(bar) === obj;  // true
Object.getPrototypeOf(baz) === obj;  // true

bar.constructor === Foo;             // true; bar is created from Foo
console.log(baz.constructor === Foo);             // true; baz is created from Foo
bar instanceof Foo;                  // true; bar is an instance of Foo
baz instanceof Foo;     
console.log(Foo.prototype);           // true; baz is an instance of Foo

let Hi = function() {};
Hi.prototype.hello = 'hello'
let greeter = new Hi;

console.log(Hi.prototype.hello);

// The comments are added for illustration purposes only
function Foo(a, b) {
  this.a = a;
  this.b = b;
}

// when Foo is called with new, as a constructor
function Foo(a, b) {
  // this = new Object();                      // a new object, or just {}
  // Object.setPrototype(this, Foo.prototype); // have the object inherit from Foo.prototype

  this.a = a;
  this.b = b;

  // return this;                     // return the created object
}

// another way to write it, with Object.create()
function Foo(a, b) {
  // this = Object.create(Foo.prototype);

  this.a = a;
  this.b = b;

  // return this;                     // return the created object
}