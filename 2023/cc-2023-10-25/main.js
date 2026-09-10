// Given an array nums, with 2 or more numbers, always integers

// Return an array answer, where every element is wqual to the product of all the nums except itself (nums[i])

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// loop through the array
// For each element, we're mapping its value as the product of all other numbers in the array
// We return the new array that was mapped

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  O(n^2) time complexity solution:
var productExceptSelf = function(nums) {
    const exclusionArrProd = [];
    for(let i = 0; i < nums.length; ++i){
        let product = 1;
        for(let j = 0; j < nums.length; ++j){
            if(i !== j){
                product *= nums[j];
            }
        }
        exclusionArrProd.push(product);
    }
    return exclusionArrProd;
};

// O(n) time complexity solution:
var productExceptSelf = function(nums){
    let zeroCount = 0;
    const product = nums.reduce((a, c) => {
        if(c === 0 && zeroCount === 0){
            zeroCount++;
            c = 1;
        };
        return a * c;
    }, 1)
    // needs to handle arrays with 1 or more 0s.
    // create an edge case when there is only 1 0 in the array.
    const products =  nums.map(num => {
        if(zeroCount > 0){
            return num === 0 ? product : 0;
        }else{
            return product / num;
        }
    });
    return products;
}