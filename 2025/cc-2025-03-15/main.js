// url: https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/description/
// given an array of positive integers, where each integer can appear only once or twice
// return the bitwise XOR sum of only all the numbers that appear twice
/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    // initialize the XOR sum at 0
    let sumXOR = 0;
    // have a set that shows what numbers you've seen before
    const seen = new Set();
    // loop through the numbers
    for(const num of nums){
        // if you've seen the number before
        if(seen.has(num)){
            // XOR the current sum
            sumXOR ^= num;
        }
        // if not
        else{
            // add the number into the seen set
            seen.add(num);
        }
    }
    // return the XOR sum
    return sumXOR;
};
// console.log(duplicateNumbersXOR([1,2,1,3]), 1);
// console.log(duplicateNumbersXOR([1,2,3]), 0);
// console.log(duplicateNumbersXOR([1,2,2,1]), 3);