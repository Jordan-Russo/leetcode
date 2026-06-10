/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, targetDigit) {
    let count = 0;
    for(let num of nums){
        while(num > 0){
            const digit = num % 10;
            if(targetDigit === digit){count++}
            num = (num - digit) / 10;
        }
    }
    return count;
};