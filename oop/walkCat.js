class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }

}

let walkMixin = {
  walk() {
    return 'Let\'s go for a walk!';
  },
};

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());

// swimming

const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  },
};

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

[Fish, Maltese].forEach(animal => Object.assign(animal.prototype, swimMixin));

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());

// towable

// class Truck {}

// class Car {}

// let towMixin = {
//   tow() {console.log('I can tow a trailer!')},
// };

// Object.assign(Truck.prototype, towMixin);

// let truck = new Truck();
// truck.tow();

// towable 2

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

const towMixin = {
  tow() {
    return "'I can tow a trailer!'";
  },
};

class Truck extends Vehicle {
  constructor(year) {
    super(year)
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);