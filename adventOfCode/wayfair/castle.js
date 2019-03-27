
var castle = (a) => {
    let newA = []
    for (let num of a) {
        if (newA.length === 0) {
            newA.push(num)
        } else {
            if (newA[newA.length - 1] !== num){
                newA.push(num)
            }
        }
    }

    if (newA.length === 1) {
        return 1
    } else if (newA.length === 2) {
        return 2
    }
    let castleCount = 2
    let prev;
    let next;
    for (let i = 1; i < newA.length - 1; i++) {
        prev = newA[i-1]
        next = newA[i+1]
        if (next > newA[i] && prev > newA[i]){
            castleCount++
        } else if (next < newA[i] && prev < newA[i]){
            castleCount++
        }
    }
    return castleCount
}

console.log(castle([1,2,1]))