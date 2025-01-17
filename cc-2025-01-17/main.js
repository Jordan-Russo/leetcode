// url: https://leetcode.com/problems/sum-of-all-subset-xor-totals/
// given an array of integers
// return the XOR sum total of all subsets that can be made using the array
/**
 * @param {number[]} nums
 * @return {number}
 */
function subsetXORSum(nums){
    // have a sum
    let sum = 0 
    subsets([], 0)
    // recursively find each subset
    function subsets(subset, position){
        // use current position
        if(position === nums.length){
            // if you reach the end, take the XOR of the subset and all it to the sum
            const subsetXOR = subset.reduce((acc,c) => acc ^ c, 0)
            sum += subsetXOR
        }else{
            const newSubset = [...subset, nums[position]]
            // create two paths where you include or exclude a value each time you look through the nums and increment the position
            position++
            subsets(subset, position)
            subsets(newSubset, position)
        }
    }
    // return the XOR sum
    return sum
};
// console.log(subsetXORSum([1,3]), 6)
// console.log(subsetXORSum([5,1,6]), 28)
// console.log(subsetXORSum([3,4,5,6,7,8]), 480)