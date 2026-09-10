/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// given an array of non-negative integers, and a non-negative integer, k
// return the smallest possible range in the array after modifying all the elements by adding any number between -k to positive k.
function smallestRangeI(nums, k){
    // find the largest value and the smallest value
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    // subtract k from the largest value, add k to the smallest value
    // if the difference between new max - new min is <= 0 return 0, otherwise return the new difference
    const difference = (max - k) - (min + k);
    return difference <= 0 ? 0 : difference;
};
// console.log(smallestRangeI([1], 0), 0);
// console.log(smallestRangeI([0,10], 2), 6);
// console.log(smallestRangeI([1,3,6], 3), 0);