// url: https://leetcode.com/problems/merge-sorted-array/

// Given two asc sorted arrays and the amount of elements in each

// Return an array that has the elements of both arrays merged and sorted asc. 

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1, m, nums2, n){
    const mergedArr = [];
    let mI = 0;
    let nI = 0;
    while(mI < m || nI < n){
        console.log(mI, m, nI, n, mergedArr)
        if(mI < m && nums1[mI] < nums2[nI] || nI === n){
            mergedArr.push(nums1[mI++]);
        }else{
            mergedArr.push(nums2[nI++]);
        }
    }
    mergedArr.forEach((num, i) => nums1[i] = num);
}

// intialize the merged arr as an empty array
// initialize nums1 Index pointer as mI = 0
// initialize nums2 Index pointer as nI = 0
// make a loop to go as long as either m > mI and n > nI
    // conditional: 
        // if m > mI && nums1[mI] < nums2[nI] || n === nI
            // push the nums1[mI]
            // increment mI
        // else
            // push the nums2[nI]
            // increment nI
// return the merged arr