// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Iterative Solution
// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++){
//         const a = result[i-1];
//         const b = result[i-2];
//         result[i] = a + b;
//     }
//     return result[n];
// }

// Memoization Solution
function memoize(fn){
    const cache = {};
    return function(...args) {
        if (cache[args]){
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result
    };
}

function slowFib(n) {
    if (n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib)

// Recursive Solution
// function fib(n) {
//     if (n < 2){
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }


// My Solution for iterative solution
// function fib(n) {
//     let previousNum = 0;
//     let currentNum = 1;
//     let nextNum = 1;
//     for (let i = 1; i < n; i++){
//         nextNum = previousNum + currentNum;
//         previousNum = currentNum;
//         currentNum = nextNum;
//     }
//     return nextNum;
// }

module.exports = fib;
