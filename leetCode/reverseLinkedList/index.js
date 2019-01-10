/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newHead = null
    let currentNode = head
    while (currentNode) {
        let tempNode = new ListNode(currentNode.val)
        tempNode.next = newHead
        newHead = tempNode
        currentNode = currentNode.next
    }
     return newHead
 };


 // Second Solution

 var reverseList = function(head) {
    let newHead = null
    let currentNode = head
    while (currentNode) {
        let tempNode = currentNode.next
        currentNode.next = newHead
        newHead = currentNode
        currentNode = tempNode
    }
     return newHead
 };