// url: https://leetcode.com/problems/semi-ordered-permutation/
/**
 * @param {number[]} nums
 * @return {number}
 */
// given an array of integers
  // all values unique in the range of 1 to n, n being the length of the array

// return the number of adjacent number swaps needed to make the array 
  // "semi-ordered" is:
    // the first element is 1
    // the last element is n

    function semiOrderedPermutation(nums){
      let swapCount = 0
      // calculate the distance of 1 to index 0
      let startIndex = nums.indexOf(1)
      // add that to a count
      swapCount = startIndex
      // calculate the distance of n to index n - 1
      let endIndex = nums.indexOf(nums.length)
      // if it comes before 1, reduce 1 from distance
      if(endIndex < startIndex){endIndex++}
      swapCount += nums.length - 1 - endIndex
      return swapCount
    }
    
    // console.log(semiOrderedPermutation([2,1,4,3]), 2)
    // console.log(semiOrderedPermutation([2,4,1,3]), 3)