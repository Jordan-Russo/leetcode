// url: https://leetcode.com/problems/intersection-of-two-arrays-ii/
// takes in two integer arrays
// return an array that contains all the integers that can be found in both of the given int arrays, can have repeat numbers
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2){
    // make a hash map for nums1 and nums2
    // loop through both nums1 and nums2 turning the hash map into a frequency cache
    const frequencyCache1 = {}
    for(const num of nums1){
        frequencyCache1[num] = frequencyCache1[num] + 1 || 1
    }
    const frequencyCache2 = {}
    for(const num of nums2){
        frequencyCache2[num] = frequencyCache2[num] + 1 || 1
    }
    // initialize intersection array
    const intersection = []
    // loop through the keys in either cache1 or cache2
    for(const key in frequencyCache1){
        // while the hashmap for nums1 and nums2 still has a number
        while(frequencyCache1[key] && frequencyCache2[key]){
            // decrement the frequency for both
            frequencyCache1[key]--
            frequencyCache2[key]--
            // push the number into the intersection array
            intersection.push(Number(key))
        }
    }
    // return the intersection array
    return intersection
};
// console.log(intersect([1,2,2,1], [2,2]), [2,2])
// console.log(intersect([4,9,5], [9,4,9,8,4]), [4, 9])