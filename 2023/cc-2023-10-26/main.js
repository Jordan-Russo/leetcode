// url: https://leetcode.com/problems/flatten-deeply-nested-array/

// Given a multi-dimensional array and a depth n

// Return a flattened version of the arrayj

// recursive structure
// an array and n

// if n is 0, return the array

// loop through the elements
// if the element is a number push it in
// if the element is an array, push its inner elements in
// return a recursive flat where this flattened arr becomes the new array and the depth decreases by 1.

// Example 1:

// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Explanation
// Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened. 
// Example 2:

// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 1
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Explanation
// The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.
// Example 3:

// Input
// arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 2
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Explanation
// The maximum depth of any subarray is 1. Thus, all of them are flattened.


/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
 
var flat = function (arr, n) {
    if(n === 0){return arr}
    const flattenedArr = [];
    for(let i = 0; i < arr.length; ++i){
        if(typeof arr[i] === 'number'){
            flattenedArr.push(arr[i]);
        }else{
            flattenedArr.push(...flat(arr[i], n - 1));
        }
    }
    return flattenedArr;
};

