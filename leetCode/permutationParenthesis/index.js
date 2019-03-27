/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let list = []
    helper(0,0,"", list, n)
    return list
};

let helper = (open, close, curr, list, max) => {
    if (curr.length >= max*2){
        list.push(curr)
        return
    }
    if(open < max) {
        helper(open+1, close, curr+ "(", list, max)
    }
    
    if(open > close) {
        helper(open, close+1, curr+")", list, max)
    }
}