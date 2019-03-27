/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = []
    if (!digits || digits.length <= 0) {
        return result
    }
    
    let letterMap = {
        0 : [],
        1 : [],
        2 : ['a', 'b', 'c'],
        3 : ['d', 'e', 'f'],
        4 : ['g', 'h', 'i'],
        5 : ['j', 'k', 'l'],
        6 : ['m', 'n', 'o'],
        7 : ['p', 'q', 'r', 's'],
        8 : ['t', 'u', 'v'],
        9 : ['w', 'x', 'y', 'z'],
    }
    
    letterCombinationRecursive(letterMap, digits, '', 0, result)
    return result
};

var letterCombinationRecursive = (letterMap, digits, current, index, result) => {
    if (current.length >= digits.length) {
        result.push(current)
        return;
    }
    
    let letters = letterMap[digits[index]]
    for (let i = 0; i < letters.length; i++){
        letterCombinationRecursive(letterMap, digits, current+letters[i], index + 1, result)
    }
}