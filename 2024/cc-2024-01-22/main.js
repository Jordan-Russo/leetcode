// url: https://leetcode.com/problems/max-consecutive-ones/
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function(nums) {
  let curr = 0
  let max = 0
  for(const num of nums){
      if(num){
          curr++
      }else{
          max = Math.max(curr, max)
          curr = 0
      }
  }
  return Math.max(curr, max)
};