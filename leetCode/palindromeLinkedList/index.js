/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// Stack Approach
var isPalindrome = function(head) {
    if (!head) {
        return true;
    }
    var slow = head;
    var fast = head;
    var stack = [head.val];
    if (!head.next){
        return true 
    }
    
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next
        stack.push(slow.val)
    }
    
    // Has odd number of elements so pop the middle element from stack
    if (!fast.next){
        stack.pop()
    }
    
    while (slow.next){
        slow = slow.next
        if (stack.pop() !== slow.val){
            return false
        }
    }
    
    return stack.length === 0
};

//O(n) time and O(n) space. Not fancy but I think it's elegant and understandable.
var isPalindrome = function(head) {
    let first = '';
    let second = '';
    while (head) {
        first = first + head.val;
        second = head.val + second;
        head = head.next;
    }
    return first === second;
};

 // using the Approach of reversing the linked list
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null){
        return true;
    }
    
    let newHead = new ListNode(head.val) 
    let current = head;
    while(current.next !== null) {
        current = current.next;
        let temp = new ListNode(current.val);
        temp.next = newHead;
        newHead = temp;
    }
    
    current = head;
    let anotherCurrent = newHead;
    while (current !== null) {
        if (anotherCurrent.val !== current.val){
            return false
        }
        current = current.next
        anotherCurrent = anotherCurrent.next
    }
    return true
    
};