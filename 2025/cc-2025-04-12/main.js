// url: https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/?envType=daily-question&envId=2025-04-08
// given an array of positive integers
// return how many times you need to remove the 3 or less front-most elements from the array so that there are only distinct numbers, a non-negative integer
/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums){
    // loop from the back until you find a repeated element that is not distinct, and record the index
    const seen = new Set();
    let duplicatePos = -1;
    for(let i = nums.length - 1; i >= 0; i--){
        // if we've seen it before
        if(seen.has(nums[i])){
            // record index and break
            duplicatePos = i;
            break;
        }
        // if not, add to seen
        else{
            seen.add(nums[i]);
        }
    }
    // if no repeat was found return 0
    if(duplicatePos === -1){return 0;}
    // if a repeat was return (foundIndex + 1)/3 rounded up
    else{return Math.ceil((duplicatePos + 1) / 3);}
};
// console.log(minimumOperations([1,2,3,4,2,3,3,5,7]), 2);
// console.log(minimumOperations([4,5,6,4,4]), 2);
// console.log(minimumOperations([6,7,8,9]), 0);