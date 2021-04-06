function makeCounterLogger(start) {
  let num = start;
  return function(end) {
    while (num <= end) {
      console.log(num);
      num += 1;
    }
  };
}

let countLog = makeCounterLogger(5);
countLog(10);

function makeList() {
  let todos = [];
  return function(specifiedTodo) {
    if (specifiedTodo === undefined) {
      if (todos.length === 0) {
        console.log('The list is empty.');
      } else {
        todos.forEach(todo => console.log(todo));
      }
    } else if (todos.includes(specifiedTodo)) {
      let todoIdx = todos.indexOf(specifiedTodo);
      let removed = todos.splice(todoIdx, 1);
      console.log(`${removed} has been removed!`);
    } else if (!todos.includes(specifiedTodo)) {
      todos.push(specifiedTodo);
      console.log(`${specifiedTodo} has been added!`);
    }
  };
}

let list = makeList();
list();
list('make dinner');
list('read');
list();
list('read');
list();

function makeMultipleLister(start) {
  let num = start;
  return function() {
    if (num <= 0) return num;
    while (num <= 100) {
      console.log(num);
      num += start;
    }
  };
}

let lister = makeMultipleLister(13);
lister();

// function numberManipulator(operation) {
//   let start = 0;
//   function add(num) {
//     start += num;
//     console.log(start);
//   }
//   function subtract(num) {
//     start -= num;
//     console.log(start);
//   }
//   return operation === 'add' ? add : subtract;
// }

// let add = numberManipulator('add');
// let subtract = numberManipulator('subtract');

let total = 0;

function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}

add(1);
add(42);
subtract(39);
add(6);

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus = ready.status;
console.log(systemStatus);