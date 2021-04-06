// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// console.log(student['courses'])
// console.log(student.courses)
// console.log(student.cossurses)

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };

// console.log(jane['location']['country'])

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido.age = 16
// fido['favorite food'] = 'tacos'

// console.log(fido)

// function greet(name) {
//   console.log(`Hej, ${name}`)
// }

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet: greet
// };


// jane.greet('Bobby'); // Hej, Bobby!

// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// console.log(Object.keys(vehicle))

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let keys = Object.entries(person)

// console.log(keys)
// let obj = {}; 
// keys.forEach(function(pair) {
//   obj[pair[0]] = pair[1]
// })
// console.log(obj)
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

function clone(obj) {
  cloned = {}
  Object.entries(obj).forEach(function(pair) {
    cloned[pair[0]] = pair[1]
  })
  return cloned
}

function clone2(obj) {
  return Object.assign({}, obj); 
}



let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33