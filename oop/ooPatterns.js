// // name property added to make objects easier to identify
// const foo = {name: 'foo'};
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// Object.prototype.ancestors = function() {
//   let ancestors = [];
//   let parent = Object.getPrototypeOf(this);
//   while (Object.getPrototypeOf(parent) !== null) {
//     ancestors.push(parent.name);
//     parent = Object.getPrototypeOf(parent);
//   }
//   ancestors.push('Object.prototype')
//   console.log(ancestors);
// }

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

// function delegate(context, func, ...args) {
//   let funcToFind = function func(args) {};
//   return funcToFind.apply(context, args);
// }

function delegate(context, func, ...args) {
  return function() {
    return context[func](...args);
  };
}

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'