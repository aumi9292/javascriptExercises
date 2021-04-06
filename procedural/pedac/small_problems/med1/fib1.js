//  problem: implement a function that takes a number and returns the nth number in the fibonacci sequence. use recursion 

//  data structures: numbers, arrays

//  algorithm
//  return 1 if the given number is <= 2
//  call fib(given - 1) and assign the return value to arg

function fibonacci(nth, memo = {}) {
  if (nth <= 2) return 1;
  if (memo[nth]) return memo[nth];
  memo[nth] = fibonacci(nth - 1, memo) + fibonacci(nth - 2, memo);
  return memo[nth];
}

// function fibonacci(nth) {
//   let fib = [1, 1];
//   for (; nth > 2; nth--) {
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//   }
//   return fib[fib.length - 1];
// }

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050