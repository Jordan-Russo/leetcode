// url: https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/
/**
 * @param {string} s
 * @return {number}
 */
// given a string that has a mix of "E" and "L" characters
// "E" representing a person entering the room and taking a seat
// "L" representing a person leaving the room
// assuming the room is empty during the start
// return the minimum needed seats so that a chair will always be available to people
function minimumChairs(s){
  // initalize one count for current chairs needed
  let curr = 0
  // initialize another count for maximum chairs needed at one time
  let max = 0
  // loop through each action in the string
  for(const action of s){
      // if someone is entering, increase current chair count, reassign max chair count
      if(action === 'E'){
          curr++
          max = Math.max(max, curr)
      }
      // if someone is leaving, decrease current chair count
      else{
          curr--
      }
  }
  // return the max chair count
  return max
};
// console.log(minimumChairs("EEEEEEE"), 7)
// console.log(minimumChairs("ELELEEL"), 2)