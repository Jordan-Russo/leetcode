// url: https://leetcode.com/problems/counting-bits/

// Given a non-negative integer, n
// Return an array that's of length n + 1 for each position starting at 0 up to n, indicating how many '1's are in the binary representation of the arrays current index, i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Loop through each number from 0, to n
// for each number push the count of 1s in the binary representation of the number

/**
 * @param {number} n
 * @return {number[]}
 */

// n log n solution
var countBits = function(n) {
    const result = []
    for(let i = 0; i <= n; i++){
        result.push(binaryOneCount(i))
    }
    return result
    // function that takes in a number, returns how many '1's are in the binary representation
    function binaryOneCount(n){
        let count = 0
        while(n){
            count += n & 1
            n >>= 1
        }
        return count
    }
};

// O(n) solution involves dp (memoization + bottom up recursion)