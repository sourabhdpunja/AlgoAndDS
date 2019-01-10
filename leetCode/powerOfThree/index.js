/*
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let powerOfThree = 3
    if (n === powerOfThree || n === 1){
        return true
    }
    while(n > powerOfThree){
        powerOfThree = powerOfThree*3
        if (powerOfThree === n){
            return true
        }
    }
    return false
};

// second solution
var isPowerOfThree = function (n) {
    if (n == 0) return false; // avoid recurssive loop
    while (n % 3 === 0) {
      n /= 3;
    }
    return n === 1;
  };
