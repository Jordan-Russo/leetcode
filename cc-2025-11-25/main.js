/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// O(n*k) version:
// create a copy of the array
// loop through the numbers to make a total
// loop while k > 0
    // loop through the numbers to find an index with the smallest number
    // subtract number's value from total
    // flip the sign on the number
    // add the new value to the total
    // reassign the index to have the new modified number
    // decrement k
// return total

var largestSumAfterKNegations = function(nums, k) {
    nums = [...nums];
    let total = nums.reduce((acc, c) => acc + c, 0);
    while(k > 0){
        let minimumIndex = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] < nums[minimumIndex]){
                minimumIndex = i;
            }
        }
        const minimum = nums[minimumIndex];
        total -= minimum + minimum;
        nums[minimumIndex] = -minimum
        k--;
    }
    return total;
};