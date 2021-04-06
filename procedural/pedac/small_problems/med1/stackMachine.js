// problem: Implement a stack-and-register function that can take a variable number of arguments and perform stack-and-register operations based on the arguments. 

// rules
//  All operations will be related to arithmetic, adding to the stack, removing from the stack, and displaying to the console
//  there should be a stack and a register (register represents a current number)
//  All arithmetic operations use the last number in the stack and the number in the register. When the number in the stack is used, it is popped off. The return value of the operation is then saved as the register
//  possible tokens
//    n (place a value in the register)
//    PUSH: add the register value to the stack, leave it in the register too
//    ADD: pop stack, add to register, resave register to new value
//    SUB: pop stack, subtract from register, resave register to new value
//    MULT: pop stack, multiply it with register, resave register to new value
//    DIV: pop stack, divide the register value by it, resave register to new value
//    MOD: pop stack, divide the register value by it, save remainder integer value as the register
//    POP: pop stack, save the value as register
//    PRINT: log the register value to the console

//  can assume all arguments are value, not pop non-existent values, they won't contain unknown tokens
//  stack should start with [], register should start with 0
//  spaces will dilineate everything

//  data structures: input: string, return: stack and register operations, sometimes console output

//  algorithm
//    init stack to []
//    init register to 0
//    split the string by spaces ['5', 'PUSH', '3', 'MULT', 'PRINT']
//    if the element is equal to print, log the register to console
//    if element is equal to a number, add the number to the register
//    if elem is equal to push, add the next element (a number) to the stack, skip iterating over that element
//    if the elem is equal to mult, add, sub, div, or mod, pop the last value of the stack, perform the correct arithmetic operation, and save the return value as the new register

function minilang(commandStr) {
  let stack = [];
  let register = 0;
  let commands = commandStr.split(' ');
  for (let idx = 0; idx < commands.length; idx++) {
    if (Number(commands[idx])) {
      register = Number(commands[idx]);
    } else if (commands[idx] === 'PRINT') {
      console.log(register);
    } else if (commands[idx] === 'PUSH') {
      stack.push(register);
    } else if (commands[idx] === 'POP') {
        register = stack.pop();
    } else {
      let operation = commands[idx];
      if (operation === 'MULT') register = stack.pop() * register;
      if (operation === 'ADD') register = stack.pop() + register;
      if (operation === 'SUB') register = register - stack.pop();
      if (operation === 'DIV') register = Math.round(register / stack.pop());
      if (operation === 'MOD') register = Math.round(register % stack.pop());
    }
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)