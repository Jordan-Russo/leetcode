// url: https://leetcode.com/problems/magical-string/
// A magical string s consists of only '1' and '2' and obeys the following rules:

//     The string s is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string s itself.

// The first few elements of s is s = "1221121221221121122……". If we group the consecutive 1's and 2's in s, it will be "1 22 11 2 1 22 1 22 11 2 11 22 ......" and the occurrences of 1's or 2's in each group are "1 2 2 1 1 2 1 2 2 1 2 2 ......". You can see that the occurrence sequence is s itself.

// Given an integer n, return the number of 1's in the first n number in the magical string s.

 

// Example 1:

// Input: n = 6
// Output: 3
// Explanation: The first 6 elements of magical string s is "122112" and it contains three 1's, so return 3.

// Example 2:

// Input: n = 1
// Output: 1

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    if(n <= 3){return 1}
    let string = '122'
    let pointer = 2
    let count = 1
    while(n > 3){
        const inverseNumber = string[string.length - 1] === '1' ? 2 : 1
        string += `${inverseNumber}`.repeat(Number(string[pointer]))
        // add the first number quantity of it to the end
        // remove the first number
        n--
        pointer++
        if(string[pointer] === '1'){count++}
    }
    return count
};