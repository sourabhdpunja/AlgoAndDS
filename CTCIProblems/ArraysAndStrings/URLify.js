// URLify == Convert spaces to %20 with true length of string given.

function URLify(str, trueLength = str.length){
    // first pass:: find the count of non space characters in the string
    //subtract the chars from the true length to see how many spaces are allowed to replace with %20

    // second pass:: if we see a space and there are still spaces left, append '%20' to output string
    // otherwise copy the current character.
    // when run out of spaces, append the empty string instead. 

    let out = ''
    let trueCharacters = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' ') {
            trueCharacters++;
        }
    }

        let trueSpaces = trueLength - trueCharacters;

    for(let i = 0; i < str.length; i++){
        if (str[i] === ' ' && trueSpaces > 0){
            out = out + '%20'
            trueSpaces--;
        } else if (str[i] !== ' '){ 
            out = out + str[i]
        }
    }

    // if n is not yet reached there are still spaces left
    while (trueSpaces > 0){
        out = out + '%20'
        trueSpaces--;
    }
    return out;
}

console.log(
    URLify('Mr John Smith ', 13) === 'Mr%20John%20Smith',
    URLify('Mr John Smith ', 14) === 'Mr%20John%20Smith%20',
    URLify('   hi', 7) === '%20%20%20hi%20%20',
    URLify('   hi ', 3) === '%20hi',
    URLify('', 0) === '',
    URLify('', 2) === '%20%20',
    URLify('hel lo', 5) === 'hello'
  );