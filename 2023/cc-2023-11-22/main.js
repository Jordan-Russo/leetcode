// url: https://leetcode.com/problems/median-of-two-sorted-arrays/

// Given two sorted arrays

// Return the median of the two arrays when combined

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const total = nums1.length + nums2.length
    const half = Math.trunc(total / 2)
    const [arr1, arr2] = [nums1, nums2].sort((a, b) => a.length - b.length)
    let l = 0
    let r = arr1.length - 1
    // arr1 will always be the shorter array, arr2 will always be the longer one.
    while(true){
        let i = Math.floor((l + r) / 2)
        // index position on arr1
        let j = half - i - 2
        // index position on arr2, subtract 2, 1 for element count of i, one to reduce element to get index of arr2.
        const arr1L = i < 0 ? -Infinity : arr1[i]
        const arr1R = i + 1 >= arr1.length ? Infinity : arr1[i + 1]
        const arr2L = j < 0 ? -Infinity : arr2[j]
        const arr2R = j + 1 >= arr2.length ? Infinity : arr2[j + 1]
        // compare cross
        const isMedian = arr1L <= arr2R && arr2L <= arr1R
        if(isMedian){
            if(total & 1){
                // odd
                return Math.min(arr1R, arr2R)
                // return the next value in the combined array
            }else{
                // even
                return (Math.max(arr1L, arr2L) 
                    + Math.min(arr1R, arr2R))
                    / 2
                // return the average of the largest value left of median and smallest value right of median
            }
        }else if(arr1L > arr2R){
            r = i - 1
        }else{
            l = i + 1
        }
    }   
}