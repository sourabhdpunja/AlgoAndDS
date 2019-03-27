
var skyline = (a) => {
    let max = Math.max(...a)
    let result = 0;
    for (let i = 1; i <= max; i++) {
        let horiontalStoke = false;
        for (let num of a) {
            if (num >= i) {
                if (!horiontalStoke) {
                    horiontalStoke = true;
                    result++
                }
            } else if (num < i && horiontalStoke) {
                horiontalStoke = false
            }
        }
    }
    return result
}

console.log(skyline([1,5,1,2]))