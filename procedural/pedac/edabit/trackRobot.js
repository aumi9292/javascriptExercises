/* 2:37 pm
This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20) 0, 0 -- 0, 20
30 steps East, now at (30, 20) 0, 20 -- 30, 20 
10 steps South. now at (30, 10) -- 30, 20 to 30, 10
40 steps West, now at (-10, 10)  30 + 40 = 70 w, 10 n
...and will end up at coordinates (-10, 10).

// Problem: Given a splat amount of numbers that each represent a distance moved, return the final position, as an array of 2 numbers, with the first number as the east-west position (positive is east, negative is west) and the second number as the north-south position (positive is north, negative is south). The robot starts at 0, 0, facing north, and moves clockwise 90 degrees after each move. 
//  Problem shape: reduction

Visualization: n north, n east, n south, n west 

// Examples
[1, 1, 1, 1] // [0, 1] -- [1, 1] -- [1, 0] --[0, 0]
[10, 20, -10, 5] // [10, 0] -- [10, 20] -- [10, 30] -- [5, 30]
[1, 1, 1, 1, 1] // [0, 1]
[10, 20] // [20, 10]

// Data structures:
//  input: array of numbers 
//  output: array of 2 numbers

// Approach
//  Fold over an array of numbers into an array of two numbers that represent the difference of odd-indexed numbers and difference of even indexed numbers

// Algorithm
//  Iterate over each number in the given list of distances, keep track of each index and an [] object with two elements
//    If the index % 2 === 0, return the subtraction of totals.n_s
//    Otherwise, return the subtraction of total.e_w
//return the reduced array
*/
function robot(...distances) {
  let totals = distances.reduce((totals, current, idx) => {
    if (idx < 2 || idx % 4 === 0 || (idx - 1) % 4 === 0) current = -current;
    idx % 2 === 0 ? totals.eastWest -= current : totals.northSouth -= current
    console.log(totals);
    return totals;
  }, {eastWest: 0, northSouth: 0});
  return Object.values(totals);
}

console.log(robot(1, 1, 1, 1)); // [0, 1] -- [1, 1] -- [1, 0] --[0, 0]
console.log(robot(10, 20, -10, 5)); // [0, 10] -- [20, 10] -- [20, 20] -- [15, 20]
console.log(robot(1, 1, 1, 1, 1)); // [0, 1]
console.log(robot(10, 20)); // [20, 10]
console.log(robot(1, 1, 1, 1, 1, 1, 1, 1)); // [0, 0]

