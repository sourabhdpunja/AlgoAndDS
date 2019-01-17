/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var seen = {}
    var maxLength = 0
    var start= 0
    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]] !== undefined) {
            start = Math.max(start, seen[s[i]] + 1)
        }
        seen[s[i]] = i
        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength
};