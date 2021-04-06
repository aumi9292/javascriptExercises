function add(num2) {
  return function(num1) {
    return num2 + num1;
  };
}

let tenAdder = add(10);
let hundredAdder = add(100);

console.log(tenAdder(4));
console.log(hundredAdder(3));

// function greet(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// let sayHi = greet('Hi');
// let sayHello = greet('hello');

// sayHi('bob');
// sayHello('kathy');



function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  let message = capitalized + ', ' + name + '!';
  console.log(message);
}

function partial(primary, arg1) {
  return function(arg2) {
    primary(arg1, arg2);
  };
}

let greeter = partial(greet, 'Hi');
greeter('yllow');

// Partial App Practice Problems
// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   return subtract(a, 5);
// }

// console.log(sub5(10)); // 5
// console.log(sub5(20)); // 15

// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(n) {
//   return function(num2) {
//     return subtract(num2, n);
//   };
// }

// let sub5 = makeSubN(5);
// console.log(sub5(10)); // 5

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500

// The return value of makePartialFunc is itself a function. The variable `multiplyBy5` is bound to this function. Because every function creates a closure and retains access to all variables in the lexical scope where it is defined, the multiplyBy5 function retains access to all identifiers in the makePartialFunction scope. Nothing in makrPartialFunc is garbage collected until the program finishes running, because multiplyBy5 is a global variable, and ensures that any variable used in makePartialFunc is NOT elligible for garbage collection. 

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  };
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan