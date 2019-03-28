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
    let successor = null

    while (current) {
        if (p.val >= current.val) {
            current = current.right;
        } else {
            successor = current;
            current = current.left;
        }
    }
    return successor;
};