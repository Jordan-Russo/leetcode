// url: https://leetcode.com/problems/find-k-closest-elements/description/
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// Given a sorted integer array, two integers (k and x)

// Return an array containing all the kth closest integers to x, sorted by increasing order
// if two values are equally close, the one with a smaller index will be closer

var findClosestElements = function(arr, k, x) {
  // make two points at the ends of the array
  let left = 0
  let right = arr.length
  // keep looping until inclusive distance is equal to 1
  while(right - left > k){
      const isRightCloser = Math.abs(arr[right - 1] - x) < Math.abs(arr[left] - x)
      if(isRightCloser){
          left++
      }else{
          right--
      }
      // move the end that is further from x
          // if equal move the right pointer to the left
          // if unequal and left pointer is further away from x, move left pointer to the right
  }
  // return an array starting from left and including the right index
  return arr.slice(left, right)
};

console.log(findClosestElements([1,2,3,4,5], 4, 3), [1,2,3,4])
console.log(findClosestElements([1,1,2,3,4,5], 4, -1), [1,1,2,3])