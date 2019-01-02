// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data){
        const node = new Node(data, this.head);
        this.head = node;
    }

    size() {
        let current = this.head;
        let counter = 0;
        while (current){ // or while (current !== null)
            current = current.next;
            counter++;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let current = this.head;
        if (!current){
            return current; 
        }
        while(current.next){
            current = current.next;
        }
        return current;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head){
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head){
            return;
        }

        if (!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head
        let node = this.head.next;
        while (node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null; 
    }

    insertLast(record) {
        // My Implementation
        // const newNode = new Node(record);
        // if (!this.head){
        //     this.head = newNode;
        //     return;
        // }

        // if(!this.head.next){
        //     this.head.next = newNode;
        //     return; 
        // }
        // let node = this.head.next;
        // while(node.next){
        //     node = node.next;
        // }
        // node.next = newNode;
        
        // Solution 2
        const last = this.getLast();
        if (last){
            last.next = new Node(record);
        } else {
            this.head = new Node(record);
        }
    }

    getAt(index){
        // if(!this.head){ // not required since it is bieng taken care of at the bottom. 
        //     return null;
        // }
        let node = this.head;
        let counter = 0;
        while(node) {
            if (counter === index){
                return node;
            }
            node = node.next;
            counter++;
        }
        return null; 
    }

    removeAt(index){
        if (!this.head){
            return; 
        }

        if (index === 0){
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index-1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index){
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(index - 1) || this.getLast();
        // if (!previous || !previous.next){
        //     const last = this.getLast()
        //     last.next = new Node(data);
        //     return;
        // }
        previous.next = new Node(data, previous.next)
    }

    forEach(fn){
        if (!this.head){
            return;
        }
        let node = this.head; 
        while(node){
            fn(node);
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
