//given a nested array of arrays, return the total summed array of each array
//in: array of arrays, out: number
//algorithm:
//map over each inner array the return value of multiplying each of the two number elements together [12, 36, 8, 81, 4]
//add each rectangle area together and return the sum 

let totalArea = function (arr) {
  return arr.map((rec) => rec[0] * rec[1]).reduce((acc, num) => {
    return acc + num;
  }, 0);
};

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

let totalSquareArea = function (recs) {
  let squares = recs.filter(pair => pair[0] === pair[1]);
  return totalArea(squares);
};

console.log(totalSquareArea(rectangles));    // 121