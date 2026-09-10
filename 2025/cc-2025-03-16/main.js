// url: https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/
// given an integer arr that has an even length, never empty, length >= 2
// and an integer, k, always positive integer
// return a boolean if there is anyway to pair all the numbers in the array such that the sum every pair is divisible by k
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    // loop through the array
    // for each value, map the remainder from dividing by k
    const remainders = arr.map(num => {
        let remainder = num % k;
        if(remainder < 0){remainder += k}
        return remainder;
    })
    // sort each of the remainders
    remainders.sort((a,b) => a - b);
    // make sure all the negative remainders are positive, shift it backwards from k
    const lastZero = remainders.lastIndexOf(0);
    // make sure all the 0 remainder count is even
    if(lastZero % 2 === 0){return false}
        // otherwise return false
    let left = lastZero + 1;
    // loop through all the non-zero remainders from both left and right, meeting at the middle
    let right = remainders.length - 1;
    while(left < right){
        // pair the left-most one (after the zeros) with the right most one
        const sum = remainders[left] + remainders[right];
        // if the remainder of their sum is not zero
        const isValid = sum % k === 0;
            // return false
        if(!isValid){return false}
        left++;
        right--;
    }
    // return true
    return true;
};
// console.log(canArrange([1,2,3,4,5,10,6,7,8,9], 5), true);
// console.log(canArrange([1,2,3,4,5,6], 7), true);
// console.log(canArrange([1,2,3,4,5,6], 10), false);