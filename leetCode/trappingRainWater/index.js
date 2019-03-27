/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
*/

// TWO POINTER 

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0
    let leftMax = 0
    let rightMax = 0
    let leftPointer = 0
    let rightPointer = height.length - 1
    
    while (leftPointer < rightPointer){
        if (height[leftPointer] <= height[rightPointer]){
            if (leftMax <= height[leftPointer]){
                leftMax = height[leftPointer]
            } else {
                ans += (leftMax - height[leftPointer])
            }
            leftPointer++
        } else {
            if (rightMax <= height[rightPointer]){
                rightMax = height[rightPointer]
            } else {
                ans += (rightMax - height[rightPointer])
            }
            rightPointer--
        }
    }
    return ans
};

// DYNAMIC PROGRAMMING
var trap = function(height) {
    let ans = 0
    
    let maxLeft = [height[0]]
    for (let i = 1; i < height.length; i++){
        maxLeft[i] = Math.max(height[i], maxLeft[i-1])
    }
    let maxRight = []
    maxRight[height.length - 1] = height[height.length - 1]
    for (let i = height.length - 2; i >= 0; i--){
        maxRight[i] = Math.max(height[i], maxRight[i+1])
    }
    for (let i = 0; i<height.length; i++){
        ans += Math.min(maxLeft[i], maxRight[i]) - height[i]
    }
    return ans
};

/**
* @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;
    let size = height.length;
    for (let i = 1; i < size - 1; i++) {
        let max_left = 0, max_right = 0;
        for (let j = i; j >= 0; j--) { //Search the left part for max bar size
            max_left = Math.max(max_left, height[j]);
        }
        for (let j = i; j < size; j++) { //Search the right part for max bar size
            max_right = Math.max(max_right, height[j]);
        }
        ans += Math.min(max_left, max_right) - height[i];
    }
    return ans;
};
