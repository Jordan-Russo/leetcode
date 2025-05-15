// given intger array, nums, positive integers only, never empty
// then check all the possible pairs of integers, x and y that we can find in the array such that they are "strong"
    // absolute value(x - y) <= min(x,y), x and y can be the same integer
    // the index of x and y must be x <= y
// then from the strong pairs, calculate the maximum XOR value and return the largest XOR from the pairs.

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumStrongPairXor(nums){
    // initialize max at 0
    let max = 0;
    // loop through every pair combination (no self pairs)
    for(let i = 0; i < nums.length; i++){
        const a = nums[i];
        for(let j = i + 1; j < nums.length; j++){
            // if a strong pair calculate the XOR and assign it if larger then max
            const b = nums[j];
            const isStrong = Math.abs(a - b) <= Math.min(a,b);
            if(isStrong){max = Math.max(max, a ^ b);}
        }
    }
    // return max
    return max;
};
// console.log(maximumStrongPairXor([1,2,3,4,5]),7);
// console.log(maximumStrongPairXor([10,100]),0);
// console.log(maximumStrongPairXor([5,6,25,30]),7);