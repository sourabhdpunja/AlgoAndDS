/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
*/
// Recursive approach
var isSymmetric = function(root) {
    if(!root){
        return true;
    }
    return check(root.left, root.right);
};

 
var check = function(left, right){
    if(!left && !right){
        return true;    
    }
    if(!left || !right){
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return check(left.left, right.right) && check(right.left, left.right);
};

// Iterative approach

var isSymmetric = function(root) {
    let queue = []
    
    queue.unshift(root)
    queue.unshift(root)
     
     while (queue.length){
         let left = queue.shift()
         let right = queue.shift()
         if (!left && !right) {
             continue;   
         }
         if (!left || !right) {
             return false;   
         }
         if (left.val !== right.val){
             return false;
         }
         queue.unshift(left.left)
         queue.unshift(right.right)
         queue.unshift(left.right)
         queue.unshift(right.left)
     }
     return true
 }