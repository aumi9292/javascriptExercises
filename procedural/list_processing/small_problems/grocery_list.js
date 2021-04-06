//problem: given a two-d array with a string and a number, return a new 1-d array with the str repeated the specified number of times
//nested arr/2-d arr, return 1-d arr with strings
//['hi', 3]-- ['hi', 'hi', 'hi']

//algorithm
//iterate over each inner array
//at each inner array, create a new string that consists of the first item repeated the second-item number of times with an appended space
//split the string by spaces
//join all of this into one array

function buyFruit(list) {
  let toSplit = '';
  list.forEach(set => {
    toSplit += `${set[0]} `.repeat(set[1]);
  });
  return toSplit.split(' ');
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]