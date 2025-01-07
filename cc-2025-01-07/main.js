// url: https://leetcode.com/problems/continuous-subarray-sum/
// given an integer array, nums
// given an integer, k
// return a boolean on whether nums has a good subarray
// a good subarray is a contiguous region of 2 or more elements where the sum is divisible by k
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k){
    let cache = {0: 0}
    let sum = 0
    for(let i = 0 ; i < nums.length; i++){
        sum = (sum + nums[i]) % k
        if(sum in cache){
            if(cache[sum] < i){return true}
        }else{
            cache[sum] = i + 1
        }
    }
    return false
};
// O(n**2) -- solution too slow
// function checkSubarraySum(nums, k){
//     const mod = n => n % k
//     let previous = mod(nums[0])
//     let seen = new Set()
//     for(let i = 1; i < nums.length; i++){
//         const curr = nums[i]
//         const newSeen = new Set()
//         for(const num of seen){
//             newSeen.add(mod(num + curr))
//         }
//         newSeen.add(mod(curr + previous))
//         if(newSeen.has(0)){return true}
//         seen = newSeen
//         previous = mod(curr)
//     }
//     return false
// };
// *having a 0 in a prefix sum scan would mean there is a continous subarray sum
// console.log(checkSubarraySum([23,2,4,6,7], 6), true)
// [1,5,5,0]
// console.log(checkSubarraySum([23,2,6,4,7], 6), true)
// [1,1,5,0]
// console.log(checkSubarraySum([23,2,6,4,7], 13), false)
// [12,5,9,3]