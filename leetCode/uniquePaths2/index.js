/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let mat = []
      for (let i = 0; i < obstacleGrid.length; i++){
          mat[i] = []
      }
      for (let i = 0; i < obstacleGrid.length; i++){
          for(let j = 0; j < obstacleGrid[0].length; j++){
              if (obstacleGrid[i][j] === 1){
                  mat[i][j] = 0
              } else if (i === 0 && j === 0){
                  mat[i][j] = 1
              } else if(i == 0) {
                  mat[i][j] = mat[i][j - 1] * 1;// For row 0, if there are no paths to left cell, then its 0,else 1
              } else if(j == 0) {
                  mat[i][j] = mat[i - 1][j] * 1;// For col 0, if there are no paths to upper cell, then its 0,else 1
              } else {
                  mat[i][j] = mat[i - 1][j] + mat[i][j - 1];
              }       
          }
      }
      return mat[obstacleGrid.length-1][obstacleGrid[0].length-1]  
  };