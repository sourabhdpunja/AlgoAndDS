

var decrementInt = (binString) => {
    let integer = parseInt(binString, 2)
    let result = 0
    while (integer > 0) {
        if ((integer % 2) === 0){
            integer = Math.floor(integer/2)
            result++
        } else {
            integer--
            result++
        }
    }
    console.log(result)
}

decrementInt("011100")