// url: https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/
// given two strings representing time in a "HH:MM" format covering the range of 0-24 hours
// the first string given as current is some period of time behind the correct time given as a string
// return the minimum number of increments you need to add to the current to get the correct time.
// the following increments are legal and count as one increment per:
// 1, 5, 15, 60 minutes
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
function convertTime(current, correct){
  let count = 0
  const hours = Number(correct.slice(0,2)) - Number(current.slice(0,2))
  let minutes = Number(correct.slice(3)) - Number(current.slice(3))
  minutes += 60 * hours
  const options = [60,15,5,1]
  for(let i = 0; i < options.length; i++){
      while(minutes >= options[i]){
          minutes -= options[i]
          count++
      }
  }
  return count
};
// console.log(convertTime("02:30", "04:35"), 3)
// console.log(convertTime("11:00", "11:01"), 1)