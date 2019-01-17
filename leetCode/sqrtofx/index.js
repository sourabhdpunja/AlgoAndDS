/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === null || x === undefined){
        return -1
    }
    var left = 0
    var right = Math.floor(x/2) + 1
    var mid
    
    while (left <= right){
        mid = Math.floor((left + right)/2)
        if (mid * mid > x){
            right = mid - 1
        } else if (mid * mid < x){
            left = mid + 1
        } else {
            return mid
        }
    }
    return mid * mid <=x? mid: mid-1;
    // return right
};