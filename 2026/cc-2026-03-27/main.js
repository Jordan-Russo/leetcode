/**
 * @param {number[]} nums1
 * @return {boolean}
 */
// case 1, nums1 is entirely odd/even
// case 2, parts of nums1 aren't entirely odd/even but there's a number that isn't 
// even + even = even
// even + odd = odd
// odd + odd = even
// it's always possible to get one parity
    // if there is at least one odd value the entire array could be made into odd
    // and if not it's already entirely even
var uniformArray = function(nums1) {
    return true;
};