// url: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
// Given an integer array and a mapping function
// Return the new array you get after mapping it (w/o mapping API)
// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function([...arr], fn) {
    arr.forEach((n, i) => arr[i] = fn(n, i))
    return arr
};