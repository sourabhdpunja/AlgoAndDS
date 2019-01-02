// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // 1 Solution
    var splitString = str.split(' ')
    var words = [];
    for (let word of splitString){
        const capitalStart = word[0].toUpperCase();
        word = capitalStart + word.slice(1);
        words = words.push(word);
    }
    return words.join(' ')

    // 2nd Solution Here we have to assume 1st character to be character
//     let result = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++){
//         if (str[i - 1] === ' '){
//             result = str[i].toUpperCase();
//         } else {
//             result = str[i];
//         }
//     }

//     return result;
// }

module.exports = capitalize;
