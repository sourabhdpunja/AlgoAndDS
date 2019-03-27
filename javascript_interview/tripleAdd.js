// Currying a function:: 

var tripleAdd = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

function tripleAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

tripleAdd(10)(20)(30)