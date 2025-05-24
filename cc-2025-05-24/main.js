// given a non-negative integer array, nums
// return the smallest index, where the digit sum of nums[i] === i, otherwise -1
/**
 * @param {number[]} nums
 * @return {number}
 */
function smallestIndex(nums){
    // loop through nums
    for(let i = 0; i < nums.length; i++){
        // calculate digit sum of nums[i]
        // if digit sum === i
            // return i
        if(digitSum(nums[i]) === i){return i}
    }
    // return -1
    return -1;
};
function digitSum(n){
    let sum = 0;
    while(n > 0){
        const digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
// console.log(smallestIndex([1,3,2]), 2);
// console.log(smallestIndex([1,10,11]), 1);
// console.log(smallestIndex([1,2,3]), -1);