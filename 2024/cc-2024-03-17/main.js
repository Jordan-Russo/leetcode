// Given an array of numbers, where each element is a digit between 1-9
// Take the recursive sum of elements from the left and right to form a triangle until there is only one element left
// Return the final triangular recursive sum
// Example 1:


// Input: nums = [1,2,3,4,5]
// Output: 8
// Explanation:
// The above diagram depicts the process from which we obtain the triangular sum of the array.
// Example 2:

// Input: nums = [5]
// Output: 5
// Explanation:
// Since there is only one element in nums, the triangular sum is the value of that element itself.
/**
 * @param {number[]} nums
 * @return {number}
 */
// function that takes an array
    // if array has length < 2, return array
    // otherwise create new array
    // loop through elements and push the sum for every 2 elements, but only keep the last digit
        // going one element at a time and not doing this for the last element
        // to make length - 1 new elements from the sums for the new array
// keep calling function until it returns an array with length one
// return that ans
var triangularSum = function(nums) {
    let ans = nums
    while(ans.length > 1){
        const newArr = []
        for(let i = 1; i < ans.length; i++){
            const sum = ans[i - 1] + ans[i]
            const num = sum % 10
            newArr.push(num)
        }
        ans = newArr
    }
    return ans
};