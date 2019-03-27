/*
// Permutations of String 
// abc = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

    permutations("abc")

    prefix = ""
    suffix = "abc"

    permutations("a", "bc")
    permutations("b", "ac")
*/

let permutations = (s) => {
    let result = [];
    permutationRecursive("", s, result)
    console.log(result)
}

let permutationRecursive = (prefix, suffix, result) => {
    if (!suffix.length) {
        result.push(prefix)
    } else {
        for (let i=0; i<suffix.length; i++){
            permutationRecursive(prefix + suffix[i], suffix.slice(0,i) + suffix.slice(i+1), result)
        }
    }
}
