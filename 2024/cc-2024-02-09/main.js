// url: https://leetcode.com/problems/decode-xored-array/

// Given a starting number and an array of previous values

// push the starting number to the beginning of the array and XOR the previous value using the number that came before it

// Return the new array

// Example 1:

// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
// Example 2:

// Input: encoded = [6,2,7,3], first = 4
// Output: [4,2,0,7,4]

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let array = [first]
    for(let i = 0; i < encoded.length; i++){
        array.push(array.at(-1) ^ encoded[i])
    }
    return array
};