'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// declare function that checks for horizontal win
const horizontalWin = () => {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")) {
    window.alert(`Player ${currentMarker} won!`);
  }
}

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")) {
    window.alert(`Player ${currentMarker} won!`);
  }
}

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  || (board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X") 
  || (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")) {
    window.alert(`Player ${currentMarker} won!`);
  } 
}

const checkForWin = () => {
  // call horizontalWin function. if there is a win, log message stating which player won
  
  // if not a win, change playerTurn variable from "X" to "O" or "O" to "X"
  
  // call verticalWin function. if there is a win, log message stating which player won

  // call diagonalWin function. if there is a win, log message stating which player won

  

}

const ticTacToe = (row, column) => {
  // if row is 0 & column is 0, corresponding index on board equals playerTurn
  // if row is 0 & column is 1, corresponding index on board equals playerTurn
  // if row is 0 & column is 2, corresponding index on board equals playerTurn
  // if row is 1 & column is 0, corresponding index on board equals playerTurn
  // if row is 1 & column is 1, corresponding index on board equals playerTurn
  // if row is 1 & column is 2, corresponding index on board equals playerTurn
  // if row is 2 & column is 0, corresponding index on board equals playerTurn
  // if row is 2 & column is 1, corresponding index on board equals playerTurn
  // if row is 2 & column is 2, corresponding index on board equals playerTurn
}

const getPrompt = () => {
  // call printBoard function
  printBoard();
  // log message displaying which players turn it is
  console.log("It's Player " + playerTurn + "'s turn.");
  // log message asking for "row" input
  rl.question('row: ', (row) => {
    // log message asking for "column" input
    rl.question('column: ', (column) => {
      // call ticTacToe function
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      ticTacToe(0, 0)
      ticTacToe(0, 1)
      ticTacToe(1, 1)
      ticTacToe(0, 2)
      ticTacToe(2, 2)
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
