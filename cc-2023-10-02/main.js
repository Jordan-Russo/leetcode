// url: https://leetcode.com/problems/squares-of-a-sorted-array/

// Given an integer array nums sorted in non-decreasing order, 
//  return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// log n time complexity, two pointers needed
function sortedSquares(nums) {
    const squares = [];
    let negative;
    let positive;
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] >= 0){
            if(nums[i] < nums[positive]){
                positive = i;
            }
            positive ??= i;
        }else{
            if(nums[i] >= nums[negative]){
                negative = i;
            }
            negative ??= i
        }
    }
    negative ??= -1;
    positive ??= nums.length;
    // locate index of negative integer closest to 0. (or -1)
    // locate index of smallest non-negative integer. (or array.length)
    while(negative >= 0 || positive < nums.length){
        const negativeVal = -nums[negative]
        const positiveVal = nums[positive]
        if(negative >= 0 && positive < nums.length){
            if(positiveVal <= negativeVal){
                squares.push(positiveVal * positiveVal);
                positive++;
            }else{
                squares.push(negativeVal * negativeVal);
                negative--;
            }
        }
        else if(negative >= 0){
            squares.push(negativeVal * negativeVal);
            negative--;
        }else if(positive < nums.length){
            squares.push(positiveVal * positiveVal);
            positive++;            
        }
    }
    return squares;
};



// after you have indicies if neither is less than 0 or greater than or equal to length
// loop while either pointer still works
// if both still work
    // compare the abs value of both of values at the indices
    // push the square of the smaller one
    // increment index
// if only one still works
    // push the square of the smaller one
    // increment index


// nlogn time complexity.
// function sortedSquares(nums) {
//     return nums.map(num => num * num).sort((a,b) => a - b);
// }