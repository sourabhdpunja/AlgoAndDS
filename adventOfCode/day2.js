
/*  First Part
var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day2.txt','utf8')

var arr = result.split('\r\n')
var twoSum = 0
var threeSum = 0

for (let id of arr) {
    var hashMap = {}
    for (let char of id) {
       if (hashMap[char] === undefined){
           hashMap[char] = 1
       } else {
           hashMap[char]++;
       }
    }
    if (Object.values(hashMap).includes(2)){
        twoSum++
    }
    if (Object.values(hashMap).includes(3)){
        threeSum++
    }
}

console.log(twoSum*threeSum)
*/

var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day2.txt','utf8')

var arr = result.split('\r\n')

for (let i = 0; i < arr.length -1; i++){
    for (let j = i+1; j < arr.length; j++) {
        if (checkDifference(arr[i], arr[j]) === 1){
            console.log(commonLetters(arr[i], arr[j]));
        }
    }
}

function commonLetters(firstId, secondId) {
    let commonLetter = '';
    for (let i = 0; i < firstId.length; i++){
        if (firstId[i] === secondId[i]){
            commonLetter+= firstId[i]
        }
    }
    return commonLetter
}

function checkDifference(firstId, secondId) {
    let totalDiff = 0;
    for (let i = 0; i < firstId.length; i++){
        if (firstId[i] !== secondId[i]){
            totalDiff++
        }
    }
    return totalDiff
}

