// url: https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/
// given two grid arrays, nums1 and nums2, create a new grid array that combines both their values
    // each subarray has its first element as its id and second as its value
    // if nums1 and nums2 have the same id, sum their values together and use that when combining
// return the grid with the ids in ascending order
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const result = [];
    let pointer1 = 0
    let pointer2 = 0;
    // loop until we reach the end of both arrays
    while(pointer1 < nums1.length || pointer2 < nums2.length){
        
        // nums1 has id less than nums2 or nums2 at end
        if(pointer2 === nums2.length || nums1[pointer1]?.[0] < nums2[pointer2]?.[0]){
            // push nums1 array into result
            // increment pointer1
            result.push([...nums1[pointer1]]);
            pointer1++;
        }
        // nums2 has id less then nums1 or nums1 at end
        else if(pointer1 === nums1.length || nums1[pointer1]?.[0] > nums2[pointer2]?.[0]){
            // push nums2 array into result
            // increment pointer 2
            result.push([...nums2[pointer2]]);
            pointer2++;
        }
        // nums1 id === nums2 id
        else{
            // push the sum of nums1 and nums2 into result
            // increment pointer 1 and poointer 2
            const sum = nums1[pointer1][1] + nums2[pointer2][1];
            result.push([nums1[pointer1][0], sum]);
            pointer1++;
            pointer2++;
        }
    }
    // return result
    return result;
};
// Example 1:

// Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
// Output: [[1,6],[2,3],[3,2],[4,6]]
// Explanation: The resulting array contains the following:
// - id = 1, the value of this id is 2 + 4 = 6.
// - id = 2, the value of this id is 3.
// - id = 3, the value of this id is 2.
// - id = 4, the value of this id is 5 + 1 = 6.

// Example 2:

// Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
// Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
// Explanation: There are no common ids, so we just include each id with its value in the resulting list.
