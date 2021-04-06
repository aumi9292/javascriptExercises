/* 3:01
You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.

Create a function that takes a two-dimensional array where:
[[]]
Free carparking spaces are represented by a 0
Staircases are represented by a 1
Your starting position is represented by a 2 and can be at any level of the car park.
Exit is always at the bottom right of the ground floor.
You must use the staircases (1) to go down a level.
Each floor will have only one staircase apart from the ground floor which will not have any staircases.
... and returns an array of the quickest route out of the carpark.

arr1 = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]

getOut(arr1) // ['L4', 'D1', 'R4']

arr2 = [
  [0, 0, 2, 0, 1],
  [0, 0, 0, 0, 0]
]

getOut(arr2) // ['R2', 'D1']

// Starting from 2, move to left 4 times = "L4"
// Go down from stairs 1 step = "D1"
// Move to right 4 times to exit from right bottom corner = "R4"

result = ["L4", "D1", "R4"]
*/

// Problem
//  Given a nested 2D array, return a new array that consist of directions from a starting point (number 2) to the far right end of the array at the highest index in the lot

// Rules
//  All input will be a 2D array, with a variable number of inner arrays that each represent a level of a parking garage
//  Your starting point is denoted by the number 2
//  The staircase on each level is denoted by the number 1
//  The bottom-most level of the garage has no staircase
//  The exit, where you're trying to get, is at the largest index of the inner array at the largest outer index
//  All non starting point, non stair locations will contain a zero
//  If you must move right to reach a staircase, that direction should have 'R' followed by the number of spaces
//  If you must move left to reach a staircase, that direction should have 'L' followed by the number of spaces
//  Your starting position can be at any level of the parking garage

// Examples
/*
arr1 = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]

getOut(arr1) // ['L4', 'D1', 'R4']

arr2 = [
  [0, 0, 2, 0, 1],
  [0, 0, 0, 0, 0]
]

getOut(arr2) // ['R2', 'D1']

arr3 = [
  [0, 0, 0, 0, 1],
  [0, 2, 0, 0, 0]
]

getOut(arr2) // ['R3']

arr4 = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 2]
]

getOut(arr4) // []

arr3 = [
  [0, 2, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

getOut(arr3) // ['R3', 'D1', 'L1', 'D1', 'R1', 'D1', 'L3', 'D1', 'R3']

*/

// Data Structures
//  Input: 2D array with inner arrays of the same length, all holding 0, 1, or 2
//  Output: a new array with strings that represent a direction combined with a number of spaces 

// Algorithm
//  init empty array directions []
//  if 2 is located in the inner array at the highest index, return       'R${(innerArr.length - 1) - innerArr.indexof(2)}'
//  find where the starting location is (which inner array includes 2)
//  save the index of the inner array that includes 2 as startingLevel
//    find the index of 2 in startingLevel, save as startLoc
//  find the index of 1 in the array that includes two, save as stairLoc
//  compute stairLoc - startLoc, save as firstDistance
//  if stairLoc - startLoc is positive
//    push the string 'R${firstDistance}' into directions
//  if index of inner array + 1 is less than garage.length - 1, push 'D1' into directions
//  in the inner array at the next highest index, find index of 1, see what the distance between index of 1 and the index of 1 in the earlier array

function getOut(garage) {
  let directions = [];
  let exitLevel = garage[garage.length - 1];
  if (exitLevel.includes(2)) {
    if (exitLevel.indexOf(2) !== exitLevel.length - 1) {
      directions.push(`R${exitLevel.length - 1 - exitLevel.indexOf(2)}`);
    }
  }
  return directions;
}

let arr1 = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]

console.log(getOut(arr1)); // ['L4', 'D1', 'R4']

let arr2 = [
  [0, 0, 2, 0, 1],
  [0, 0, 0, 0, 0]
]

console.log(getOut(arr2)); // ['R2', 'D1']

let arr3 = [
  [0, 0, 0, 0, 1],
  [0, 2, 0, 0, 0]
]

console.log(getOut(arr3)); // ['R3']

let arr4 = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 2]
]

console.log(getOut(arr4)); // []

let arr5 = [
  [0, 2, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

console.log(getOut(arr5)); // ['R3', 'D1', 'L1', 'D1', 'R1', 'D1', 'L3', 'D1', 'R3']
