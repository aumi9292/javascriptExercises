function sum(values) {
  let total = 0; 

  for (idx in values) {
    total += values[idx]; 
  }
  return total; 
}

function average(vals) {

  return (sum(vals) / vals.length).toPrecision(4); 
}

console.log(sum([5, 10, 20]))
console.log(average([10, 5, 20, 60, 43, 20, 100])); 

let arr = [1, 2, 3]; 

for (num in arr) {
  console.log(num); 
}

console.log(getName())

function getName() {
  return "Austin";
}

// function foo() {
//   if (true) {
//     function bar() {
//       console.log("bar");
//     }
//   } else {
//     function qux() {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux);
//   qux();
// }

// foo();

var a = "gel"
var a = 'll'

console.log(a)

function foo() {
  let name = "Austin"
  return () => console.log(name);
}

let printAustin = foo()
printAustin(); 

function makeCounter() {
  let counter = 0; 

  return function() {
    counter += 1; 
    return counter; 
  }
}

let incrementCounter = makeCounter()
console.log(incrementCounter()); 
console.log(incrementCounter()); 
console.log(incrementCounter()); 

function add(first, second) {
  return first + second; 
}

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber); 
  };
}

let addFive = makeAdder(5)
let addTen = makeAdder(10)

console.log(addFive(100))
console.log(addTen(100))