/*
Given an input string, reverse the string word by word.

Example:  

Input: "the sky is blue",
Output: "blue is sky the".
Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.trim().split(/\s+/).reverse().join(" ")
};

var reverseWords = function(str) {
    let arr = str.split(' ');
    let ans = '';
	
    for(let i = arr.length-1; i > -1; i--)
        {
            if(arr[i] !== '')
            {
                ans += arr[i] + ' ';
            }
        }
    return ans.trim(); 
};

