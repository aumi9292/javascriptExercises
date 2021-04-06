(function() {
  console.log('hello');
})();

// let myPet = {
//   type: 'Dog',
//   name: 'Spot',
// };

// console.log(`I have a ${myPet.type} named ${myPet.name}`);

// function createAndLogPet() {
//   let myPet = {
//     type: 'Dog',
//     name: 'Spot',
//   };

//   console.log(`I have pet ${myPet.type} named ${myPet.name}`);
// }

// let studentId = 0;

// function generateStudentId() {
//   studentId += 1;
//   return studentId;
// }
let generateStudentId = function() {
  let studentId = 0;

  return function() {
    studentId += 1;
    return studentId;
  };
}();

// let generateStudentId = (function() {
//   let studentId = 0;

//   return function() {
//     studentId += 1;
//     return studentId;
//   };
// })();

console.log(generateStudentId());
console.log(generateStudentId());
console.log(generateStudentId());

// let inventory = {
//   stocks: [],
//   stockCounts() {
//     this.stocks.forEach(function(stock) {
//       console.log(stock.name + ': ' + String(stock.count));
//     });
//   },
//   addStock(newStock) {
//     let isValid = this.stocks.every(function(stock) {
//       return newStock.name !== stock.name;
//     });

//     if (isValid) { this.stocks.push(newStock) }
//   },
// };

// let inventory = (function() {
//   let stocks = [];
//   function isValid(newStock) {
//     return stocks.every(stock => {
//       return newStock.name !== stock.name;
//     });
//   }

//   return {
//     stockCounts() {
//       stocks.forEach(function(stock) {
//         console.log(stock.name + ': ' + String(stock.count));
//       });
//     },
//     addStock(newStock) {
//       if (isValid) { stocks.push(newStock) }
//     },
//   };
// })();

// console.log(inventory.addStock({name: 'scissors', count: 10}));
// console.log(inventory.addStock({name: 'balloons', count: 10}));
// inventory.stockCounts();
