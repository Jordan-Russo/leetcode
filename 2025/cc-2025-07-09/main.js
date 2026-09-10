// You are given a positive integer n.

// A binary string x is valid if all

// of x of length 2 contain at least one "1".

// Return all valid strings with length n, in any order.
/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    const result = [];

    // if last character is a '0' then do not add a zero in
    function binaryPermutation(string, limit){
        if(string.length === limit){
            result.push(string)
            return
        }
        binaryPermutation(string + '1', n);
        if(string.at(-1) !== '0'){
            binaryPermutation(string + '0', n);
        }
    }
    binaryPermutation('', n);
    return result;
};
// Example 1:

// Input: n = 3

// Output: ["010","011","101","110","111"]

// Explanation:

// The valid strings of length 3 are: "010", "011", "101", "110", and "111".

// Example 2:

// Input: n = 1

// Output: ["0","1"]

// Explanation:

// The valid strings of length 1 are: "0" and "1".