/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

/**
 * @param {string} s
 * @return {string}
 */

/**
* @param {string} s
* @return {string}
*/

// Bucket Sort
var frequencySort = function (s) {
    let frequencyMap = {}
    for (let char of s) {
        frequencyMap[char] = frequencyMap[char] + 1 || 1
    }
    let bucket = []
    for (i = 0; i < s.length + 1; i++) {
        bucket[i] = []
    }

    Object.keys(frequencyMap).map(entry => {
        bucket[frequencyMap[entry]].push(entry)
    });

    let freqString = ''
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length !== 0) {
            for (let char of bucket[i]) {
                let freq = i
                while (freq > 0) {
                    freqString = freqString + char
                    freq--
                }
            }
        }
    }
    return freqString
};

// O(nlogn)Time O(n) Space Complexity
var frequencySort = function (s) {
    let frequencyMap = {}
    for (let char of s) {
        frequencyMap[char] = frequencyMap[char] + 1 || 1
    }
    let sortedMap = Object.keys(frequencyMap).map(entry => [entry, frequencyMap[entry]]).sort((a, b) => b[1] - a[1])
    let freqString = ''
    for (let charEntry of sortedMap) {
        while (charEntry[1] > 0) {
            freqString = freqString + charEntry[0]
            charEntry[1]--
        }
    }
    return freqString
};