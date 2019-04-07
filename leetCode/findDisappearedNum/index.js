/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

// Most Optimum Solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let missingNums = []
    for (let num of nums) {
        let indexVal = Math.abs(num) - 1
        if (nums[indexVal] > 0) {
            nums[indexVal] = -nums[indexVal]
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            missingNums.push(i + 1)
        }
    }
    return missingNums

};

// Extra space O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let numMap = {}
    let missingNums = []
    for (let num of nums) {
        numMap[num] = true
    }
    for (let i = 0; i < nums.length; i++) {
        if (!numMap[i + 1]) {
            missingNums.push(i + 1)
        }
    }
    return missingNums
};