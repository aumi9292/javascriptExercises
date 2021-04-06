// function makeList() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + ' added!');
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + ' removed!');
//       }
//     } else {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     }
//   };
// }

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

function makeList() {
  let todos = [];
  return {
    list() {
      if (todos.length === 0) {
        console.log('The list is empty.');
      } else {
        console.log('--TODOS--')
        todos.forEach(todo => console.log(todo));
    }
  },
    add(todo) {
      todos.push(todo);
      console.log(`${todo} has been added!`);
    },
    remove(todo) {
      let todoIdx = todos.indexOf(todo);
        let removed = todos.splice(todoIdx, 1);
        console.log(`${removed} has been removed!`);
    },
  }
}

let list = makeList();
list.list();
list.add('make dinner');
list.add('read');
list.list();
list.remove('read');
list.list();