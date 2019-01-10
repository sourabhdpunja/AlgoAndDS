/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //My Solution needs Space complexity
var mergeTwoLists = function(l1, l2) {
    
    if (!l1){
        return l2
    }
    
    if (!l2){
        return l1
    }
    
    let newHead = null
    let head = null
    while(l1 && l2){
        if (l2.val > l1.val){
            if (!newHead){
                newHead = new ListNode(l1.val);
                head = newHead
            } else {
                newHead.next = new ListNode(l1.val);
                newHead = newHead.next
            }
            l1 = l1.next
        } else {
            if (!newHead){
                newHead = new ListNode(l2.val);
                head = newHead
            } else {
                newHead.next = new ListNode(l2.val);
                newHead = newHead.next
            }
            l2 = l2.next
        }
    }
    
    if (l2){
        newHead.next = l2;
    }
    
    if (l1){
        newHead.next = l1;
    }
    return head    
};

///////////////
// Optimal solution

var mergeTwoLists = function(l1, l2) {
    
    if (!l1){
        return l2
    }
    
    if (!l2){
        return l1
    }
    
    let head
    let tail
    
    // determine sorted linklist's head and tail
  if (l1.val <= l2.val) {
    head = l1;
    tail = l1;
    l1 = tail.next;
  } else {
    head = l2;
    tail = l2;
    l2 = tail.next;
  }
    
    while(l1 && l2){
        if (l2.val > l1.val){
            tail.next = l1;
            tail = tail.next
            l1 = l1.next
        } else {
            tail.next = l2;
            tail = tail.next
            l2 = l2.next
        }
    }
    
    if (l2){
        tail.next = l2;
    }
    
    if (l1){
        tail.next = l1;
    }
    return head
    
};


