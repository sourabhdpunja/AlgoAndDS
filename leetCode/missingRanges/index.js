

/*
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]

Solution description
Compare the gap between two neighbor elements and output its range, simple as that
right? This seems deceptively easy, except there are multiple edge cases to consider, such
as the first and last element, which does not have previous and next element respectively.
Also, what happens when the given array is empty? We should output the range “0->99”.
As it turns out, if we could add two “artificial” elements, –1 before the first element and
100 after the last element, we could avoid all the above pesky cases.
*/

var findMissingRanges = function(nums, lower, upper) {
    nums = [lower-1, ...nums, upper+1]
    let output=[]
    for (let i = 1; i<nums.length; i++){
        if (nums[i] - nums[i-1] >= 2){
            let curr;
            if ((nums[i-1] + 1) === (nums[i] - 1)){
                curr = nums[i-1] + 1 + ''
            } else {
                curr = (nums[i-1] + 1) + "->" + (nums[i] - 1)
            }
            output.push(curr)
        }
    }
    return output
};