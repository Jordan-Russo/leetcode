// url: https://leetcode.com/problems/calculate-delayed-arrival-time/
// given the expected arrival time in hours and a delay time in hours (24hr format)
// return the time that the arrival actually occurs in (24hr format)
/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    // sum the times from arrival and delay
    const sum = arrivalTime + delayedTime
    // turn that time into a 24hr format
    const actual = sum % 24;
    // return the actual arrival time
    return actual;
};
// console.log(findDelayedArrivalTime(15,5), 20);
// console.log(findDelayedArrivalTime(13,11), 0);