
// Input: Tact Coa
// Output: True(permutations: "Taco cat", "atco cat", etc.)

function palindromePermutation(s) {
    let hash={}
    let charCount = 0;

    for (let char of s){
        if (char === ' '){
            continue;
        }

        if (hash[char]) {
            delete hash[char]
        } else {
            hash[char] = true
        }
        charCount++
    }

    if (charCount%2 === 0) {
        return Object.keys(hash).length === 0;
    } else {
        return Object.keys(hash).length === 1;
    }
}

console.log(
    palindromePermutation('taco cat') === true,
    palindromePermutation('atco cat') === true,
    palindromePermutation(' rac  ecar rara ') === true,
    palindromePermutation('chirpingmermaid') === false,
    palindromePermutation('aabbc') === true,
    palindromePermutation('aaaabbbbcc') === true,
    palindromePermutation('aabc') === false,
    palindromePermutation('') === true
  );