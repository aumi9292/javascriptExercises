function add(prevValue, el) {
  let sum = prevValue + el;
  console.log(prevValue, el, sum);
  return sum;
}

let count = [1, 2, 3, 4, 5];
console.log(count.reduce(add));

function myReduce(array, func, initial) {
  array = [...array];
  let acc = initial || array.pop();
  array.forEach((el, idx, arr) => {
    acc = func(acc, el);
  });
  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

function longestWord(words) {
  return myReduce(words, (result, currentWord) => {
    return currentWord.length >= result.length ? currentWord : result;
  });
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"