/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxArea = 0
    if (!grid) {
        return 0
    }
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, changeOneToZero(grid, i, j));
            }
        }
    }

    return maxArea
};

function changeOneToZero(grid, i, j) {
    if (i >= grid.length || i < 0 || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
        return 0
    }
    let count = 1
    if (grid[i][j] === 1) {
        grid[i][j] = 0
        count = count + changeOneToZero(grid, i - 1, j)
        count = count + changeOneToZero(grid, i, j - 1)
        count = count + changeOneToZero(grid, i + 1, j)
        count = count + changeOneToZero(grid, i, j + 1)
    }
    return count
}