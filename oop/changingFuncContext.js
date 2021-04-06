
let temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;
  let i;
  for (i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
}

console.log(average.call(temperatures));           // => 48.5
let tempAvg = average.bind(temperatures);
console.log(tempAvg());

let tempObj = {
  temperatures: [53, 86, 12, 43],
};

tempObj.avg = average;

console.log(tempObj.avg());

function foo() {
  return 'this here is: ' + this;
}

console.log(foo());