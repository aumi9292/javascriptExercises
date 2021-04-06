class Shelter {
  constructor() {
    this.adopted = {};
  }

  static animals = [];

  adopt(owner, animal) {
    if (!this.adopted[owner.name]) this.adopted[owner.name] = [];
    let animalIdx = Shelter.animals.indexOf(animal);
    let selected = Shelter.animals.splice(animalIdx, 1)[0];
    this.adopted[owner.name].push(selected);
    owner.pets.push(selected);
  }

  printAdoptions() {
    console.log(Object.keys(this.adopted))
    Object.keys(this.adopted).forEach(owner => {
      console.log(`${owner} has adopted the following pets:`);
      this.adopted[owner].forEach(animal => {
        console.log(animal.info());
      });
    });
  }
}

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    Shelter.animals.push(this);
  }

  info() {
    return `A ${this.type} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }
}



let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);