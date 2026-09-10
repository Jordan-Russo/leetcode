// url: https://leetcode.com/problems/height-checker/

// Given an array of heights
// Count the number of students that are not in the proper order of increasing heights
// Return the number of students that are not in order
/**
 * @param {number[]} heights
 * @return {number}
 */

// Make a copy of the student heights and sort them
// Compare and count the sorted copy and the original to count the number of positions that don't match

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

var heightChecker = function(heights) {
    const sorted = [...heights].sort((a,b) => a - b)
    let count = 0
    for(let i = 0; i < heights.length; i++){
        const current = heights[i]
        const expected = sorted[i]
        if(current !== expected){
            count++
        }
    }
    return count
};