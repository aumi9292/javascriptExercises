// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);

// bar.a;                // 1
// baz.a;                // 1
// baz.c;                // undefined

let foo = {
  hello() {
    return 'hello ' + this.name;
  },
};

let bar = Object.create(foo);
bar.hello = function() {console.log('yoyoyoyo');};
bar.name = 'world';
bar.hello();          // returns hello world

console.log([].hasOwnProperty('length'));
