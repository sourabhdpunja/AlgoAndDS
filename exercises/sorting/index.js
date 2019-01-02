// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]) {
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        let minimum = arr[i];
        for (let j = i+1; j< arr.length; j++){
            if (arr[j] < minimum){
                minimum = arr[j];
                arr[j] = arr[i]
                arr[i] = minimum;
            }
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1){
        return arr;
    }

    const center = Math.floor(arr.length/2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = []
    while (left.length && right.length){
        const leftFirstElement = left[0]
        const rightFirstElement = right[0]
        if (leftFirstElement < rightFirstElement){
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    // if (left.length) {
    //     results.push(...left)
    // }
    // if (right.length) {
    //     results.push(...right)
    // }
    results = [...results, ...left, ...right]
    return results
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
