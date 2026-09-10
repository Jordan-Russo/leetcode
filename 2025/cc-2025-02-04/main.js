// url: https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/
// given an integer array, nums, and a integer, k
// return an integer that is the sum of every integer in nums that has its index (0-indexed) contain k bits having a value of 1 (bit can be 1 or 0).
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function setBitCount(num){
    let count = 0;
    // find the number of bits that are set (equal to 1)
    // return the number
    // num is <= 10**5, so lets use bitwise operators
    while(num > 0){
        if(num & 1){
            count++;
        }
        num >>= 1;
    }
    return count;
}
function sumIndicesWithKSetBits(nums, k) {
    // initialize sum at 0
    let sum = 0;
    // loop through nums
    for(let i = 0; i < nums.length; i++){
        // determine how many bits are 1 using the index
        const indexSetBitCount = setBitCount(i);
        // if indexBitCount === k
        if(indexSetBitCount === k){
            // add the element value to sum
            sum += nums[i];
        }
    }
    // return sum
    return sum;
};
// console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1), 13);
// console.log(sumIndicesWithKSetBits([4,3,2,1], 2), 1);