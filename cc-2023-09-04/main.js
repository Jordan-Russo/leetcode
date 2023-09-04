// url: https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
    // Input: a = "11", b = "1"
    // Output: "100"

// Example 2:
    // Input: a = "1010", b = "1011"
    // Output: "10101"
 

// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.


// current challenge
// there is rounding in the parsedNumber
// the parsed number should be stored as a string instead (BigInt).
// sum the string itself with no parsing logic inbetween

function addBinary(a, b){
    let carry = 0;
    let sum = '';
    aIndex = a.length - 1;
    bIndex = b.length - 1;
    let total;
    let pos;
    while(aIndex >= 0 || bIndex >= 0){
        // grab num from each spot
        let aValue = Number(a[aIndex]) || 0;
        let bValue = Number(b[bIndex]) || 0;
        // decrement the index
        total = aValue + bValue + carry;
        carry = total >> 1;
        pos = total & 1;
        // even or odd 
        sum = pos + sum;
        aIndex--;
        bIndex--;
    }
    if(carry){
        sum = '1' + sum;
    }
    return sum;
}