/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

/*
Method 1

This was the first and simplest method that popped into my head. Copy the second array into the "empty" half of the first array, and then sort it. Around 56ms (~80%) run time.

Simply using .sort() isn't enough as it will sort lexigraphically (worth remembering), so we have to pass it a custom sort function.
*/

var merge = function(nums1, m, nums2, n) {
    
    if (!n) return;    
    
    for (let i = 0; i < n; i++) {
        nums1[m+i] = nums2[i];
    }
    
    nums1.sort(function (a,b) {
        return a - b;
    });
    
}; 

/*
Method 3

This method uses no additional memory and retains the 52ms (100%) runtime.

The biggest problem with starting from the front, is that you run into trouble with overwriting values etc. and it likely won't work.

This method starts from the back - where our "empty" spaces are. 
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var length = m + n
    
    m--
    n--
    while (length--){
        if (nums1[m] > nums2[n] || n < 0){
            nums1[length] = nums1[m--]
        } else {
            nums1[length] = nums2[n--]
        }
    }
    
}