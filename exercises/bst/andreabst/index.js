class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value){
        let current = this.root;
        const nodeToInsert = new Node(value);
        if (current === null){
            this.root = nodeToInsert;
        } else {
            while (true){
                if (current.value >= value){
                    if (current.left){
                        current = current.left
                        continue
                    }
                   current.left = nodeToInsert;
                   return this;
                } else {
                    if (current.right){
                        current =  current.right
                        continue
                    }
                   current.right = nodeToInsert;
                   return this;
                }
            }
        }
    }

    lookup(value){
        let current = this.root;
        while(current) {
            if (current.value === value) {
                return current
            } else if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = []
        let queue = []
        queue.push(currentNode)

        while(queue.length) {
            currentNode = queue.shift()
            list.push(currentNode.value)
            if (currentNode.left){
                queue.push(currentNode.left)
            }
            if (current.right){
                queue.push(currentNode.right)
            }
        }
        return list;
    }

    breadthFirstSearchR(queue, list) {
        if(!queue.length) {
            return list;
        }
        let currentNode = queue.shift()
        list.push(currentNode.value)
        if (currentNode.left){
            queue.push(currentNode.left)
        }
        if (current.right){
            queue.push(currentNode.right)
        }

        return this.breadthFirstSearchR(queue, list)
    }

    DFSPreorderIterative() {
        let currentNode = this.root;
        let list = []
        let stack = []
        stack.push(currentNode)

        while(stack.length) {
            currentNode = stack.shift()
            list.push(currentNode.value)
            if (currentNode.right){
                stack.unshift(currentNode.right)
            }
            if (currentNode.left){
                stack.unshift(currentNode.left)
            }
        }
        return list;
    }

    
    DFSInorder() {
        return traverseInorder(this.root, [])
    }

    DFSPreorder() {
        return traversePreorder(this.root, [])
    }

    DFSPostorder() {
        return traversePostorder(this.root, [])
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Iterative solution for inordertraversal
var inorderTraversal = function(root) {
    var stack = []
    var list = []
    if (!root) {
        return stack
    }
    var current = root.left
    stack = [root]
    while (current || stack.length){    
        while(current){
            stack.push(current)
            current = current.left
        }
        
        current = stack.pop()
        list.push(current.val)
        current = current.right
    }
    
    return list
}


function traverseInorder(node, list){
    if (node.left){
        traverseInorder(node.left, list);
    }
    list.push(node.value)
    if (node.right){
        traverseInorder(node.right, list);
    }
    return list
}

function traversePreorder(node, list){
    list.push(node.value)
    if (node.left){
        traversePreorder(node.left, list);
    }
    if (node.right){
        traversePreorder(node.right, list);
    }
    return list
}

function traversePostorder(node, list){
    if (node.left){
        traversePostorder(node.left, list);
    }
    if (node.right){
        traversePostorder(node.right, list);
    }
    list.push(node.value)
    return list
}


const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

// BFS [ 9, 4, 20, 1, 6, 15, 170 ]
// BFS [ 9, 4, 20, 1, 6, 15, 170 ]
// DFSpre [ 9, 4, 1, 6, 20, 15, 170 ]
// DFSin [ 1, 4, 6, 9, 15, 20, 170 ]
// DFSpost [ 1, 6, 4, 15, 170, 20, 9 ]

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





/// LEET CODE SOLUTION
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root)
       return [];
   else
       return traverseInorder(root, []);
};

function traverseInorder(node, list){
   if (node.left){
       traverseInorder(node.left, list);
   }
   list.push(node.val)
   if (node.right){
       traverseInorder(node.right, list);
   }
   
   return list
}
