
/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = []
    
     // First base case; if user requests zero rows, they get zero rows.
    if (numRows === 0){
        return triangle
    }
    
     // Second base case; first row is always [1].
    triangle.push([1]);
    
    for (let i = 1;i < numRows; i++){
         // The first row element is always 1.
        let row = [1]
         // Each triangle element (other than the first and last of each row)
        // is equal to the sum of the elements above-and-to-the-left and
        // above-and-to-the-right.
        for (let j = 1; j < i; j++) {
            row.push(triangle[i-1][j-1] + triangle[i-1][j])
        }
        // The last row element is always 1.
        row.push(1)
        triangle.push(row)
    }
    return triangle; 
};

/*
Time complexity : O(numRows^2)

Space complexity : O(numRows^2)
*/