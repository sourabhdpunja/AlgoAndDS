// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     var vowelCount = 0;
//     const checker = ['a','e','i','o','u'];
//     for (let char of str.toLowerCase()){
//         // if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//         //     vowelCount++;
//         // }
//         if (checker.includes(char)) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }

// Solution 2 Using Regex Expression

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}


module.exports = vowels;
