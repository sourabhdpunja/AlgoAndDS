// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   const aCharMap = buildCharMap(stringA)
   const bCharMap = buildCharMap(stringB)

   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
       return false;
   }
   for (let index in aCharMap){
        if(aCharMap[index] !== bCharMap[index]){
            return false;
        }
    }
    return true;

    // Better Solution
    // return cleanString(stringA) === cleanString(stringB);
}

// function cleanString(str) {
//     return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
// }

function buildCharMap(str){
    var charMap = {};

    for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap
}

// anagrams("asd", "hdsh")

module.exports = anagrams;

// MY Initial Solution
//     var firstString = stringA.replace('/[^\w]/g',"").toLowerCase();
//     var secondString = stringB.replace('/[^\w]/g',"").toLowerCase();
//     let firstCharMap = {};
//     let secondCharMap = {};

//     for (let char of firstString){
//         firstCharMap[char] = firstCharMap[char] + 1 || 1 
//     }
//     for (let char of secondString){
//        if(!secondCharMap[char]){
//         secondCharMap[char] = 1;
//        } else {
//         secondCharMap[char]++;
//        }
//     }

//     for (let index in secondCharMap){
//         if(firstCharMap[index] !== secondCharMap[index]){
//             return false;
//         }
//     }

//     if(firstString.length !== secondString.length){
//         return false
//     } 
//     return true;
