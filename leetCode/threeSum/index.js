/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length - 2; i++){
        if (i === 0 || nums[i] > nums[i-1]){
            let start = i + 1
            let end = nums.length - 1
            
            while (start < end){
                if (nums[start] + nums[end] + nums[i] === 0){
                    result.push([nums[i], nums[start], nums[end]])
                }
                
                if (nums[start] + nums[end] + nums[i] < 0){
                    let currentStart = start
                    while(nums[start] === nums[currentStart] ){
                        start++
                    }
                } else {
                    let currentEnd = end
                    while(nums[end] === nums[currentEnd]){
                        end--
                    }
                }
            }
        }
    }
    return result
};