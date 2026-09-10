// url: https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

/**
 * @param {number} num
 * @return {number}
 */
// given an integer, return the number of those digits that can divide the number

// given an integer, positive integer

// return the number of digits in that number that can divide it, 0 can't be a digit
// might be useful to keep track of what digits work or not

function countDigits(number){
  let count = 0
  let current = number
  while(current){
    const digit = current % 10;
    if(number % digit === 0){count++}
    current = Math.trunc(current / 10)
  }
  return count
}

console.log(countDigits(7), 1)
console.log(countDigits(121), 2)
console.log(countDigits(1248), 4)