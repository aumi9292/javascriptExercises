function foo(bar) {
  return {
    bar,
    qux() {
      console.log('hello');
    },
  };
}

foo().qux();
console.log(foo('hi').bar);

function evening() {
  console.log('Good evening!');
}
evening();

let greeter = {
  morning() {
    console.log('Good morning!');
  }
};

let morningGreeting = greeter.morning;

greeter.morning();

morningGreeting();

let counter = {
  count: 0,
  advance() {
    this.count += 1;
  },
};

console.log(counter);
counter.advance();
console.log(counter);

let otherCounter = counter.advance; // Does `this` become meaningless if `otherCounter` is called? 

otherCounter();
otherCounter();
console.log(counter); // does not reflect changed counter values

let denver = {
  population: 3000000,
  hip: true,
  neighborhoods: ['Rino', 'South City Park', 'Hale', 'City Park West'],
  build(newNeighborhood) {
    this.neighborhoods.push(newNeighborhood);
    console.log(`${newNeighborhood} built in Denver`);
  },
  gentrify() {
    let hoods = this.neighborhoods.length;
    let toGentrify = this.neighborhoods[Math.floor(Math.random() * hoods)];
    console.log(`Awesome, a climbing gym and a brewery have been added to ${toGentrify}`);
  },
};

denver.gentrify()
denver.build('9th and Co');