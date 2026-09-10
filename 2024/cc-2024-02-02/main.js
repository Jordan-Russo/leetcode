// url: https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
/**
 * @param {number[]} nums
 * @return {number}
 */
// Given an interger arr of positive intgers
// return the average value of all even integers that are divisible by 3, rounded down to the nearest number

//  Example 1:

// Input: nums = [1,3,6,10,12,15]
// Output: 9
// Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
// Example 2:

// Input: nums = [1,2,4,7,10]
// Output: 0
// Explanation: There is no single number that satisfies the requirement, so return 0.
var averageValue = function(nums) {
    const values = nums.filter(num => num % 3 === 0 && (num & 1) === 0)
    console.log(values)
    const average = Math.floor(values.reduce((acc, c) => acc + c, 0) / Math.max(values.length, 1))
    return average 
};