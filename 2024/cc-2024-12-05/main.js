// url: https://leetcode.com/problems/number-of-days-between-two-dates/
// given two string dates
// return the number of days between those two dates
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
function daysBetweenDates(date1, date2){
  // turn both values into number dates
  const time1 = Number(new Date(date1))
  const time2 = Number(new Date(date2))
  // find the absolute difference in ms
  const elapsedTime = Math.abs(time1 - time2)
  // convert the ms into days
  const elapsedDays = elapsedTime / (1000 * 60 * 60 * 24)
  return elapsedDays
};

// console.log(daysBetweenDates("2019-06-29", "2019-06-30"), 1)
// console.log(daysBetweenDates("2020-01-15", "2019-12-31"), 15)