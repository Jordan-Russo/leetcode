// url: https://leetcode.com/problems/points-that-intersect-with-cars/

/**
 * @param {number[][]} nums
 * @return {number}
 */

// Loop through each range of numbers, within each subarray
    // Add them into set
// Return the size of the set

var numberOfPoints = function(nums) {
  let intersections = new Set()
  for(const [start, end] of nums){
      for(let i = start; i <= end; i++){
          intersections.add(i)
      }
  }
  return intersections.size
};