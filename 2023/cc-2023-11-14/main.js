// url: https://leetcode.com/problems/search-a-2d-matrix/

// Given a 2D matrix array 

// Return a boolean of whether or not a value is in the matrix

// calculate the length of all elements
// multiply the amount of arrays by number of elements inside each
// m * n; where m is each of the subarrays and n is each element in the subarray
// make a function that uses and converts this absolute position into a matrix position

// normal binary search


var searchMatrix = function(matrix, target) {
    const colLength = matrix.length
    const rowLength = matrix[0].length
    let low = 0
    let high = rowLength * colLength
    let middle;
    let row;
    let col;
    while(low < high){
        middle = Math.floor((high + low) / 2)
        row = Math.floor(middle / rowLength)
        // assign row
        col = middle % rowLength
        // asign column
        const val = matrix[row][col]
        // then access the value in there
        if(val === target){
            return true
        }else if(val < target){
            low = middle + 1
        }else{
            high = middle
        }
        // then compare the value and reassign low and high
        // return true if match
    }
    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3), true)
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13), false)

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */



// array, low, high
// calculate the value at average
// then reassign low and high
// then keep going until low is equal to high