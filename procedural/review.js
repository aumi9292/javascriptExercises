'use strict';
// function createBusiness(employee) {
//   let id = 0;
//   let employees = [];
//   return function() {
//     return {
//       name: employee.name,
//       profession: employee.profession,
//       id: id++,
//       takeBreak() {
//         console.log(`I am taking a break!`);
//       }
//     };
//   };
// }

// let myBiz = createBusiness();
// let employee1 = myBiz({name: 'Bob', profession: 'carpenter'});
// // let employee2 = createEmployee({name: 'Jane', profession: 'radiologist'});
// // let employee3 = createEmployee({name: 'Fatim', profession: 'coder'});

// console.log(employee1);
// // console.log(employee2);
// // console.log(employee3);


// function createHome(address) {
//   return {
//     address,
//     remodel() {
//       console.log(`${this.address} has been remodeled`);
//     },
//     tearDown() {
//       console.log(`${this.address} home has been torn down.`);
//     }
//   };
// }

// let myHouse = createHome('1450 Albion St');
// myHouse.remodel();

// let obj = {
//   this: this,
//   showThis() {
//     console.log(this.this);
//   }
// }

//obj.showThis(); // When showThis() is executed in the context of obj, this resolves to its implicit execution context, which is `obj`. The obj property name `this` is accessed. The value, also `this`, resolves to the global object, which is logged to the console. 

// console.log(obj.this);
// console.log(this)

//let strippedShowThis = obj.showThis;
//strippedShowThis(); // When the method is stripped from its context, `this` resolves to the global object. The second, chained `this` is not a property name defined on the global object, and so this logs `undefined`

function makePerson(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

let austin = makePerson('Austin', 'Miller');
let celia = makePerson('Celia', 'Horowitz');
let zack = makePerson('Zack', 'Baltich');
let sam = makePerson('Sam', 'Provorse');

let bffs = [austin, celia, zack, sam];

let people = {
  bffs: [austin, celia, zack, sam],
  isInvalidPerson(person) {
    return !Object.values(person).some(name => typeof name !== 'string');
  },
  findFriend(person) {
    return this.bffs.find(friend => friend.firstName === person.firstName &&
      friend.lastName === person.lastName);
  },
  fullName(person) {
    console.log(`${person.firstName} ${person.lastName}`);
  },
  rollCall() {
    this.bffs.forEach(this.fullName);
  },
  addPerson(person) {
    if (this.isInvalidPerson(person)) return;
    this.bffs.push(person);
  },
  removePerson(person) {
    if (this.isInvalidPerson(person)) return;
    let toRemove = this.findFriend(person);
    if (toRemove) this.bffs.splice(this.bffs.indexOf(toRemove), 1);
  },
  updatePerson(toUpdate) {
    let place = this.bffs.indexOf(this.findFriend(toUpdate));
    this.bffs[place] = toUpdate;
  },
};

people.rollCall();
let matt = makePerson('Matt', 'Truesdell');
people.addPerson(matt);
people.rollCall();
//people.removePerson(celia);
console.log('\n');
people.rollCall();
people.addPerson('bob');
people.rollCall();
//console.log(people.findFriend({firstName: 'Zack', lastName: 'Baltich'}));
people.updatePerson({firstName: 'Celia', lastName: 'Horowitz', job: 'SLP'});
console.log(people.findFriend({firstName: 'Celia', lastName: 'Horowitz'}));

let invoices = {
  paid: [],
  unpaid: [],
  add(name, amount) {
    let client = {name, amount};
    this.unpaid.push(client);
  },
  totalDue() {
    return this.unpaid.reduce((total, curr) => total + curr.amount, 0);
  },
  totalPaid() {
    return this.paid.reduce((total, curr) => total + curr.amount, 0);
  },
  payInvoice(client) {
    let payer = this.unpaid.find(cli => cli.name === client);
    this.paid.push(payer);
    this.unpaid.splice(this.unpaid.indexOf(payer), 1);
  }
};

invoices.add('bob', 500);
invoices.add('stacey', 750);
invoices.add('trace', 300);
console.log(invoices);
console.log(invoices.totalDue());
invoices.payInvoice('bob');
console.log(invoices.totalDue());
console.log(invoices.totalPaid());

function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate,
    brakeRate,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) this.speed = 0;
    },
  };
}

let sedan = makeCar(8, 6);
sedan.accelerate();
sedan.brake();
sedan.brake();
sedan.brake();
sedan.brake();
console.log(sedan.speed);


let coupe = makeCar(12, 10);
coupe.accelerate();
coupe.brake();
console.log(coupe.speed);

let hatchback = makeCar(9, 4);
hatchback.accelerate();
hatchback.brake();
console.log(hatchback.speed);

let makeTool = function(name, id, stock, price) {
  return {
    name,
    id,
    stock,
    price,
    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log('Invalid Price');
        return;
      }
      this.price = newPrice;
    },
    describeProduct() {
      ['name', 'id', 'stock', 'price'].forEach(prop => {
        console.log(`${prop}: ${this[prop]}`);
      });
    },
  };
};

let scissors = makeTool('scissors', 0, 1, 10);

