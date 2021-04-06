// console.log(this)
// function whatIsMyContext() {
//   return this;
// }

// // This is indeterminate. We cannot know the execution context of a function until execution time. 

// // In node, `this` in a function defined in the top level scope of the program resolves to {}. In the browser, `this` in the top level scope resolves to `Window`

// console.log(whatIsMyContext());

// function foo() {
//   function bar() {
//     function baz() {
//       console.log(this);
//     }

//     baz();
//   }

//   bar();
// }

// foo();

let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count; // this resolve to myChildObject object.
    },
  },
};

console.log(myObject.myChildObject.myMethod.call(myObject));

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let specialDiscount = function() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(computer);

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());