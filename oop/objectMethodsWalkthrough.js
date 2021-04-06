// let me = {
//   firstName: 'Austin',
//   lastName: 'Miller',
// };

let me = {};
me.firstName = 'Austin';
me.lastName = 'Miller';
me.index = 0;

//console.log(me);

let partner = {};
partner.firstName = 'Celia';
partner.lastName = 'Horowitz';
partner.index = 1;

let friend1 = {
  firstName: 'Sam',
  lastName: 'Provorse',
  index: 2,
};

let friend2 = {
  firstName: 'Zack',
  lastName: 'Baltich',
  index: 3,
};

// let myPeeps = [me, partner, friend1, friend2];

// let fullName = function (person) {
//   console.log(`${person.firstName} ${person.lastName}`);
// };

// function rollCall(people) {
//   people.forEach(fullName);
// }

// rollCall(myPeeps);

let people = {
  collection: [me, partner, friend1, friend2],
  fullName(person) {
    let allDescriptors = Object.keys(person);
    allDescriptors.forEach(prop => console.log(`${person[prop]}`));
  },
  rollCall() {
    this.collection.forEach(this.fullName);
  },
  add(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    this.collection.push(person);
  },
  getIndex(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.index === person.index) index = i;
    });

    return index;
  },
  isInvalidPerson(person) {
    return typeof person.firstName === 'string' &&
    typeof person.lastName === 'string' &&
    typeof person.index === 'number';
  },
  remove(person) {
    let idx;
    if (this.isInvalidPerson(person)) {
      return;
    }
    idx = this.getIndex(person);
    if (idx === -1) {
      return;
    }
    this.collection.splice(idx, 1);
  },
  get(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    return this.collection[this.getIndex(person)]
  },
  update(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};

// people.rollCall();
// people.remove(friend2);
// people.remove({firstName: 'bill', lastName:'too'});
// people.remove({firstName: 'Zack', lastName:'Baltich'});
// console.log('\n')

// console.log(people.get({firstName: 'Zack', lastName:'Baltich'}))
people.update({firstName: 'Austin', lastName: 'Miller', occupation: 'software engineer'});

// console.log(people.get({firstName: 'Austin', lastName: 'Miller'}));
people.rollCall();
console.log(people.get(3));
// console.log(people.get({firstname: 'austin', lastName: 10}));
