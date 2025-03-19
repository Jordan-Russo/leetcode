// url: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the array after sorting it.
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    function filledBitCount(n){
        let count = 0;
        while(n > 0){
            if(n & 1){
                count++;
            }
            n >>= 1;
        }
        return count
    }
    return arr.toSorted((a, b) => {
        const aBits = filledBitCount(a);
        const bBits = filledBitCount(b);
        if(aBits !== bBits){
            return aBits - bBits;
        }else{
            return a - b;
        }
    })
};
// Example 1:

// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]

// Example 2:

// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
// Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
