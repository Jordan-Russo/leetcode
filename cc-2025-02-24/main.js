// url: https://leetcode.com/problems/range-sum-query-immutable/
// given an array of integers
// return a datastructure that has the following method
// sumRange
// when given two non-negative integers
// left and right index positions
// return the sum of the values between those indices (inclusive)
// left and right, will always be within range of the given array
// 0 <= left <= right < nums.length
class NumArray{
    constructor(nums){
        this.nums = nums;
    }
    sumRange(left, right){
        // find sum from left to right inclusive
        // initialize sum
        let sum = 0;
        for(let i = left; i <= right; i++){
            // loop and add values
            sum += this.nums[i];
        }
        return sum;
    }
}
// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3