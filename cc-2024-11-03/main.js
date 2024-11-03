// url: https://leetcode.com/problems/find-closest-number-to-zero/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
// given an array of integers, small array size greater than 0, 

// return the number that is closest to 0, Math.abs()
  // if multiple values are the closest return the greatest value (i.e. return the positive one)


  function findClosestNumber(numbers){
    let closest = numbers[0]
    for(const number of numbers){
      const currentDistance = Math.abs(number)
      const closestDistance = Math.abs(closest)
      if(closestDistance === currentDistance && closest < 0){closest = number}
      if(currentDistance < closestDistance){closest = number}
    }
    return closest
  }
  
  console.log(findClosestNumber([-4,-2,1,4, 8]), 1)
  console.log(findClosestNumber([2, -1, 1]), 1)