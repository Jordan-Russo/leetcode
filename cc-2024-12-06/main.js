// url: https://leetcode.com/problems/count-days-spent-together/
// Alice and Bob are traveling to Rome for separate business meetings.

// You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob. Alice will be in the city from the dates arriveAlice to leaveAlice (inclusive), while Bob will be in the city from the dates arriveBob to leaveBob (inclusive). Each will be a 5-character string in the format "MM-DD", corresponding to the month and day of the date.

// Return the total number of days that Alice and Bob are in Rome together.

// You can assume that all dates occur in the same calendar year, which is not a leap year. Note that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

 

// Example 1:

// Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
// Output: 3
// Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.

// Example 2:

// Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
// Output: 0
// Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.

 

// Constraints:

//     All dates are provided in the format "MM-DD".
//     Alice and Bob's arrival dates are earlier than or equal to their leaving dates.
//     The given dates are valid dates of a non-leap year.


/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  // grab alice arrive month and day and leave month and day as numbers
  let [aliceArriveMonth, aliceArriveDay] = arriveAlice.split('-').map(Number)
  let [aliceLeaveMonth, aliceLeaveDay] = leaveAlice.split('-').map(Number)
  // grab bob arrive month and day and leave month and day as numbers
  let [bobArriveMonth, bobArriveDay] = arriveBob.split('-').map(Number)
  let [bobLeaveMonth, bobLeaveDay] = leaveBob.split('-').map(Number)
  // initialize a counter at 0
  let counter = 0
  for(let month = 0; month < 12; month++){
      for(let day = 0; day < daysInMonths[month]; day++){

          let isAliceVisiting = aliceArriveMonth - 1 <= month && aliceLeaveMonth - 1 >= month
          if(aliceArriveMonth - 1 === month && day < aliceArriveDay - 1){
              isAliceVisiting = false
          }
          if(aliceLeaveMonth - 1 === month && day > aliceLeaveDay - 1){
              isAliceVisiting = false
          }

          let isBobVisiting = bobArriveMonth - 1 <= month && bobLeaveMonth - 1 >= month 
          if(bobArriveMonth - 1 === month && day < bobArriveDay - 1){
              isBobVisiting = false
          }
          if(bobLeaveMonth - 1 === month && day > bobLeaveDay - 1){
              isBobVisiting = false
          }
          if(isAliceVisiting && isBobVisiting){counter++
          }
      }
  }
  // return the counter
  return counter
};
// Example 1:

// Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
// Output: 3
// Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.

// Example 2:

// Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
// Output: 0
// Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.
