/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function(n, m, k) {
    let cost = 0;
    const overweightN = Math.max(0, n - k);
    if(overweightN){
        cost += overweightN * (n - overweightN);
    }
    const overweightM = Math.max(0, m - k);
    if(overweightM){
        cost += overweightM * (m - overweightM);
    }
    return cost
};