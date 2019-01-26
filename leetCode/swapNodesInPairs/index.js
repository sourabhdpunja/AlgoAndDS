/*
Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
Note:

Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.
*/

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
var swapPairs = function(head) {
    let dummyHead = new ListNode(0)
    dummyHead.next = head
     
     let p = head;
     let prev = dummyHead;
     
     while (p && p.next){
         let q = p.next
         let r = p.next.next
         
         prev.next = q
         q.next = p
         p.next = r
         
         prev = p
         p = r
     }
     
     return dummyHead.next
 };