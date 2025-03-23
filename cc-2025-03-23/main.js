// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const odds = [];
    const evens = [];
    for(const num of nums){
        const isOdd = (num & 1) === 1;
        if(isOdd){odds.push(num)}
        else{evens.push(num)}
    }
    const solution = [];
    for(let i = 0; i < evens.length; i++){
        solution.push(evens[i]);
        solution.push(odds[i]);
    }
    return solution;
};
// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Example 2:

// Input: nums = [2,3]
// Output: [2,3]