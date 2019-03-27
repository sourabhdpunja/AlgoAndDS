let bulb = (array) => {
    let result = 0;
    let boolVal = Array(array.length).fill(0)
    for (let value of array) {
        boolVal[value-1] = 1
        let bulbVal = value - 1;
        while (bulbVal !== 0) {
            if (boolVal[bulbVal - 1] === 0){
                break;
            } else {
                bulbVal--
            }
        }
        if (bulbVal === 0) {
            result++
        }
    }
    console.log(result)
}

bulb([1,2,1000, 4,3])