const obj = {
  monkey: 'yep',
};

console.log(typeof obj === 'object');
console.log(typeof obj === 'function');

console.log(obj.hasOwnProperty('monkey'));
console.log(obj.hasOwnProperty('elephant'));

console.log(typeof Object);
console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(Object.getPrototypeOf([]));
console.log([].constructor);
console.log([].__proto__);

// we get __proto__ and constructor properties on all objects, but never a prototype property. Proptotype properties are a property of function objects

// constructor refers to the function that created the calling object
// __proto__ refers to the prototype property on the constructor function object
// Object is the final link in the prototypal chain--its prototype does have a __proto property, but the value __proto__ points to is null



console.log(Array.prototype);
console.log(Object.prototype);
console.log(Array.constructor);
console.log(Function.constructor);
const arr = ['a', 'b'];

console.log(arr.hasOwnProperty(0));

// The Array function object has a property `from`, which is a property with a value of a function

function newStack() {
  let stack = [];
  return {
    push(newItem) {
      stack.push(newItem);
    },
    pop() {
      stack.pop();
    },
    showStack() {
      stack.forEach(item => console.log(item));
    },
  };
}

let stack = newStack();
stack.push(10);
stack.push('abc');
stack.push(null);
stack.push(100000);
stack.pop();
stack.showStack();



const greeter = {
  message: `${(function() {return 'Naveed';})()} ${(function() {return 'Herllo';})()}!`,
  sayGreetings() {
    console.log(this.message);
  }
};

greeter.sayGreetings();

const greeter2 = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';

    return `${greeting} ${name}`;
  })(),
  sayGreetings() {
    console.log(this.message);
  }
};

greeter2.sayGreetings();

const userFunctions = {
  add() {
    this.points += 1;
  },
  login() {
    console.log("You're logged in!");
  },
};

function userCreator(name, points) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.points = points;
  return newUser;
}

const user = userCreator('Austin', 10);
console.log(user);
console.log(user.constructor);
console.log(user.__proto__);
console.log(user.prototype);
//There is no prototype property in non function objects, including user

// new creates an object and sets the __proto__ property to the prototype property
//  all functions are objects, all object forms of functions give you the prototype property 
// new sets `this` somehow
// new also returns the newly created object 

// new gives us a new execution context
// .__proto__ is where js looks for additional properties if it does not find it as part of the current object
//__proto__ referes to the prototype property that belongs to the value of the property with the name constructor



