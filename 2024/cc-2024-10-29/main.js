// url: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

// given an integer array, given an integer, k, return the number of pairs where the absolute difference between two indexes is going to be equal the given integer.

// absolute difference Math.abs(nums[i] - nums[j]) === k

// Given array, always going to have numbers, it's not going to empty, only going to be numbers, only integers, only positive numbers

// given k, integer, always integer, always be passed in, always positive

// return a count of the valid pairs of indexes
// returning a number, always a number, return it from the function
// can have no valid pairs
  // where a valid pair would result in this expression being true
    // Math.abs(nums[i] - nums[j]) === k


const countKDifference = (nums, k) => {
let count = 0;
for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
    if(Math.abs(nums[i] - nums[j]) === k){count++;}
    }
}
return count;
}
    
console.log(countKDifference([1,2,2,1], 1), 4);
console.log(countKDifference([3,2,1,5,4], 2), 3);
console.log(countKDifference([1,3], 3), 0);