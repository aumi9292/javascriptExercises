function makeCountry(name, continent, value = false) {
  return {
    name,
    continent,
    getDescription() {
      let description = `${this.name} is located in ${this.continent}.`;
      let visitation = `I have${this.visited ? '' : 'n\'t'} visited ${this.name}`;
      return `${description} ${visitation}`;
    },
    value,
    visitCountry() {
      this.visited = true;
    }
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());
console.log(canada.getDescription());
console.log(southAfrica.getDescription());
chile.visitCountry();
console.log(chile.getDescription());
