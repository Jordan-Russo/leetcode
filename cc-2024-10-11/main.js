// url: https://leetcode.com/problems/coin-change/
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0){return 0}
    const cache = new Array(amount + 1).fill(Infinity);
    cache[0] = 0;
    for(const coin of coins){
        for(let i = coin; i <= amount; i++){
            cache[i] = Math.min(cache[i], 1 + cache[i - coin]);
        }
    }
    return cache[amount] === Infinity ? -1 : cache[amount];
};