// url: https://leetcode.com/problems/delete-columns-to-make-sorted/
// given an array of n strings, strs, each having the same length and composed only of lowercase english letters
// figure out how many columns are not sorted lexicographically and return that as a number
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    // initialize count at 0
    let count = 0;
    // loop through each column
    for(let col = 0; col < strs[0].length; col++){
        // loop through each row (starting from the second position)
        for(let row = 1; row < strs.length; row++){
            const prev = strs[row - 1][col];
            const curr = strs[row][col];
            // if the previous row is > curr row then increase count and break
            if(prev > curr){
                count++;
                break;
            }
        }
    }
    // return the count
    return count;
};
// Example 1:

// Input: strs = ["cba","daf","ghi"]
// Output: 1
// Explanation: The grid looks as follows:
//   cba
//   daf
//   ghi
// Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.

// Example 2:

// Input: strs = ["a","b"]
// Output: 0
// Explanation: The grid looks as follows:
//   a
//   b
// Column 0 is the only column and is sorted, so you will not delete any columns.

// Example 3:

// Input: strs = ["zyx","wvu","tsr"]
// Output: 3
// Explanation: The grid looks as follows:
//   zyx
//   wvu
//   tsr
// All 3 columns are not sorted, so you will delete all 3.