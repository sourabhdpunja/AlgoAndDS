/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
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
// Time complexity O(N)
// Space complexity O(N) if unbalanced else O(log(n)) if balanced
var minDepth = function(root) {
    return visit(root, 0)
};

function visit(node, depth){
    if (node === null){
        return depth
    }
    if (node.left === null){
        return visit(node.right, depth) + 1
    }
    if (node.right === null){
        return visit(node.left, depth) + 1
    }
    
    depth++
    return Math.min(visit(node.left, depth), visit(node.right, depth))
}

// BFS Iterartion
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
var minDepth = function(root) {
    if (!root){
        return 0
    }
    let queue = [{node: root, height: 1}]
    while (queue.length) {
        let currentNode = queue.shift();
        if (!currentNode.node.left && !currentNode.node.right){
            return currentNode.height;
        }
        if (currentNode.node.left){
            queue.push({node :currentNode.node.left, height: currentNode.height + 1})
        }
        if (currentNode.node.right){
            queue.push({node :currentNode.node.right, height: currentNode.height + 1})
        }
    }
};