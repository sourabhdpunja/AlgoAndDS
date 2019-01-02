// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // First Solution by comparing reversed string with current string
    var reverseString = str.split('').reduce((rev, char) => char+rev, '');
    return reverseString === str;
    // Second Solution by using every function
    var rev = str.split('').every((char, i) => char === str[str.length -i -1]);
}

module.exports = palindrome;
