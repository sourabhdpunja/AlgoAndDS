/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
// O(n!) time compexity
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    permutations(nums, 0, result)
    return result
};

let permutations = (nums, start, result) => {
    if (start >= nums.length - 1){
        result.push(nums.slice())
    } else {
        for (let i = start; i < nums.length; i++){
            swap(nums, start, i)
            permutations(nums, start + 1, result)
            swap(nums, start, i)    
        }
    }
}

let swap = (nums, i, j) => {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}