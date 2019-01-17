var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day5.txt','utf8')

// var stack = []
// for (let char of result) {
//     if (!stack.length){
//         stack.push(char)
//         continue;
//     }
//     if ((char !== stack[stack.length-1]) && (char.toLowerCase() === stack[stack.length - 1].toLowerCase())) {
//         stack.pop()
//         continue
//     }
//     stack.push(char)
// }

let charMap = {
    1: ['a', 'A'],
    2: ['b', 'B'],
    3: ['c', 'C'],
    4: ['d', 'D'],
    5: ['e', 'E'],
    6: ['f', 'F'],
    7: ['g', 'G'],
    8: ['h', 'H'],
    9: ['i', 'I'],
    10: ['j', 'J'],
    11: ['k', 'K'],
    12: ['l', 'L'],
    13: ['m', 'M'],
    14: ['n', 'N'],
    15: ['o', 'O'],
    16: ['p', 'P'],
    17: ['q', 'Q'],
    18: ['r', 'R'],
    19: ['s', 'S'],
    20: ['t', 'T'],
    21: ['u', 'U'],
    22: ['v', 'V'],
    23: ['w', 'W'],
    24: ['x', 'X'],
    25: ['y', 'Y'],
    26: ['z', 'Z'],
}

let shortestLength;
for (let key in charMap){
    let newStringResult = result;
    for (let char of charMap[key]){
        // ONE WAY TO REPLACE USING regex
        var re = new RegExp(char,"g");
        newStringResult = newStringResult.replace(re, '')
        // newStringResult = newStringResult.split(char).join('')
    }
    var stack = []
    for (let char of newStringResult) {
        if (!stack.length){
            stack.push(char)
            continue;
        }
        if ((char !== stack[stack.length-1]) && (char.toLowerCase() === stack[stack.length - 1].toLowerCase())) {
            stack.pop()
            continue
        }
        stack.push(char)
    }
    if (!shortestLength){
        shortestLength = stack.length
    } else {
        if (shortestLength > stack.length){
            shortestLength = stack.length
        }
    }
}

console.log(shortestLength)