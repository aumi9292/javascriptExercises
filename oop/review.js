var greeting = 'hello';

function greet() {
  console.log(this);
  console.log(this.greeting);
}

greet();

var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;

bar.deliverMessage();

let obj1 = {
  a: 'Yo!',
  greet() {
    console.log(this.a);
  },
};

obj1.greet();
let orphaned = obj1.greet;
orphaned.call(obj1);