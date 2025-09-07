/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n < 2){return n}
    if(n === 2){return 1}
    let a = 1;
    let b = 1;
    let c = 0;
    for(let i = 3; i <= n; i++){
        const curr = a + b + c;
        c = b;
        b = a;
        a = curr;
    }
    return a;
};