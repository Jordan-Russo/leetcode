/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
    const nums = new Map();
    while(n > 0){
        const digit = n % 10;
        nums.set(digit, nums.get(digit) + 1 || 1);
        n = Math.trunc(n / 10);
    } 
    let num;
    let minFreq;
    for(const [key, value] of nums){
        let toUpdate = false;
        if(num === undefined || value < minFreq){toUpdate = true}
        if(value === minFreq && key < num){toUpdate = true}
        if(toUpdate){
            num = key;
            minFreq = value;
        }
    }
    return num;
};