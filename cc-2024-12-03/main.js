// url: https://leetcode.com/problems/find-k-th-smallest-pair-distance/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// given an integer array (non-negative)
// return the kth smallest difference amoung all valid pairs (not repeating pair indexes)

function smallestDistancePair([...nums], k){
    // sorting the nums array
    nums.sort((a,b) => a - b)
    // define the possible rage of kth difference
    let left = 0
    let right = nums[nums.length - 1] - nums[0]
    let middle;
    // use binary search to narrow our scope
    while(left < right){
      middle = Math.floor((left + right) / 2)
      let count = 0
      // each time we'll use sliding window to find out how many pairs are greater than or equal to the middle guess of the remaining possible range
      let start = 0
      for(let end = 1; end < nums.length; end++){
          while(nums[end] - nums[start] > middle){start++}
          count += end - start
      }
      // if the number of pairs <= guess is too small increase range
      if(count < k){left = middle + 1}
      // if the number of pairs <= guess is too large decrease range
      else{right = middle}
      // find the difference that has the smallest number of pairs >= k
    }
        // return that difference
        return right
  }
  
  // console.log(smallestDistancePair([1,3,1], 1), 0)
  // console.log(smallestDistancePair([1,1,1], 2), 0)
  // console.log(smallestDistancePair([1,6,1], 3), 5)