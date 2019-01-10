/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 // Iterative Approach
var maxDepth = function(root) {
    let depth = 0
    
    if (!root) {
    return 0;
    }
    
    let array = [root, 's']
    
    while (array.length > 1){
        const node = array.shift()
        if (node === 's'){
            array.push(node)
            depth++
        } else {
            if (node.left){
                array.push(node.left)
            }
            if (node.right) {
                array.push(node.right)
            }
        }
    }
     return depth+1;
};

// Recursive Approach
var maxDepth = function(root) {
    return visit(root, 0)
};

function visit(node, depth){
    if (node === null){
        return depth
    }
    depth++
    return Math.max(visit(node.left, depth), visit(node.right, depth))
}