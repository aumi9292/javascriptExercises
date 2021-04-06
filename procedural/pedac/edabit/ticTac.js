/* 3:53
Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.

ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
]) ➞ "X"

ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) ➞ "O"

ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]) ➞ "Draw"

Make sure that if O wins, you return the letter "O" and not the integer 0 (zero) and if it's a draw, make sure you return the capitalised word "Draw". If you return "X" or "O", make sure they're capitalised too.

// Problem 
//  Given a 2D array that represents a finished game of tic tac toe, return the winning symbol (O or X) or "Draw" for the game
//  If x or o occupies all spots horizontally, they win HorizWin
//  If x or o occupies all rows in a single column, they win vertWin
//  If x or o occupies [0][0], [1][1], and [2][2], they win leftDiag win
//  If x or o occupies [2][0], [1][1], and [0][2], they win rightDiag win
// If none of these conditions are met, it is a draw

// Will always be given a 2D array, where each inner array is of length 3
// A board will always be a valid finished game (there wont be two winners)


// Data Structures
//  Input: 2D array of inner arrays of length 3
//    Each inner array has only one-character strings of X, O, or E
//  Output: a string X, O or "Draw"

ticTacToe([
  ["O", "O", "X"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) // "X" vert

// Algorithm
//  Iterate over the array
//  check if any inner array (row) contains all x's
//    if yes, return 'X'
//  check if any inner array (row) contains all o's
//    if yes, return 'O'
//  check if every array has an X or O at row[0], row[1], or row[2]
//    return winner if so
//  check if [0][0], [1][1], and [2][2] are all x or o, return winner if so
// check if [2][0], [1][1], and [0][2] are all x or o, return winner if so
//return 'Draw'
*/

function horizontalWin(row, sym) {
  return row.every(cell => cell === sym);
}

function horizontalWin(row, sym) {
  return row.every(cell => cell === sym);
}


function ticTacToe(board) {
  for (let row = 0; row < board.length; row++) {
    if (horizontalWin(board[row], 'O')) return 'O';
    if (horizontalWin(board[row], 'X')) return 'X';
    for (let column = 0; column < board.length; column++) {
      let vert = board.map(_ => board[row][column]);
      console.log(vert)
      if (vert.every(cell => cell === 'O')) return 'O'
      if (vert.every(cell => cell === 'X')) return 'X'
    }
  }
}

console.log(ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
])); // "X" leftDiag

console.log(ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["X", "X",  "O"]
])); // "X" rightDiag

console.log(ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
])); // "O" horizontal

console.log(ticTacToe([
  ["O", "O", "X"],
  ["O", "X", "X"],
  ["E", "X", "X"]
])); // "X" vert

console.log(ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
])); // "Draw"