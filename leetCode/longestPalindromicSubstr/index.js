

/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s == null || s.length == 0) {
        return "";
    }
    
    let dp = []
    let res = ''
    for (let i = 0; i < s.length; i++){
        dp[i] = [];
    }
      for(let i = 0; i < s.length; i++) {
            for(let j = i; j >= 0; j--) {
                if (i -j < 2){
                    if (s[j] === s[i]){
                        dp[j][i] = true
                    } else {
                        dp[j][i] = false
                    }
                } else {
                    dp[j][i] = dp[j+1][i-1] && s.charAt(j) == s.charAt(i)
                }
                
                if (dp[j][i] && res.length < i - j + 1){
                    res = s.slice(j, i+1);
                }
            }
      }
    console.log(res)
    return res
};