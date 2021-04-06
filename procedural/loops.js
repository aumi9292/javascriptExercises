for (let i = 0; i <= 10; i += 2) {
  console.log(i)
}
for (let i = 10; i > 0; i -= 1) {
  console.log(i);
  if (i === 1) console.log("Launch!");
}

let greeting = "Aloha"

for (let i = 0; i < 3; i += 1) {
  console.log(greeting)
}

for (let i = 1; i < 101; i += 1) {
  console.log(i * 2)
}

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1
}

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) continue; 
  console.log(cities[i])
}

for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}

let int = 1 

while (int <= 40) {
  console.log(int)
  int += 2
}

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (fishie in fish) {
  console.log(fish[fishie])
  if (fish[fishie] === 'Nemo') break; 
}