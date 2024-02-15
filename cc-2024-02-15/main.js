// url: https://leetcode.com/problems/find-common-elements-between-two-arrays/
// Given two integer arrays
// Return a new array /w two integers
    // The first number is how many elements in array1 occur in array2
    // the second number is how many elements in array2 occur in array1

// Create a set for each array (that houses all the unique numbers in the array)
// Loop through each array, and count the number of elements in each array that can be found within the set of the other array
// Return these two numbers within a new array

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {

    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    let commonNums1 = 0
    for(const num of nums1){
        if(set2.has(num)){
            commonNums1++
        }
    }

    let commonNums2 = 0
    for(const num of nums2){
        if(set1.has(num)){
            commonNums2++
        }
    }
    
    return [commonNums1, commonNums2]
};