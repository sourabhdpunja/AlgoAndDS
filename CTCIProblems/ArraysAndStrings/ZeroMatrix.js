

function zeroMatrix(m){
    let row = []
    let column = []
    for (let i = 0;i < m.length; i++){
        row.push(false);
    }
    for (let j = 0;j < m[0].length; j++){
        column.push(false);
    }
    for (let i = 0; i < m.length; i++){
        for (let j = 0; j < m[0].length; j++){
            if (m[i][j] === 0){
                row[i] = true
                column[j] = true
            }
        }
    }

    for (let i = 0;i < row.length;i++){
        if (row[i] === true){
            for (let j = 0; j < m[0].length; j++){
                m[i][j] = 0
            }
        }
    }

    for (let j = 0;j < column.length;j++){
        if (column[j] === true){
            for (let i = 0; i < m.length; i++){
                m[i][j] = 0
            }
        }
    }
    console.log(m)
    return m;
}

zeroMatrix([[0,2,3],[0,0,1],[9,7,4]])