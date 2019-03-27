

var game2048 = (grid, path) => {
    for (let move of path){
        let resultMatrix = []
        for (let i = 0; i < grid.length; i++) {
            resultMatrix[i] = Array(grid.length).fill(0)
        }
        if (move === 'R') {
            for (let i = 0; i < grid.length; i++) {
                let resultIndex = grid.length - 1 
                for (let j = grid.length - 1; j >= 0; j--) {
                    let current = grid[i][j];
                    if (current === 0) {
                        continue
                    }
                    let previndex = j-1
                    while (previndex !== -1 && grid[i][previndex] === 0){
                        previndex--
                    }
                    if (previndex === -1) {
                        resultMatrix[i][resultIndex] = current
                    } else {
                        if (current === grid[i][previndex]) {
                            resultMatrix[i][resultIndex] = 2 * current
                            grid[i][previndex] = 0
                        } else {
                            resultMatrix[i][resultIndex] = current
                        }
                        resultIndex--
                    }    
                }
            }
            grid = copyResultMatrixToGrid(resultMatrix, grid);
        } else if (move === 'L') {
            for (let i = 0; i < grid.length; i++) {
                let resultIndex = 0
                for (let j = 0; j < grid.length; j++) {
                    let current = grid[i][j];
                    if (current === 0) {
                        continue
                    }
                    let nextindex = j+1
                    while (nextindex !== grid.length && grid[i][nextindex] === 0){
                        nextindex++
                    }
                    if (nextindex === grid.length) {
                        resultMatrix[i][resultIndex] = current
                    } else {
                        if (current === grid[i][nextindex]) {
                            resultMatrix[i][resultIndex] = 2 * current
                            grid[i][nextindex] = 0
                        } else {
                            resultMatrix[i][resultIndex] = current
                        }
                        resultIndex++
                    }    
                }
            }
            grid = copyResultMatrixToGrid(resultMatrix, grid);
        } else if (move === 'U') {
            for (let j = 0; j < grid.length; j++) {
                let resultIndex = 0 
                for (let i = 0; i < grid.length; i++) {
                    let current = grid[i][j];
                    if (current === 0) {
                        continue
                    }
                    let nextindex = i+1
                    while (nextindex !== grid.length && grid[nextindex][j] === 0){
                        nextindex++
                    }
                    if (nextindex === grid.length) {
                        resultMatrix[resultIndex][j] = current
                    } else {
                        if (current === grid[nextindex][j]) {
                            resultMatrix[resultIndex][j] = 2 * current
                            grid[nextindex][j] = 0
                        } else {
                            resultMatrix[resultIndex][j] = current
                        }
                        resultIndex++
                    }    
                }
            }
            grid = copyResultMatrixToGrid(resultMatrix, grid);
        } else if (move === 'D') {
            for (let j = 0; j < grid.length; j++) {
                let resultIndex = grid.length - 1
                for (let i = grid.length - 1; i >= 0; i--) {
                    let current = grid[i][j];
                    if (current === 0) {
                        continue
                    }
                    let previndex = i-1
                    while (previndex !== -1 && grid[previndex][j] === 0){
                        previndex--
                    }
                    if (previndex === -1) {
                        resultMatrix[resultIndex][j] = current
                    } else {
                        if (current === grid[previndex][j]) {
                            resultMatrix[resultIndex][j] = 2 * current
                            grid[previndex][j] = 0
                        } else {
                            resultMatrix[resultIndex][j] = current
                        }
                        resultIndex--
                    }    
                }
            }
            grid = copyResultMatrixToGrid(resultMatrix, grid);
        } else {
            continue
        }
    }
    console.log(grid)
}

var copyResultMatrixToGrid = (resultMatrix, grid) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            grid[i][j] = resultMatrix[i][j]
        }
    }
    return grid
}

game2048([[2,4,8,16], [256,128,64,32], [512,1024,2048,4096], [65536,32768,16384,8192]], 'URLD')