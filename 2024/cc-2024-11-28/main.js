// url: https://leetcode.com/problems/minimum-operations-to-collect-elements/

// given an array of positive integers and an integer,k
  // can have repeats
  // won't be empty
  // will always contain at least 1 through k (inclusive) as integers

// return the minimum number of operations needed to collect all the elements from 1 to k
  // operations are removing the last element of an array and adding it to a collection

function minOperations(nums, k){
  // make a counter initialized at 0
    let count = 0
  // make a set to hold all the numbers from 1 to k
    let seenInRange = new Set()
    // starting empty
  // loop backwards
    for(let i = nums.length - 1; i >= 0; i--){
    // increment counter
      count++
    // check whether element is <= k
      if(nums[i] <= k){
      // if so add it to set
        seenInRange.add(nums[i])
      }
    // check whether set length is equal to needed elements (size of k)
      if(seenInRange.size === k){
      // return counter
        return count
      }
    }
  }