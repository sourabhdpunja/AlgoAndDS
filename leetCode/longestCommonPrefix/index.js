/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

// Using Every Function
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return ''
    }
     
     if (strs.length === 1){
         return strs[0]
     }
     
     result = ''
     
     for (let i = 0; i<strs[0].length ; i++){
         if (strs.every(str => str[i] === strs[0][i])){
             result = result + strs[0][i]
         } else {
             return result
         }
     }
     return result
 };


//Better Implementation
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return ''
    }
     
     for (let i = 0; i < strs[0].length; i++){
         for (let str of strs){
             if (str[i] !== strs[0][i]){
                 return str.slice(0, i);
             }
         }
     }
     
     return strs[0]
 };

// My Implementation
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = ""
    if (!strs[0]){
        return commonPrefix
    }
    for (let i = 0; i < strs[0].length; i++){
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return commonPrefix;
            }
        }
        commonPrefix = commonPrefix + strs[0][i]; 
    }
    return commonPrefix
};