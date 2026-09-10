// url: https://leetcode.com/problems/coin-change-ii/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// given an array of coins
    // values must be unique and positive
// given an amount, which is a non-negative integer

// Return the number of COMBINATIONS
    // count the combinations you can make of coins that add to that amount

// combinations in each represent that you can either use a coin or skip


// start with amount and the ith coin

// if we ran out of coins, then return 1 if amount is 1, otherwise return 0

// either use the coin and call the same problem with amount - coin[i] and ith coin
// or
// skip the coin and call the same problem with amount and ith + 1 coin.

function change(amount, coins){
    if(amount === 0){return 1};
    if(coins.length === 0){return 0}
    const cache = new Array(amount + 1).fill(0);
    cache[0] = 1;
    for(const coin of coins){
        for(let i = coin; i <= amount; i++){
            cache[i] += cache[i - coin];
        }
    }
    return cache[amount]
};