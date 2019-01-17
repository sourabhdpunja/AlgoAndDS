/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
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
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let head;
    let l3;
    while (l1 || l2) {
        let digit1 = 0
        let digit2 = 0
        
        if (l1) {
            digit1 = l1.val
            l1 = l1.next
        }
        
        if (l2) {
            digit2 = l2.val
            l2 = l2.next
        }
        let digit = (digit1 + digit2 + carry)%10
        carry = Math.floor((digit1 + digit2 + carry)/10)
        if (l3){
            l3.next = new ListNode(digit)
            l3 = l3.next
        } else {
            l3 = new ListNode(digit)
            head = l3
        }
    }
    
    if (carry){
        l3.next = new ListNode(carry)
    }
    return head;
};