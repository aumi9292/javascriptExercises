
// function as return value
function helloFactory() {
  return function() {
    console.log('hi');
  };
}

console.log(helloFactory()())


function timed(func) {
  return function() {
    let start = new Date();
    func();
    let stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  };
}


let timedHi = timed(function() { console.log('hi'); });
timedHi();

function loopy() {
  let sum = 0;
  let i;

  for (i = 1; i < 1000000000; i += 1) {
    sum += i;
  }

  console.log(sum);
}

let timeLoop = timed(loopy);
timeLoop();


let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(num) {
    return num % 2 === 0;
  };
}

let checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]

// 4. 
function execute(func, operand) {
  return func(operand);
}

console.log(execute(function(number) {
  return number * 2;
}, 10)); // 20

console.log(execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy')); // "HEY THERE BUDDY"


function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  };
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]