/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/

// DP with memoization
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let mat = []
    for (let i = 0; i < m; i++){
        mat[i] = []
    }
    for (let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if (i === 0 || j === 0){
                mat[i][j] = 1
            } else {
                mat[i][j] = mat[i-1][j] + mat[i][j-1]
            }
            
        }
    }
    return mat[m-1][n-1]
};



// Another Backtracking without Memoization 
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return uniqueRec(0,0,m,n,0)
};

let uniqueRec = (i, j, m, n, count) => {
    if (i === m-1 && j === n-1){
        count++
        return count
    }
    if (i >= m || j >= n || i < 0 || j < 0){
        return count
    }
    
    return uniqueRec(i + 1, j, m, n, count) + uniqueRec(i, j + 1, m, n, count)
} 

// My Solution Time Exceeded
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return uniqueRec(0,0,m,n,0)
};

let uniqueRec = (i, j, m, n, count) => {
    if (i === m-1 && j === n-1){
        count++
        return count
    }
    if (i >= m || j >= n || i < 0 || j < 0){
        return count
    }
    
    if (i < m) {
        count = uniqueRec(i + 1, j, m, n, count)
    }
    
    if (j < n) {
        count = uniqueRec(i, j + 1, m, n, count)
    }
    
    return count
    
} 