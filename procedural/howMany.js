const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(vehicles) {
  let counts = {};
  vehicles.forEach(veh => {
    counts[veh] = counts[veh] + 1 || 1;
  });

  Object.entries(counts).forEach(set => console.log(`${set[0]} => ${set[1]}`));
}

                countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2