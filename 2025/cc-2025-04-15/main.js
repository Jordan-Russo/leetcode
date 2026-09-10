// url: https://leetcode.com/problems/count-symmetric-integers/?envType=daily-question&envId=2025-04-11
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const findDigitCount = n => {
    let count = 0;
    while(n > 0){
        n = Math.trunc(n / 10);
        count++;
    }
    return count;
}
const isSymmetric = (n, digitCount) => {
    let half = digitCount / 2;
    let sum = 0;
    while(n > 0){
        const digit = n % 10;
        if(digitCount > half){
            sum += digit;
        }else{
            sum -= digit;
        }
        digitCount--;
        n = Math.trunc(n / 10);
    }
    return sum === 0;
}
const countSymmetricIntegers = function(low, high) {
    let count = 0;
    for(let i = low; i <= high; i++){
        const digitCount = findDigitCount(i);
        const hasOddDigitCount = digitCount & 1;
        if(hasOddDigitCount){
            continue;
        }
        if(isSymmetric(i, digitCount)){
            count++;
        }
    }
    return count;
};
// console.log(countSymmetricIntegers(1, 100), 9);
// console.log(countSymmetricIntegers(1200, 1230), 4);