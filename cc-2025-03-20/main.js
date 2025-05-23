// url: https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/
// You are given a binary string s and an integer k.

// A binary string satisfies the k-constraint if either of the following conditions holds:

//     The number of 0's in the string is at most k.
//     The number of 1's in the string is at most k.

// Return an integer denoting the number of
// of s that satisfy the k-constraint.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let count = 0;
    function bitLimitK(start){
        let zeroCount = 0;
        let oneCount = 0;
        for(let i = start; i < s.length; i++){
            const curr = s[i];
            if(curr === '0'){zeroCount++;}
            if(curr === '1'){oneCount++;}
            if(zeroCount > k && oneCount > k){break;}
            count++;
        }
    }
    for(let i = 0; i < s.length; i++){
        bitLimitK(i);
    }
    return count;
};
// Example 1:

// Input: s = "10101", k = 1

// Output: 12

// Explanation:

// Every substring of s except the substrings "1010", "10101", and "0101" satisfies the k-constraint.

// Example 2:

// Input: s = "1010101", k = 2

// Output: 25

// Explanation:

// Every substring of s except the substrings with a length greater than 5 satisfies the k-constraint.

// Example 3:

// Input: s = "11111", k = 1

// Output: 15

// Explanation:

// All substrings of s satisfy the k-constraint.
