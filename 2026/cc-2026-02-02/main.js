/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function(n) {
    // every value of (2^x) - 1, where it's <= n
    let x = 0;
    while(findNthMonobit(x) <= n){
        x++;
    }
    return x;
};
function findNthMonobit(n){
    return 2**n - 1;
}