/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid){
        return 0
    }
    let numberOfIslands = 0
    for (i = 0; i < grid.length; i++){
        for (j = 0 ; j< grid[0].length; j++){
            if (grid[i][j] === '1'){
                numberOfIslands++;
                changeOneToZero(grid, i, j);
            }        
        }
    }
    
    return numberOfIslands
};

function changeOneToZero(grid, i, j){
    if ( i >= grid.length || i < 0 || j < 0 || j >= grid[0].length || grid[i][j] === '0'){
        return
    }
    
    if (grid[i][j] === '1') {
        grid[i][j] = 0
        changeOneToZero(grid, i - 1, j)
        changeOneToZero(grid, i, j - 1)
        changeOneToZero(grid, i + 1, j)
        changeOneToZero(grid, i, j + 1)
    }
}