let Place = {
  init(scenery, temp) {
    this.scenery = scenery;
    this.temp = temp;
    return this;
  },
  see() {
    console.log(`${this.scenery} as far as the eye can see`);
  },
};

// function Place(scenery, temp) {
//   this.scenery = scenery;
//   this.temp = temp;
// }

// Place.prototype.see = function () {
//   console.log(`${this.scenery} as far as the eye can see`);
// };

// let rockies = new Place('Mountains', 60);
let rockies = Object.create(Place);
rockies.init('Mountains', 60);
rockies.see();

let City = {
  init(scenery, temp, name, population) {
    Object.assign(this, Place).init(scenery, temp);
    this.name = name;
    this.population = population;
    return this;
  },
  describe() {
    console.log(`${this.name} has a population of around ${this.population} people`);
  }
};

// function City(scenery, temp, name, population) {
//   Place.call(this, scenery, temp);
//   this.name = name;
//   this.population = population;
// }

// City.prototype = Object.create(Place.prototype);
// Object.defineProperty(City.prototype, 'constructor', {
//   value: City,
//   enumerable: false,
// });
// City.prototype.describe = function () {
//   console.log(`${this.name} has a population of around ${this.population} people`);
// };

// let denver = new City('plains', 80, 'Denver', 3000000);
let denver = Object.create(City);
denver.init('plains', 80, 'Denver', 3000000);
console.log(denver);
denver.see();
denver.describe();

console.log(denver.see === rockies.see);

let buildMixin = {
  build(building) {
    this.addBuilding(building);
    console.log(`A new ${building} has been built`);
  },
  addBuilding(building) {
    if (!this.buildings) this.buildings = [];
    this.buildings.push(building);
  },
  listBuildings() {
    console.log(`${this.name} has ${this.buildings.length} buildings`);
    this.buildings.forEach(building => console.log(building));
  },
};

Object.assign(City, buildMixin);

denver.build('City Park Tower');
denver.build('9th and Co');
denver.listBuildings();

let _ = function(element) {
  return {
    last() {
      return element[element.length - 1];
    },
  };
};

function test(message, assertion) {
  let passed = false;

  try {
    passed = assertion();
  } catch {
    passed = false;
  }
  console.log(passed, message);
}

test("last is defined", function() {
  return typeof _().last === "function";
});

test("last returns last element in an array", function() {
  return _([1, 2, 3, 4]).last() === 4;
});

console.log(_([1, 2, 3, 4]).last());