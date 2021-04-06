// function makeInventoryItem(name, stock = 0, price) {
//   let counter = 0;
//   counter += 1;
//   return {
//     id: counter,
//     name,
//     stock,
//     price,
//   };
// }

// let scissors = makeInventoryItem('scissors', 0, 10);
// console.log(scissors);

// let drill = makeInventoryItem('drill', 0, 10);
// console.log(drill);

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(price) {
      if (price < 0) {
        console.log('Sorry, the price must be a number greater than 0');
        return;
      }
      console.log('Congratulations, you have adjusted the item price.');
      this.price = price;
    },
    describeProduct() {
      Object.entries(this).slice(0, 4).forEach(([prop, val]) => console.log(`${prop}: ${val}`));
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'drill', 15, 45);
let hammer = createProduct(2, 'hammer', 5, 7.5);

drill.setPrice(100);
drill.describeProduct();
scissors.describeProduct();
hammer.describeProduct();