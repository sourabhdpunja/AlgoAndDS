/*
 Copy List with Random Pointer
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.
*/ 

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */
// Solution with O(n) time complexity and O(1) space complexity
var copyRandomList = function(head) {
    let current = head
    while(current){
        let copy = new RandomListNode(current.label)
        copy.next = current.next
        current.next = copy
        current = current.next.next
    }
    
    current = head
    
    while (current){
        current.next.random = (current.random !== null) ? current.random.next : null
        current = current.next.next
    }
    
    current = head
    let headCopy = (current !== null) ? current.next : null
    while (current){
        let copy = current.next
        current.next = copy.next
        current = current.next 
        copy.next = (current !== null) ? current.next : null
    }
    return headCopy
};

 // Solution with Map
/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

var copyRandomList = function(head) {
    if (!head) {
        return head
    }
    let dummy = new RandomListNode(0)
    let p = head
    let q = dummy
    let nodeMap = new Map();
    while (p){
        q.next = new RandomListNode(p.label)
        nodeMap.set(p,q.next)
        p = p.next
        q = q.next
    }
    
    p = head
    q = dummy
    while (p){
        if (p.random !== null){
              q.next.random = nodeMap.get(p.random)
        }
        q = q.next
        p = p.next
    }
    return dummy.next
};