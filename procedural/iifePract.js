(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

let summer = (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

sum += summer;  // ? 49
console.log(sum);

// let countdown = function(from) {
//   return (function() {
//     for (let rep = from; rep >= 0; rep--) {
//       console.log(rep);
//     }
//     console.log('Done!');
//   })();
// };

// countdown(7);

// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?

function countdown(count) {
  (function recursiveCd(n) {
    console.log(n);
    if (n === 0) {
      console.log('Done!');
      return;
    }
    recursiveCd(n - 1);
  })(count);
}

countdown(7);