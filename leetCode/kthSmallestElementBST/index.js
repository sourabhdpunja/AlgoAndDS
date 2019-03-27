
/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
*/

// Using Inorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let list = []
    visit(root, list)
    return list[k-1]
};

let visit = (node, list) => {
    if (node.left){
        visit(node.left, list)
    }
    list.push(node.val)
    if(node.right){
        visit(node.right, list)
    }
    return
}




// Non Optimal. Try to put to a list then sort
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let queue = [root]
    let list = []
    while(queue.length){
        let current = queue.shift()
        list.push(current.val)
        if(current.left){
            queue.push(current.left)
        }
        if(current.right){
            queue.push(current.right)
        }
    }
    list.sort((a,b) => a-b)
    return list[k-1]
};