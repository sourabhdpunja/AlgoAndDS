/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/
//O(n log log n) 
// https://stackoverflow.com/questions/16472012/what-would-cause-an-algorithm-to-have-olog-log-n-complexity
// https://stackoverflow.com/questions/2582732/time-complexity-of-sieve-of-eratosthenes-algorithm
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n === 1 || n === 0){
        return 0
    }
    
    if (n === 2){
        return 0
    }
   let primes = []
   for (let i = 0; i < n; i++){
       primes[i] = true;
   }
    
    for (let i = 2; i < Math.sqrt(n); i++){
        if (primes[i]) {
            for (let j = i*i; j < n; j = j+i) {
                primes[j] = false;
            }
        }
    }
    let count = 0;
   for(let i = 2; i < n; i++) {
        if(primes[i] === true) {
            count++;
        }
    }
    return count
};


// O(n2)
var countPrimes = function(n) {
    if (n === 1 || n === 0){
        return 0
    }
    
    if (n === 2){
        return 0
    }
    let countPrimes = 0;
    let prime = true;
    for (i = 2; i < n; i++){
        let prime = true;
        for (j = 2; j < i; j++){
            if (i%j === 0){
                prime = false
            }
        }
        if (prime === true) {
            countPrimes++
        }
    }
    return countPrimes
};

console.log(countPrimes(3))