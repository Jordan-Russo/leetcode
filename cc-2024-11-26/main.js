// url: https://leetcode.com/problems/richest-customer-wealth/description/
// given an array of subarrays, which each subarray containing all bank balances that a customer owns
  // will always pass in array of arrays, which each array containing one or more elements and the array containing one or more subarrays

// return the highest sum of money within all of the accounts of a single customer (across bank balances)

function maximumWealth(accounts){
  // initialize maximum at 0
  let maximum = 0
  // loop through each subarray
  for(const user of accounts){
    // find the total in each subarray
    const total = user.reduce((acc, c) => acc + c, 0)
    // reassign maximum if the total is greater than the current maximum
    maximum = Math.max(maximum, total)
  }
  return maximum
}

// console.log(maximumWealth([[1,2,3], [3,2,1]]), 6)
// console.log(maximumWealth([[1,5], [7,3], [3,5]]), 10)