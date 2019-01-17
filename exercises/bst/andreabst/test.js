class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class bst {
    constructor() {
        this.root = null
    }

    insert(value){
        if (this.root === null){
            this.root = new Node(value)
            return
        }

        let current = this.root 
        let newNode = new Node(value)
        
        while (true) {
            if (current.value >= value){
                if (current.left){
                    current = current.left
                    continue
                } else {
                    current.left = newNode
                    return root;
                }
                
            } else {
                if (current.right){
                    current = current.right
                    continue
                } else {
                    current.right = newNode
                    return root;
                }
            }
        }
    }

    lookup(value) {
        let current = root
        while (current) {
            if (current.value === value){
                return current
            } else if (current.value > value){
                current = current.left
            } else {
                current = current.right
            }
        }
        return false;
    }

    breadthFirstSearch() {
        let current = root
        let list = []
        let queue = [root]

        while(queue.length){
            let current = queue.pop()
            list.push(current.value)
            if (current.left){
                queue.unshift(current.left)
            }
            if (current.right){
                queue.unshift(current.right)
            }
        }
        return list
    }

    DFSInOrder(){
        traverseInorderDFS(root, [])
    }

    traverseInorderTraverse(){
        var stack = []
        var list = []
        if (!root) {
            return stack
        }
        stack = [root]
        current = root
        while (current || stack.length){
            while (current){
                stack.push(current)
                current = current.left
            }
            current = stack.pop()
            list.push(current.value)
            current = current.right
        }
    }
}

function traverseInorderDFS(node, list) {
    if (node.left){
        traverseInorderDFS(node.left, list)
    }
    list.push(node.value)
    if (node.right) {
        traverseInorderDFS(node.right, list)
    }
    return list
}

function traversePreorderDFS(node, list) {
    list.push(node.value)
    if (node.left){
        traverseInorderDFS(node.left, list)
    }
    if (node.right) {
        traverseInorderDFS(node.right, list)
    }
    return list
}