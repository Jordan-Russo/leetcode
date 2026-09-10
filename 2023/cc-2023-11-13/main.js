// url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

// Loop through the values, keeping track of:
// max
// buy and sell date
    // both initialized to the first day
// When the prev value is greater than the current value
// we check the profit and reassign
// if the prev is lower than the buy amount
// reassign the buy date

// always update the selling date
var maxProfit = function(prices) {
    let maxExpectedProfit = 0
    let buyDate;
    let sellDate;
    if(prices.length > 0){
        buyDate = 0
        sellDate = 0
    }
    for(let i = 1; i <= prices.length; ++i){
        const prev = prices[i - 1]
        const curr = prices[i] || 0
        if(curr < prev || i === prices.length){
            maxExpectedProfit = Math.max(maxExpectedProfit, prices[sellDate] - prices[buyDate])
            if(curr < prices[buyDate]){
                buyDate = i
            }
        }
        sellDate = i
    }
    return maxExpectedProfit
};