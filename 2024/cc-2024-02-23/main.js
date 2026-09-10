// url: https://leetcode.com/problems/buy-two-chocolates/
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */

// Given an integer array and an amount of money
// Return the amount of money you have left after buying the two cheapest bars of chocolate.
    // but if you can't without over going over the money limit, just return money

// Example 1:

// Input: prices = [1,2,2], money = 3
// Output: 0
// Explanation: Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus, we return 0.
// Example 2:

// Input: prices = [3,2,3], money = 3
// Output: 3
// Explanation: You cannot buy 2 chocolates without going in debt, so we return 3.

var buyChoco = function([...prices], money) {
    prices.sort((a,b) => a - b);
    const remaining = money - prices[0] - prices[1]
    return remaining >= 0 ? remaining : money
};