// url: https://leetcode.com/problems/complement-of-base-10-integer

// Given a non-negative number

// Return the number you get when you flip the bits of the binary representation of the number and convert it back to base-10.
// the bitwise complement number

// Example 1:
// Input: n = 5
// Output: 2
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

// Example 2:
// Input: n = 7
// Output: 0
// Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

// Example 3:
// Input: n = 10
// Output: 5
// Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.



// declarative O(n) solution:
// turn the number into a binary string
// create a new string, flipping every 0 and 1.
// parse a number using the flipped string
// return the number

// imperative O(n) bitwise solution:

// obtain the bitwise value of a number
// for each bit
    // turn into 0 if 1
    // turn into 1 if 0
// convert the new number back to base 10
// return the complement number

/**
 * @param {number} n
 * @return {number}
 */
function bitwiseComplement(n) {
    return parseInt([...n.toString(2)].map(bit => bit === '1' ? '0' : '1').join(''), 2)
};

function bitwiseComplement(n) {
    let counter = 0;
    let total = 0;
    let bit;
    let val;
    do{
        bit = n & 1 ? 0 : 1;
        val = bit << counter++;
        total += val;
        n >>= 1;
    }while(n)
    return total;
};
