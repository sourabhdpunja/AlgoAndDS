// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Solution using reverse()
    const arr = str.split('');
    arr.reverse();
    const reverseStringOfSol1 = arr.join('');

    // Solution with normal for loop
    var reverseString ="";
    for(var i = str.length-1; i>=0 ; i--){
        reverseString = reverseString + str[i];
        // debugger;
    }

    // Solution with for of loop
    reverseString = ""
    for (let character of str) {
        reverseString = character + reverseString;
    }
    console.log("Reverse String is" + reverseString);
    return reverseString;

    // Solution with reduce function
    reverseString = ""
    reverseString = srt.split('').reduce((rev, char) => char + rev, '');
    // reverseString = srt.split('').reduce((reverse, character) => {
    //     return character + reverse
    // }, '');
}

// reverse('Hi')

module.exports = reverse;
