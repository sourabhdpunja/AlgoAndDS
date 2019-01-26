/*
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:

Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
Example 2:

Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let start = 0
    let seen = {}
    let maxlength = 0
    for (let i = 0; i < s.length; i++){
        seen[s[i]] = seen[s[i]] + 1 || 1
        while (Object.keys(seen).length > 2){
            if (seen[s[start]] === 1){
                delete seen[s[start]]
            } else {
                seen[s[start]]--
            }
            start++
        }
        if (maxlength < i - start + 1){
            maxlength = i - start + 1
        }
    }  
    return maxlength
};