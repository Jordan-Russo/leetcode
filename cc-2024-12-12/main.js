// url: https://leetcode.com/problems/maximum-69-number/
// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// given a positive integer
  // consists only of digits 6 and 9

// return the maximum new integer I can create by changing at most one 6 into one 9 or vise versa

function maximum69Number(num){
    // scan the number left to right
    let stringNum = String(num)
    let newStringNumber = ''
    for(let i = 0; i < stringNum.length; i++){
      if(stringNum[i] === '6'){
        newStringNumber += `9${stringNum.slice(i + 1)}`
        break;
      }else{
        newStringNumber += stringNum[i]
      }
    }
      // at most changing the first 6 digit into a 9 if there is one
      // doing no other changes
    // return the new number
    return Number(newStringNumber)
  }
  
  // console.log(maximum69Number(9669), 9969)
  // console.log(maximum69Number(9996), 9999)
  // console.log(maximum69Number(9999), 9999)
  
  
  // Example 1:
  
  // Input: num = 9669
  // Output: 9969
  // Explanation: 
  // Changing the first digit results in 6669.
  // Changing the second digit results in 9969.
  // Changing the third digit results in 9699.
  // Changing the fourth digit results in 9666.
  // The maximum number is 9969.
  
  // Example 2:
  
  // Input: num = 9996
  // Output: 9999
  // Explanation: Changing the last digit 6 to 9 results in the maximum number.
  
  // Example 3:
  
  // Input: num = 9999
  // Output: 9999
  // Explanation: It is better not to apply any change.
  