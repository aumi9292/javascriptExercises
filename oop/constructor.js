function Person(firstName, lastName = '') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

let austin = new Person('Austin', 'Miller');
let celia = new Person('Celia', "Horowitz");

console.log(austin.fullName());
console.log(celia.fullName());

console.log(austin.constructor);
console.log(celia.constructor);

console.log(celia instanceof Person);