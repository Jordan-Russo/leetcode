// url: https://leetcode.com/problems/largest-odd-number-in-string/
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".

// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // given a number string
    // return the largest odd integer that can be found within the string

    // loop from right to left
    // once you find the first index that's an odd character return the substring from the beginning to that index
    let pos = -1
    for(let i = num.length - 1; i >= 0; i--){
        const char = num[i]
        const isOdd = char === '1' || char === '3' || char === '5' || char === '7' || char === '9'
        if(isOdd){
            pos = i
            break;
        }
    }
    return num.slice(0, pos + 1)
};