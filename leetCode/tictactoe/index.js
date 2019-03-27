/*
Design a Tic-tac-toe game that is played between two players on a n x n grid.

You may assume the following rules:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves is allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
Example:
Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
*/
// O(1) Solution
/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.rows = [];
    this.cols = [];
    this.diagonal = 0;
    this.antiDiagonal = 0;
    this.length = n

};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    const playerAdd = player === 1 ? 1 : -1
    this.rows[row] = this.rows[row] ? this.rows[row] + playerAdd : playerAdd
    this.cols[col] = this.cols[col] ? this.cols[col] + playerAdd : playerAdd
    if (col === row){
        this.diagonal += playerAdd
    }
    
    if (row === this.length - col -1){
        this.antiDiagonal += playerAdd
    }
    if ((Math.abs(this.rows[row]) === this.length) || (Math.abs(this.cols[col]) === this.length) || (Math.abs(this.diagonal) === this.length) || (Math.abs(this.antiDiagonal) === this.length)){
        return player
    }
    return 0
    
};


// O(n) solution 
/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.matrix = [];

    for (let i = 0; i < n; i++){
        this.matrix.push([]);
    }

};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    this.matrix[row][col] = player
    console.log("vertical " + checkVerticalWin(col, player, this.matrix))
     console.log("horizontal " +checkHorizontalWin(col, player, this.matrix))
     console.log("diagonal " +checkDiagonalWin( player, this.matrix))
    if(checkVerticalWin(col, player, this.matrix) || checkHorizontalWin(row, player, this.matrix) || checkDiagonalWin(player, this.matrix)){
        return player
    }
    return 0
};

let checkVerticalWin = (col, player, matrix) => {
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i][col] !== player){
            return false
        }
    }
    return true
}

let checkHorizontalWin = (row, player, matrix) => {
    for (let i = 0; i < matrix.length; i++){
        if (matrix[row][i] !== player){
            return false
        }
    }
    return true
}

let checkDiagonalWin = (player, matrix) => {
    let primaryDiagonal = true
    let secondaryDiagonal = true
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i][i] !== player){
            primaryDiagonal = false;
        }
    }
    for (let i = 0; i < matrix.length; i++){
        if(matrix[i][matrix.length - i - 1] !== player){
            secondaryDiagonal = false
        }
    }
    return primaryDiagonal || secondaryDiagonal
}


/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = Object.create(TicTacToe).createNew(n)
 * var param_1 = obj.move(row,col,player)
 */
