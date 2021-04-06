// function increm() {
//   let counter = 1;
//   return function() {
//     return counter += 1;
//   }
// }

const { keyIn } = require("readline-sync");

// let test = increm()

// test()
// test()
// console.log(test())



// function makeAdder(firstNumber) {
//   function add(first, second) {
//     return first + second;
//   }
//   return function(secondNumber) {
//     return add(firstNumber, secondNumber);
//   };
// }

// let addFive = makeAdder(5);
// let addTen = makeAdder(10);

// console.log(addFive(3));  // 8
// console.log(addFive(55)); // 60
// console.log(addTen(3));   // 13
// console.log(addTen(55));  // 65

// console.log([1, 'a', 4].reduce((acc, el) => {
//   return acc + el
// }, ''))

// let object = {
//   a: 'hello',
//   b: 'world',
// };

// console.log(object.a);                 // "hello", dot notation
// console.log(object['b']);              // "world", bracket notation
// console.log(object[b]);              // "world", bracket notation
// console.log(object.c);   

// let object = {
//   a: 'hello',
//   b: 'world',
// };

// object.a;                 // "hello", dot notation
// object['b'];              // "world", bracket notation
// object.c;                 // undefined when property is not defined

let foo = {
  a: 1,
  good: true,
  'a name': 'hello',
  person: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {        // function expression as property value
    return 2;
  },
  d() {                   // compact method syntax
    return 4;
  }
};

foo['a name'];            // "hello", use bracket notation when property name is an invalid identifier
foo['goo' + 'd'];         // true, bracket notation can take expressions
let a = 'a';
foo[a];                   // 1, bracket notation works with variables since they are expressions
foo.person.name;          // "Jane", dot notation can be chained to "dig into" nested objects
foo.c();                  // 2, Call the method 'c'
foo.d();                  // 4, Call the method 'd'

for (let key in foo) {
  console.log(key);
  console.log(foo[key]);
}


let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};

function copyProperties(toCopy, target) {
  for (let key in toCopy) {
    target[key] = toCopy[key];
  }
  return target;
}

copyProperties(hal, sal);  // 2
console.log(sal);                       // { model: 9000, enabled: true }
console.log(sal.length)