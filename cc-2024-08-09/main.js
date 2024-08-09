// url: https://leetcode.com/problems/find-missing-and-repeated-values/description/
// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

 

// Example 1:

// Input: grid = [[1,3],[2,2]]
// Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

// Example 2:

// Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
// Output: [9,5]
// Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length * grid.length
    const expected = n * (1 + n) / 2
    const seen = new Set()
    let actual = 0
    let duplicateNumber;
    for(const row of grid){
        for(const number of row){
            actual += number
            if(seen.has(number)){duplicateNumber = number}
            seen.add(number)
        }
    }
    const missingNumber = expected - actual + duplicateNumber
    return [duplicateNumber, missingNumber]
    // if we know the missing number and the difference in expected and actual sum
    // or we know the duplicate and the difference
    // we can calculate the duplicated number or the misisng value
};