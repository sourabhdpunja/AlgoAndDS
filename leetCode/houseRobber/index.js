/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
For each index i of the nums array, use i in a new array to store the max money stealable from houses 0 through i. Finding the max for index 0 and 1 is trivial. Then for each later house h, note that the max stealable from houses 0 through h depends only on what's stealable from h and on what the maxes were for the previous two houses.
*/  
var rob = function(nums) {
    if (nums.length === 0){
        return 0
    }
    
    if (nums.length === 1){
        return nums[0]
    }
    
    totals = [nums[0], Math.max(nums[0], nums[1])]
    for (i = 2; i < nums.length; i++){
        totals[i] = Math.max(totals[i-2] + nums[i],totals[i-1])
    }
    return totals[nums.length - 1]
};