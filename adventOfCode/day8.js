var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day8.txt','utf8').split(" ")


// Part 1
function convertToTree(data){
    let childrenCount = parseInt(data[0])
    let metadataCount = parseInt(data[1])

    if (childrenCount === 0){
        let metadata = data.slice(2, 2 + metadataCount);
        let length = 2 + metadataCount;
        return {
            children: [],
            metadata,
            length
        }
    }

    let children = []
    let pointer = 2;
    while (childrenCount > 0) {
        let child = convertToTree(data.slice(pointer))
        children.push(child);
        pointer = pointer + child.length;
        childrenCount--
    }

    let childrenLength = children.reduce((acc, v) => {
        return (acc + v.length)
    }, 0)
    let metadata = data.slice(2 + childrenLength, 2 + childrenLength + metadataCount);
    return {
        children,
        metadata,
        length: childrenLength + 2 + metadataCount
    }
}

const rootNode = convertToTree(result);
const sumMetadata = (node) => {
  const localSum = node.metadata.reduce((acc, v) => {
      return (acc + parseInt(v))
    }, 0);
  if (node.children.length === 0) {
    return localSum;
  }
  return localSum + node.children.reduce((acc, v) => acc + sumMetadata(v), 0);
}

// console.log(sumMetadata(rootNode));

// Part 2
const rootNodeSum = (node) => {
    if (node.children.length === 0){
        return node.metadata.reduce((acc, v) => acc + parseInt(v), 0);  
    }

    return node.metadata.reduce((acc, v) => {
        if (!v || v > node.children.length){
            return acc;
        } else {
            return acc + rootNodeSum(node.children[v - 1])
        }
    }, 0);
}

console.log(rootNodeSum(rootNode))