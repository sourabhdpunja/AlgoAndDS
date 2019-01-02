// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // First Solution
    // var x = '';
    // var sign = Math.sign(n);
    // while(n>0){
    //  x = x + (n%10);
    //  n = parseInt(n/10);
    // }
    // console.log(x * sign);

    // Better Solution
    const reversed = n.toString().str('').reverse().join('');
    return parseInt(reversed) * Math.sign(n)

}

module.exports = reverseInt;
