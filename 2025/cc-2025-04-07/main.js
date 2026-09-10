// url: https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/?envType=daily-question&envId=2025-04-03
// given an array of positive integers, with a length >= 3
// return the maximum score you can make using triplet values as i, j, and k where i < j < k
// to make a score you do (arr[i] - arr[j]) * arr[k];
/**
 * @param {number[]} nums
 * @return {number}
 */
// find the largest value in the array at or before an index as prefix
// find the largest value in the array at or after an index as a suffix
// loop through the array and using the values to the left and right as prefixes and suffixes calculate the max score.
var maximumTripletValue = function(nums) {
    let prefix = nums.reduce((acc, c) => {
        acc.push(Math.max(c, acc[acc.length - 1] || 0));
        return acc;
    }, []);
    let suffix = nums.reduceRight((acc, c) => {
        acc.push(Math.max(c, acc[acc.length - 1] || 0));
        return acc;
    }, []);
    let maxScore = 0;
    for(let i = 1; i < nums.length - 1; i++){
        const a = prefix[i - 1];
        const b = nums[i];
        const c = suffix[suffix.length - 2 - i];
        const score = (a - b) * c;
        maxScore = Math.max(maxScore, score);
    }
    return maxScore;
};
// Example 1:

// Input: nums = [12,6,1,2,7]
// Output: 77
// Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
// It can be shown that there are no ordered triplets of indices with a value greater than 77. 

// Example 2:

// Input: nums = [1,10,3,4,19]
// Output: 133
// Explanation: The value of the triplet (1, 2, 4) is (nums[1] - nums[2]) * nums[4] = 133.
// It can be shown that there are no ordered triplets of indices with a value greater than 133.

// Example 3:

// Input: nums = [1,2,3]
// Output: 0
// Explanation: The only ordered triplet of indices (0, 1, 2) has a negative value of (nums[0] - nums[1]) * nums[2] = -3. Hence, the answer would be 0.