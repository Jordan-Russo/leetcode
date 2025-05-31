/**
 * @param {number[]} nums
 * @return {number[]}
 */
// given an array of numbers, nums
    // each is an integer, length > 0
// return a subsequence of an array that has the sum of its elements larger than the sum of the other elements in the array
    // must also prioritize having the smallest number of elements and the largest of each possible
var minSubsequence = function(nums) {
    // calculate the sum of nums, initialized as total
    const total = nums.reduce((acc, c) => acc + c, 0);
    // initialize sum at 0
    let sum = 0;
    // do a descending sort of nums
    const sorted = nums.toSorted((a,b) => b - a);
    // create a result array
    const result = [];
    // loop through the sorted nums
    for(const num of sorted){
        // add current value to sum
        sum += num;
        // push the current value into the result array
        result.push(num);
        // check if sum > total - sum
            // if so return the result array
        if(sum > total - sum){return result}
    }
};
// console.log(minSubsequence([4,3,10,9,8]),[10,9]);
// console.log(minSubsequence([4,4,7,6,7]),[7,7,6]);