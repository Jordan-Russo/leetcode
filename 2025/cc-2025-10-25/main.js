/**
 * @param {number} n
 * @return {number}
 */
// given an positive integer n, return the number of completed staircase levsls you can build
function arrangeCoins(n) {
    // initialize a sum at 0
    let sum = 0;
    // initialize a count at 0
    let count = 0;
    // loop while incrementing the count, until the sum > n
    while(sum <= n){
        // add the count (after incremented to the sum)
        count++;
        sum += count;
    }
    // return the count - 1
    return count - 1;
};
// 5 -> 2
// console.log(arrangeCoins(5), 2);
// 8 -> 3
// console.log(arrangeCoins(8), 3);

// 5  = (x**2 + x) / 2
// 10 = x(x + 1)
// x**2 + x - 10 = 0