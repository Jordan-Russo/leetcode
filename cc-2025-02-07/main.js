// url: https://leetcode.com/problems/day-of-the-year/
// given a string date, formatted in YYYY-MM-DD
//return the day number of the year that it was in.
/**
 * @param {string} date
 * @return {number}
 */
function dayOfYear(date){
    // one date at the beginning of the date's year
    const year = date.split('-')[0];
    const startingDate = new Date(`${year}-01-01`);
    const givenDate = new Date(date);
    // subtract the given date by the year's starting date
    const differenceTime = givenDate - startingDate;
    // turn the ms difference into days
    const dayDifference = ((((differenceTime/1000)/60)/60)/24);
    // add 1 to the days
    const dayFromStartOfYear = 1 + dayDifference;
    // return days
    return dayFromStartOfYear;
};
// console.log(dayOfYear("2019-01-09"), 9);
// console.log(dayOfYear("2019-02-10"), 41);