// url: https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/

// You are given an integer array prices representing the daily price history of a stock
// A smooth descent is one or more contiguous days such that the price on each day is lower than the price on the preceding day by exactly 1

// Return the number of smooth descent periods.

// Example 1:

// Input: prices = [3,2,1,4]
// Output: 7
// Explanation: There are 7 smooth descent periods:
// [3], [2], [1], [4], [3,2], [2,1], and [3,2,1]
// Note that a period with one day is a smooth descent period by the definition.
// Example 2:

// Input: prices = [8,6,7,7]
// Output: 4
// Explanation: There are 4 smooth descent periods: [8], [6], [7], and [7]
// Note that [8,6] is not a smooth descent period as 8 - 6 ≠ 1.
// Example 3:

// Input: prices = [1]
// Output: 1
// Explanation: There is 1 smooth descent period: [1]
/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let periodCount = 0
    let consecutiveDays = 0
    for(let day = 0; day < prices.length; day++){
        if(prices[day - 1] - prices[day] === 1){
            consecutiveDays++
        }else{
            consecutiveDays = 0
        }
        periodCount += 1 + consecutiveDays
    }
    return periodCount
};