/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let taxes = 0;
    let start = 0;
    for(let [amount, rate] of brackets){
        const range = amount - start;
        if(income === 0){break}
        const min = Math.min(range, income);
        taxes += min * rate / 100;
        income -= min;
        start = amount;
    }
    return taxes;
};