console.log(scissors);
scissors.setPrice(-10);
scissors.setPrice(100);
scissors.describeProduct();
console.log(toString());
console.log(this);
this.hello = 'hi';
console.log(this.hello);

function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    console.log(count);
  };
}

// let counter1 = makeCounter();
// counter1();
// counter1();
// counter1();
// counter1();

// count is private data for the function returned by makeCounter. The closure makes it impossible to access the value of count itself.

function makeCounterLogger(start) {
  let num = start;
  return function(end) {
    console.log(num);
    do {
      num <= end ? num += 1 : num -= 1;
      console.log(num);
    } while (num !== end);
  };
}
let countlog = makeCounterLogger(12);
countlog(8);

//countlog(2);
// Create a makeCounterLogger function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:
// > let countlog = makeCounterLogger(5);
// > countlog(8);
// 5
// 6
// 7
// 8
// > countlog(2);
// 5
// 4
// 3
// 2

function makeList() {
  let list = [];
  return {
    add(item) {
      list.push(item);
      console.log(`${item} has been added to the list`);
    },
    remove(item) {
      list.splice(list.indexOf(item), 1);
      console.log(`${item} has been removed from the list`);
    },
    list() {
      if (list.length === 0) {
        console.log("The list is empty")
        return;
      } else {
        list.forEach(item => console.log(item));
      }
    },
  }
}

let list = makeList();
list.list();

list.add('make breakfast');
list.add('read book');
list.list();;
list.remove('make breakfast');
list.list();

function makeMultipleLister(num) {
  let limit = 100;
  return function() {
    for (let factor = num; num <= 100; num += factor) {
      console.log(num);
    }
  };
}

let lister = makeMultipleLister(4);
lister();

let total = 0;

function add(num) {
  return total += num;
}

function subtract(num) {
  return total -= num;
}

console.log(add(14));
console.log(add(10));
console.log(subtract(100));

function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
    deposit(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount});
      return amount;
    },
    withdraw(amount) {
      if (balance < amount) amount = balance;
      balance -= amount;
      transactions.push({type: 'withdraw', amount});
      return amount;
    },
    balance() {
      return balance;
    },
    number() {
      return number;
    },
    transactions() {
      return transactions;
    }
  };
};

// let account = makeAccount();
// console.log(account.balance);
// console.log(account.deposit(12));
// console.log(account.balance);
// console.log(account.deposit(10));
// console.log(account.balance);
// console.log(account.withdraw(5));
// console.log(account.balance);
// console.log(account.withdraw(50));
// console.log(account.balance);
// console.log(account.transactions);

// let otherAcct = makeAccount();
// console.log(otherAcct.transactions);
// console.log(account.deposit(1200));
// console.log(account.balance);

function makeBank() {
  let id = 100;
  let accounts = [];
  return {
    openAccount() {
      id += 1;
      let account = makeAccount(id);
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    }
  };
}

let bank = makeBank();
let acct = bank.openAccount();
console.log(acct.number());
acct.deposit(10000);
console.log(bank.accounts);

let acct2 = bank.openAccount();
console.log(acct2.number());

bank.transfer(acct, acct2, 100);
console.log(acct.balance());
console.log(acct2.balance());



function add(n1, n2) {
  return n1 + n2;
}

function repeat(count, str) {
  return str.repeat(count);
}

function genericGenerator(func, arg1) {
  return function(arg2) {
    return func(arg1, arg2);
  }
}

let repeater = genericGenerator(repeat, 5)

console.log(repeater('hello'));

function addOne(val) {
  return add(1, val);
}

function makeAdder(val) {
  return function(secondVal) {
    return (add(val, secondVal))
  }
}

let tenAdder = makeAdder(10);
console.log(tenAdder(15));

function greet(greeting, person) {
  console.log(`${greeting}, ${person}!`);
}

greet('howdy', 'joe');

function genericGreeter(func, greeting) {
  return function(person) {
    return func(greeting, person);
  }
}

let sayHello = genericGreeter(greet, 'hello');
let sayHi = genericGreeter(greet, 'hi');

sayHello('Brandon')
sayHi('Sarah')

// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   return subtract(a, 5)
// }

// console.log(sub5(10)); // 5
// console.log(sub5(20)); // 15

function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  return function(n2) {
    return subtract(n2, n);
  };
}

let sub5 = makeSubN(5);
console.log(sub5(10)); // 5

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    console.log(rollCall('Math', students));
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan


(function() {
  let myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}`);
})();

let fun = (function () {
  let counter = 0;
  return function() {
    counter++;
    console.log(counter);
  }
})()

fun();
fun();
fun();

let inventory = (function() {
  let stocks = [];
  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock(newStock) {
      let isValid = stocks.every(function(stock) {
        return newStock.name !== stock.name;
      });
  
      if (isValid) { stocks.push(newStock) }
    },
  }
  })();
console.log(inventory)
inventory.addStock({name: 'pens', count: 10})
inventory.addStock({name: 'sharpies', count: 10})
inventory.addStock({name: 'pens', count: 10})
inventory.stockCounts();

let countdown = (function() {
    return function(upper) {
    while (upper >= 0) {
      console.log(upper);
      upper--
    };
    console.log('Done!');
  }
})();

countdown(7)

