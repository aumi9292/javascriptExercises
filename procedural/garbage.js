// In this code, global variable `outerFoo` cannot be garbage collected after line 8 because it is a globabl variable, and could still be accessed later in the program

let outerFoo;

function bar() {
  let innerFoo = 'abc';
  outerFoo = innerFoo;
}

bar();

// can outerFoo's value be garbage collected here?

// more code


// let myNum = 1; 

// function foo() { 
//   let myStr = 'A string'; 
// } 

// foo();

// When are `1` and 'A string' elligible for garbage collection? 

// 1 is a number, so it is stored on the stack and never elligible for gc. 

// Because `myStr` is a function scoped local variable, 'A string' can be garbage collected after the function it belongs to has been executed. 

function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    console.log(count);
  };
}

let counter = makeCounter();
counter();
counter();
counter();

// https://launchschool.com/lessons/0b371359/assignments/48d2a179
// The situation is more complicated when closures include variables that have primitive values. Since closures may need to track these variables and their values after the current stack frame is destroyed, they must be stored someplace other than the stack. You can think of these primitive values as being stored on the heap, which makes them subject to GC.

// Does this mean that the primitive value bound to the `count` variable can be thought of as being stored on the heap, and that eventually, when the closure is no longer in existence, the primitive number value will be elligible for garbage collection? 

// why aren't the objects below elligible for garbage collection? Even though they reference each other, aren't they not a part of any node after go finishes running? In other words, what's the difference between the below example and 
// function primitiveGo() {
//   let foo = "hello";
// }
// foo is elligible for gc
// Or, are the below objects elligible for GC using a mark-and-sweep algorithm, but inelligible using a reference counting system? If so, does that mean that the below objects are actually elligible for gc, as long as the JS engine uses a mark-and-sweep algorithm?

function go() {
  let foo = {};
  let bar = { qux: foo };
  foo.xyz = bar;
}

go();
// Neither `foo` nor `bar` is eligible for GC

// good thought exercise question about gc: https://launchschool.com/posts/87ad610e

