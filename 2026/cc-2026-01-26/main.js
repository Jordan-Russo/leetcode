/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSum(nums) {
    const cache = {};
    let result = -1;
    // loop through numbers
    for(const num of nums){
        // find the largest digit in each number
        const key = largestDigit(num);
        // store numbers with their largest digit as the key
        cache[key] ??= [];
        cache[key].push(num);
        cache[key].sort((a,b) => b - a);
        // descending sort
        if(cache[key].length === 3){
            cache[key].pop();
        }
        // only store the two largest for each digit key
    }
    // loop through all the keys
    for(const key in cache){
        // skip ones with less then 2 numbers
        if(cache[key].length === 1){continue}
        // find the largest pair sum
        const pairSum = cache[key][0] + cache[key][1];
        result = Math.max(result, pairSum);
    }
    // return the largest pair sum, otherwise -1
    return result;
};
function largestDigit(num){
    let maxDigit = 0;
    while(num > 0){
        const digit = num % 10;
        maxDigit = Math.max(digit, maxDigit);
        num = Math.trunc(num / 10);
    }
    return maxDigit;
}