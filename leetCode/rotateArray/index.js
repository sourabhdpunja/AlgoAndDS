
/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 //Using reverse
 var rotate = function(nums, k) {
    if (!nums || !nums.length || !(k %= nums.length))
        return;
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
};

function reverse(nums, start, end){
    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}


 // using unshift and splice
var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k))
};


// Using pop and unshift
var rotate = function(nums, k) {
    while (k>0){
        let num = nums.pop()
        nums.unshift(num)
        k--
    }
 };

// Using Extra Space
var rotate = function(nums, k) {
    // do nothing
    if (!nums || !nums.length || !(k %= nums.length))
        return;
    var result = []
    let j = 0
    for (let i = 0; i < k; i++){
        result[i] = nums[nums.length - k + i]
    }
    for (let i = k; i < nums.length; i++){
        result[i] = nums[i - k]
    }
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }
};

/*
Approach #1 Brute Force [Time Limit Exceeded]
The simplest approach is to rotate all the elements of the array 
in k steps by rotating the elements by 1 unit in each step.

Java

public class Solution {
    public void rotate(int[] nums, int k) {
        int temp, previous;
        for (int i = 0; i < k; i++) {
            previous = nums[nums.length - 1];
            for (int j = 0; j < nums.length; j++) {
                temp = nums[j];
                nums[j] = previous;
                previous = temp;
            }
        }
    }
}
*/