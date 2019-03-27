/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// Not in place impelemntation.
var gameOfLife = function(board) {
    let resultBoard = []
    for (let i = 0; i < board.length; i++){
        resultBoard.push([])
    }
    
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            const countOfOne = getCountOfOne(i, j, board.length, board[0].length, board)
            if (countOfOne < 2) {
                resultBoard[i][j] = 0
            } else if ((countOfOne === 2 || countOfOne === 3) && board[i][j] === 1){
                resultBoard[i][j] = 1
            } else if (countOfOne > 3 && board[i][j] === 1) {
                resultBoard[i][j] = 0
            } else if (board[i][j] === 0 && countOfOne === 3)  {
                resultBoard[i][j] = 1
            } else {
                resultBoard[i][j] = board[i][j]
            }
        }
    }
    console.log(resultBoard)// Copy this resultBoard into board  
    return resultBoard
};

var getCountOfOne = (i, j, m, n, board) => {
    let count = 0
    for (let x = Math.max(i - 1, 0); x < Math.min(m, i + 2); x++) {
        for (let y = Math.max(j - 1, 0); y < Math.min(n, j + 2); y++) {
            if (board[x]  && board[x][y]) {
                if (x === i && y === j){
                    continue
                }
                count++
            }
        }
    }
    return count
}