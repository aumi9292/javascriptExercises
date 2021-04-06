const obj = {
  monkey: 'yep',
};

console.log(typeof obj === 'object');
console.log(typeof obj === 'function');
console.log(obj.hasOwnProperty('monkey'));
console.log(obj.hasOwnProperty('elephant'));

console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(typeof Object === 'function');
console.log(obj.prototype);

const func = function() {};

func.call();
console.log(func.hasOwnProperty('constructor'));
console.log(Object.getPrototypeOf(func).hasOwnProperty('constructor'));
console.log(Object.getPrototypeOf(func) === Function.prototype);

const arr = [1, 2];
console.log(arr.join(''));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getPrototypeOf(Object) === Object.__proto__);

console.group('Example 4')
const arr2 = ['a', 'b'];
console.log(arr2.hasOwnProperty(0));
console.log(Object.getPrototypeOf(arr) === Array.prototype);
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Function) === Function.prototype);
console.log(Object.getPrototypeOf(Object) === Function.prototype);
console.log(typeof Array.prototype);
console.log(typeof Object.prototype);
console.log(typeof Function.prototype);
console.groupEnd();

// console.group('Example 5: factory functions using prototype properties');
// const userFunctions = {
//   add() {
//     this.points += 1;
//   },
//   login() {
//     console.log('You\'re logged in!');
//   },
// };

// function userCreator(name, points) {
//   const newUser = Object.create(userFunctions);
//   newUser.name = name;
//   newUser.points = points;
//   return newUser;
// }

// const user = userCreator('austin', 10);
// user.add();
// user.add();
// user.add();
// console.log(user);

// console.groupEnd();


console.group('Example 6: constructor functions');

// function User(name, points) {
//   this.name = name;
//   this.points = points;
// }

// User.prototype.add = function() { this.points += 1};
// User.prototype.login = function() {console.log('You\'re logged in!');};
// // Object.defineProperty(User.prototype, 'constructor', {
// //   value: User,
// //   enumerable: false,
// // });

// const user = new User('austin', 10);
// user.add();
// user.add();
// user.add();
// console.log(user);
// console.log(user.constructor);

// console.groupEnd();

console.group('Example 7');

function User(name) {
  this.name = name;
}

function PaidUser(name, balance) {
  User.call(this, name);
  this.balance = balance;
}

User.prototype.sayName = function() { console.log(`I'm ${this.name}`)};
PaidUser.prototype = Object.create(User.prototype);
PaidUser.prototype.increase = function() { this.balance += 10 };

Object.defineProperty(PaidUser.prototype, 'constructor', {
  value: PaidUser,
  enumerable: false,
});

const user = new User('austin');
const paidUser = new PaidUser('austin', 100);
user.sayName();
console.log(user.constructor);
paidUser.increase();
console.log(paidUser);
console.log(paidUser.constructor);
paidUser.sayName();
console.groupEnd();