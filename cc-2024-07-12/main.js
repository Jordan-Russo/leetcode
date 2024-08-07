// url: https://leetcode.com/problems/subsets/description/
// Given an integer array nums of unique elements, return all possible
// subsets
// (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2: 

// Input: nums = [0]
// Output: [[],[0]]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = []
    combinations()
    return results
    function combinations(set = [], pos = 0){
        if(pos === nums.length){
            results.push(set)
            return null;
        }
        pos++
        combinations([...set], pos)
        combinations([...set, nums[pos - 1]], pos)
        return null;
    }
};