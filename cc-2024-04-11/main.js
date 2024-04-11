// url: https://leetcode.com/problems/most-frequent-even-element/description/
// Given an integer array nums, return the most frequent even element.
// If there is a tie, return the smallest one. If there is no such element, return -1.

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
// Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const evenFreqCache = {}
    let maxCount = -1
    let maxElement = ''
    for(const num of nums){
        if((num & 1) === 0){
            evenFreqCache[num] ??= 0
            evenFreqCache[num]++
            if(evenFreqCache[num] > maxCount){
                maxCount = evenFreqCache[num]
                maxElement = num
            }else if(evenFreqCache[num] === maxCount){
                maxElement = Math.min(num, maxElement)
            }
        }
    }
    return maxElement !== '' ? maxElement : -1
};