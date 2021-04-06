'use strict';

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  
  Person.prototype.fullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
  };

  Person.prototype.communicate = function() {
    console.log(`I am a ${this.constructor.name} type. I can communicate.`);
  };

  Person.prototype.eat = function() {
    console.log('nomnom');
  };

  Person.prototype.sleep = function() {
    console.log('honkshoo honkshoo');
  };
}

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
  
//   Doctor.prototype = Person.prototype;
//   this.specialization = specialization;
//   Doctor.prototype.diagnose = function() {console.log('Diagnosing');};
//   Object.defineProperty(Doctor.prototype, 'constructor', {
//     value: Doctor,
//     enumerable: false,
//     writable: true
//   });
//   return this;
// }

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
  Doctor.prototype.diagnose = function() {console.log('Diagnosing');};
}

Doctor.prototype = Object.create(Person.prototype);

const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor.__proto__ === Person.prototype);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
  this.study = function() {console.log('studying');};
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree)
  this.graduateDegree = graduateDegree;
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() {console.log('researching');};
GraduateStudent.constructor = GraduateStudent;

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'