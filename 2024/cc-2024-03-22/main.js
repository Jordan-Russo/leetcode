// url: https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/
// Given a budget, and the cost of two items
// Return all the unique combinations of items you could buy with your budget.
// Example 1:

// Input: total = 20, cost1 = 10, cost2 = 5
// Output: 9
// Explanation: The price of a pen is 10 and the price of a pencil is 5.
// - If you buy 0 pens, you can buy 0, 1, 2, 3, or 4 pencils.
// - If you buy 1 pen, you can buy 0, 1, or 2 pencils.
// - If you buy 2 pens, you cannot buy any pencils.
// The total number of ways to buy pens and pencils is 5 + 3 + 1 = 9.
// Example 2:

// Input: total = 5, cost1 = 10, cost2 = 10
// Output: 1
// Explanation: The price of both pens and pencils are 10, which cost more than total, so you cannot buy any writing utensils. Therefore, there is only 1 way: buy 0 pens and 0 pencils.
/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    // keep a combination count starting at 0
    // loop through, start by buying 0 of one of the items and figure out how many of the other item you could buy
        // add buying none of them as an option and add them to the count
    // return the combination count
    let combinationCount = 0
    while(total >= 0){
        const combinations = Math.trunc(total / cost2) + 1
        combinationCount += combinations
        total -= cost1
    }
    return combinationCount
};