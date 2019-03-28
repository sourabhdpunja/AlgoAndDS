/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    if (!root) {
        return null
    }
    let current = root
    let predecessor = null

    while (current) {
        if (current.val >= p.val) {
            current = current.left;
        } else {
            predecessor = current;
            current = current.right;
        }
    }
    return predecessor
};