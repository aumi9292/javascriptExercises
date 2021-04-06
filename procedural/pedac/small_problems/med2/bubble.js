/*
Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// data structures: [], and other values held in the array 

// algorithm
// init a variable called swap, initialize with false
// do the below check
  // iterate over each item in the array from idx 0 up to length - 2 3
  // at each idx, compare the element at the next index 3 and 5
  // if the element at the current idx is less than the element at the next index, do nothing
  // if the element at the next idx is less than the current el, 
  //  set swapped to true
  //  splice the element at the next idx, save as toMove
  //  splice back into the array at idx 
// while swap is true

*/

function bubbleSort(toSort) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let idx = 0; idx < toSort.length - 1; idx++) {
      if (toSort[idx] > toSort[idx + 1]) {
        let toMove = toSort.splice(idx + 1, 1)[0];
        toSort.splice(idx, 0, toMove);
        swap = true;
      }
    }
  }
  return toSort;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array4 = [6, 2, 1, 7]; // 2 6 1 7 // 2 1 6 7
bubbleSort(array4);
console.log(array4);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]