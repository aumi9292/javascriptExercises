// let foo = {};
// let qux = Object.create(foo);

// console.log(Object.getPrototypeOf(qux) === foo);
// console.log(Object.getPrototypeOf(foo));

// let bar = {};
// let foo = {};
// let qux = Object.create(foo);
// console.log(foo.isPrototypeOf(qux));
// console.log(bar.isPrototypeOf(foo));
// Object.setPrototypeOf(qux, bar);
// console.log(bar.isPrototypeOf(qux));
// console.log(foo.isPrototypeOf(qux));

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// console.log(Object.getPrototypeOf(qux) === bar);       // true
// console.log(Object.getPrototypeOf(baz) === bar);       // true
// console.log(Object.getPrototypeOf(bar) === foo);       // true

// console.log(foo.isPrototypeOf(qux));                   // true - because foo is on qux's prototype chain

let prot = {};

let foo = Object.create(prot);
console.log(Object.getPrototypeOf(foo) === prot);
console.log(prot.isPrototypeOf(foo));

// let prot = {};

// let foo = Object.create(prot);

console.log(prot.isPrototypeOf(foo));
console.log(Object.prototype.isPrototypeOf(foo));