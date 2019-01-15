// \

var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day1.txt','utf8')

var arr = result.split('\r\n')
var result = 0
var hashMap = {}
while (true){
    for (let num of arr) {
        result = result + parseInt(num)
        if (hashMap[result] === undefined) {
            hashMap[result] = true
        } else {
            console.log("GOT " + result)
            return true
        }
    }
}
