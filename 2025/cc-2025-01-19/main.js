// url: https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/
// given two arrays of integers
// return the smallest number you can create that contains one digit taken from each array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minNumber(nums1, nums2){
    // make a set of nums1 and nums2
    const set1 = new Set(nums1)
    const intersection = []
    for(const num of nums2){
        if(set1.has(num)){intersection.push(num)}
    }
    // find a intersection, if there is any intersection return the smallest
    if(intersection.length > 0){return Math.min(...intersection)}
    // otherwise grab the smallest number from each array
    const smallest1 = Math.min(...nums1)
    const smallest2 = Math.min(...nums2)
    // combine them to form the smallest number
    const smallest = Math.min(smallest1 * 10 + smallest2, smallest2 * 10 + smallest1)
    // return it
    return smallest
};
// console.log(minNumber([4,1,3],[5,7]), 15)
// console.log(minNumber([3,5,6,2],[3,1,7]), 3)