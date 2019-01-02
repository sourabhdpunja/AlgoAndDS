// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // My initial solution
    // let counter = size;
    // let bigArray = [];
    // let smallArray = [];
    // for (let number of array){
    //     smallArray.push(number)
    //     counter--
    //     if(counter === 0){
    //         counter = size;
    //         bigArray.push(smallArray);
    //         smallArray = [];
    //     }
    // }
    // if (smallArray.length !== 0) {
    //     bigArray.push(smallArray);
    // }
    // return bigArray

    // Better Solution 1
    // const chunked = [];

    // for (let element of array) {
    //     const lastElement = chunked[chunked.length - 1]
    //     if(!lastElement || lastElement.length === size){
    //         chunked.push([element]);
    //     } else {
    //         lastElement.push(element);
    //     }
    // }
    // return chunked;

    // Even Better Solution
    const chunked = []
    let index = 0
    while (index < array.length){
        chunked.push(array.slice(index, index+size))
        index = index + size;
    }
    return chunked;
}
chunk([1, 2, 3, 4], 2)

module.exports = chunk;
