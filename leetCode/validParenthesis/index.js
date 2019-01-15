/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */

 // My Implementation
var isValid = function(s) {
    var stack = []
    if (s === ""){
        return true
    }
    if (s.length < 2){
        return false
    }
    for (let char of s) {
       if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            let topElement = stack.pop();
            if (char === ")" && topElement === "("){
                continue; 
            } else if (char === "}" && topElement === "{"){
                continue;
            } else if (char === "]" && topElement === "["){
                continue;
            } else {
                return false
            }
        }
    }
    if (stack.length !== 0){
        return false
    }
    return true;
};

// Proper Implementation

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    var parenMap = {
        '{' : '}',
        '[' : ']',
        '(' : ')',
    }
    
    for (let char of s){
        if (parenMap[char]){
            stack.push(parenMap[char])
        } else {
            if (char !== stack.pop()){
                return false;
            }
        }
    }
    
    return stack.length === 0
    
};