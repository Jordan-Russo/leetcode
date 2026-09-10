// url: https://leetcode.com/problems/intersection-of-two-arrays/description/
// given two integer arrays
// return an array of their intersection
// only return one of each number (set)
// an intersection would be all the elements that both arrays have in common
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    // create a set for nums1
    const set1 = new Set(nums1)
    // create a set for nums2
    const set2 = new Set(nums2)
    // create an array that loops through nums1
    const intersections = []
    // if a number is found to be in both sets while looping, push it into an array
    for(const num of set1){
        if(set2.has(num)){
            intersections.push(num)
        }
    }
    // return the intersection array
    return intersections
};
// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.