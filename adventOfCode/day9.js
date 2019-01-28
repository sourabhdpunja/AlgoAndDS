

var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day9.txt','utf8').split(" ")

// Part 1
let currentNode = { val:0, next:null, prev:null }
currentNode.next = currentNode;
currentNode.prev = currentNode;

let numberOfPlayers = 430 
let marbleCount = 7158800  
let playerScore = [];
for (let i = 0; i < numberOfPlayers; i++){
    playerScore[i] = 0
}

for (let marbleValue = 1; marbleValue <= marbleCount; marbleValue++){
    let i = (marbleValue - 1)%numberOfPlayers
    if (marbleValue%23 === 0){
        let removeNode = currentNode.prev.prev.prev.prev.prev.prev.prev
        playerScore[i] = playerScore[i] + marbleValue + removeNode.val
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev
        currentNode = removeNode.next
    } else {
        let newNode = {val : marbleValue}
        let marble1 = currentNode.next
        let marble2 = currentNode.next.next
        marble1.next = newNode
        newNode.next = marble2
        marble2.prev = newNode
        newNode.prev = marble1
        currentNode = newNode
    }
}

console.log(Math.max(...playerScore))