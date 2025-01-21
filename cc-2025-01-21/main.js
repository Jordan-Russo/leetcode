// url: https://leetcode.com/problems/find-the-difference-of-two-arrays/
// given two integer arrays
// return an array with two subarrays
    // the first subarray includes all the distinct integers in nums1 which are not in nums2
    // the second subarray includes all the distinct integers in nums2 which are not in nums1
// integers in the subarrays can be return in any order
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2){
    // create a sets for nums1 and nums2
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    // create two arrays to hold the difference
    const difference1 = []
    // loop through set1 and record any elements that cannot be found in set2 in difference array 1
    for(const num of set1){
        if(set2.has(num) === false){
            difference1.push(num)
        }
    }
    const difference2 = []
    // loop through set2 and record any elements that cannot be found in set1 in difference array 2
    for(const num of set2){
        if(set1.has(num) === false){
            difference2.push(num)
        }
    }
    // return an array with difference array 1 and difference array 2, in that order as subarrays.
    return [difference1, difference2]
};
// console.log(findDifference([1,2,3], [2,4,6]), [[1,3],[4,6]])
// console.log(findDifference([1,2,3,3], [1,1,2,2]), [[3],[]])