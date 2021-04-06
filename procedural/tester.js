let obj = {
  a: 10,
  b() {
    console.log('hello');
  },
};

console.log(Object.prototype.hasOwnProperty.call(obj, 'a'));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getPrototypeOf(obj) === Object.prototype);

let Person = function() {
  console.log(this.constructor.prototype === Person.prototype);
};

new Person()

