/**
 * 
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 
 * Time: O(n)
 * Space: O(n)
 * n - # of nums
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
    return addNode(nums, 0, nums.length - 1);
  }
  
  /**
   * @param {number[]} nums
   * @param {number} start
   * @param {number} end
   * @return {TreeNode}
   */
  function addNode(nums, start, end) {
    if (end < start) {
      return null;
    }
  
    // Use the middle element so the left and right halves will be about the same size
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[mid]);
  
    // Fill in the left and right subtrees
    node.left = addNode(nums, start, mid - 1);
    node.right = addNode(nums, mid + 1, end);
  
    return node;
  }