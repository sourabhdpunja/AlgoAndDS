var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day3.txt','utf8')

var claims = result.split('\r\n')
let fabric = {}
// Part 1
for (let claim of claims){
    let [claimId, claimSymbol, coordinates, dimensions] = claim.split(" ")
    let [xcoordinate, ycoordinate] = coordinates.slice(0, coordinates.length-1).split(",")
    let [width, height] = dimensions.split("x");
    xcoordinate = parseInt(xcoordinate)
    ycoordinate = parseInt(ycoordinate)
    width = parseInt(width)
    height = parseInt(height)

    for (let i = xcoordinate; i < xcoordinate + width; i++){
        for (let j = ycoordinate; j < ycoordinate + height; j++){
            if (fabric[`${i},${j}`]){
                fabric[`${i},${j}`]++
            } else {
                fabric[`${i},${j}`] = 1
            }
        }
    }
}
let overlap = 0
for (let index in fabric){
    if (fabric[index]>1){
        overlap++
    }
}


// Part2
for (let claim of claims){
    let [claimId, claimSymbol, coordinates, dimensions] = claim.split(" ")
    let [xcoordinate, ycoordinate] = coordinates.slice(0, coordinates.length-1).split(",")
    let [width, height] = dimensions.split("x");
    xcoordinate = parseInt(xcoordinate)
    ycoordinate = parseInt(ycoordinate)
    width = parseInt(width)
    height = parseInt(height)
    
    let nonOverlap = true 
    for (let i = xcoordinate; i < xcoordinate + width; i++){
        for (let j = ycoordinate; j < ycoordinate + height; j++){
            if (fabric[`${i},${j}`] > 1){
                nonOverlap = false
            }
        }
    }

    if (nonOverlap){
        console.log(claimId)
    }
}