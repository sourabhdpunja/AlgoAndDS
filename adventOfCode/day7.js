

var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day7.txt','utf8').split("\r\n")

nodes = {}
for (let line of result) {
    let dependentOn = line.split(" ")[1]
    let step = line.split(" ")[7]
    if (!nodes[step]){
        nodes[step] = [dependentOn]
    } else {
        nodes[step].push(dependentOn)
    }
    if (!nodes[dependentOn]){
        nodes[dependentOn] = []
    }
}

let stepsOrder = ''
let deletekey;
let nodesKeyLength = Object.keys(nodes).length
let sortedNodes = Object.keys(nodes).sort()
while (stepsOrder.length < nodesKeyLength){
    for (let i = 0; i < sortedNodes.length; i++){
        let key = sortedNodes[i]
        if (nodes[key].every(node => stepsOrder.includes(node))){
            stepsOrder = stepsOrder + key
            deletekey = i
            break
        }
    }
    sortedNodes.splice(deletekey, 1)
}
console.log(stepsOrder)
