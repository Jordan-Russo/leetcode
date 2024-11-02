// url: https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

// Given an array of numbers Return an array containings the two duplicated numbers

// Given an array, it'll never be empty, it'll always contain at least 4 numbers, and contain numbers 0, n -1 (where n is 2 less than the length of the array), the duplicated numbers will never be the same ones

// return an array, contain the two duplicates numbers, in any order

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getSneakyNumbers(nums){
  const seen = new Set()
  const sneakyNumbers = []
  for(const num of nums){
      if(seen.has(num)){
          sneakyNumbers.push(num);
          if(sneakyNumbers.length === 2){break;}
      }else{
          seen.add(num)
      }
  }
  return sneakyNumbers
};

console.log(getSneakyNumbers([0,1,1,0]), [0, 1])
console.log(getSneakyNumbers([0,3,2,1,3,2]), [3,2])
console.log(getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2]), [4,5])