/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// O(n2) runtime, O(n) stack space – Brute force top-down recursion:
var isBalanced = function(root) {
    if (!root){
        return true 
    }
    
    let leftDepth = visit(root.left, 1)
    let rightDepth = visit(root.right, 1)
    if (Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right)){
        return true
    }
    return false
};

const visit = (node, depth) => {
    if (!node){
        return depth 
    }
    return Math.max(visit(node.left, depth + 1), visit(node.right, depth + 1)) 
}



/// O(n) runtime, O(n) stack space – Bottom-up recursion:
var isBalanced = function(root) {
    return visit(root) !== -1
};

const visit = (node) => {
   if (!node){
       return 0
   }
    let leftHeight = visit(node.left)
    if (leftHeight === -1){
        return -1
    }
    let rightHeight = visit(node.right)
    if (rightHeight === -1){
        return -1
    }
    return Math.abs(leftHeight - rightHeight) > 1 ? -1 : Math.max(leftHeight,rightHeight) + 1 
}