// https://leetcode.com/problems/subsets-ii/submissions/1323624350/
// Given an integer array nums that may contain duplicates, return all possible
// subsets
// (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.toSorted((a,b) => a - b)
    let results = []
    combinations()
    return results
    function combinations(set = [], pos = 0){
        if(pos === nums.length){
            results.push(set)
            return null;
        }
        let nextUniqueValuePosition = pos
        while(nums[nextUniqueValuePosition] === nums[pos]){
            nextUniqueValuePosition++
        }
        pos++
        combinations([...set], nextUniqueValuePosition)
        combinations([...set, nums[pos - 1]], pos)
        return null;
    }
};