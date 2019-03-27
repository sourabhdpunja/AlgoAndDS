/*
103. Binary Tree Zigzag Level Order Traversal
Medium

778

50

Favorite

Share
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

// Recursive Solution
var zigzagLevelOrder = function(root) {
    let result = []
    helper(root, 0, result)
    return result
};

let helper = (node, depth, result) => {
    if (!node) return
    if (!result[depth]) {
        result[depth] = []
    }
    
    if (depth%2 === 0){
        result[depth].push(node.val)
    } else {
        result[depth].unshift(node.val)
    }
    
    helper(node.left, depth + 1, result)
    helper(node.right, depth + 1, result)
    return result
}


// My Soultion :: Iterative solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return []
    }
    let queue = [root, 's']
    let depth = 0
    let row = []
    let result = []
    while (queue.length > 1){
        let currentNode = queue.shift()
        if (currentNode === 's') {
            if (depth%2 !== 0) {
                row.reverse();
            }
            result.push(row)
            row = []
            depth++
            queue.push(currentNode)
            continue
        }
        row.push(currentNode.val)
        if (currentNode.left){
            queue.push(currentNode.left)
        }
        if (currentNode.right){
            queue.push(currentNode.right)
        }
    }
    if (depth%2 !== 0) {
        row.reverse();
    }
    result.push(row)
    return result
};