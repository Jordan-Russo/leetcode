// url: https://leetcode.com/problems/combination-sum-ii/
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // step one sort it
    candidates = candidates.toSorted((a,b) => a - b)
    // have a results that you push to with a completed combination
    const results = []
    combinations([], 0, 0, target)
    // use a recursive call that keeps track of position, and sum
        // recursive function

        // if sum greater than target stop
        // if equal to target push and stop
        // either adds and moves to next
        // skips and moves to UNIQUE next

    return results

    function combinations(arr, pos, sum, target){
        if(sum === target){
            results.push(arr)
            return null
        }
        if(sum > target){return null}
        if(pos === candidates.length){return null}

        combinations([...arr, candidates[pos]], pos + 1, sum + candidates[pos], target)
        let nextUniquePosition = pos
        while(candidates[pos] === candidates[nextUniquePosition]){
            nextUniquePosition++
        }
        // either add and next or
        // skip and unique next
        combinations([...arr], nextUniquePosition, sum, target)
    }
};