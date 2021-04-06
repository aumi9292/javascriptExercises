const person = {
  this: this,
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
console.log(person.this);

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    //let self = this;
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, franchise);
  },
};
console.log(franchise.allMovies());



let obj1 = {
  name: 'Austin',
};

let upCaseName = function() {
  return this.name.toUpperCase();
};

function myBind(func, context, ...partialArgs) {
  return function(...args) {
    let fullArgs = [...partialArgs, ...args];
    return func.apply(context, fullArgs);
  };
}

let add = function(num1, num2) {
  return num1 + num2;
};

let makeAdder = function(adder, num1) {
  return function(num2) {
    return adder(num1, num2);
  };
};

let add5 = makeAdder(add, 5);
console.log(add5(10));

let boundUpCase = myBind(upCaseName, obj1);
let add1 = myBind(add, null, 1);
console.log(add1(10));

console.log(boundUpCase());


function myFilter(array, func, context) {
  const result = [];

  array.forEach(value => {
    if (func.call(context, value)) {
      result.push(value);
    }
  });

  return result;
}

const filter = {
  allowedValues: [5, 6, 9],
};

console.log(myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter)); // returns [5, 6]