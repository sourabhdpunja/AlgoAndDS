/*
Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
Invalid Example:
...X
XXXX
...X
This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
Follow up:
Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?
*/
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let countOfBattleShips = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'X') {
                countOfBattleShips++;
                changeXtoempty(i, j, board.length, board[0].length, board)
            }
        }
    }
    return countOfBattleShips
};

let changeXtoempty = (row, col, rowMax, colMax, board) => {
    if (row < 0 || row >= rowMax || col < 0 || col >= colMax || board[row][col] === '.') {
        return
    }

    if (board[row][col] === 'X') {
        board[row][col] = '.'
        changeXtoempty(row + 1, col, rowMax, colMax, board)
        changeXtoempty(row, col + 1, rowMax, colMax, board)
    }
    return;
}