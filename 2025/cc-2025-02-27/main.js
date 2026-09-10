// url: https://leetcode.com/problems/count-largest-group/
// given an positive integer, n
// group each number by the sum of its digits, going from 1 to n
// return the amount of groups that have the most numbers in them
/**
 * @param {number} n
 * @return {number}
 */
function countLargestGroup(n){
    // initialize a digitSumFrequency
    const digitSumFrequency = {};
        // stores how often a digitSum was found
    // loop through numbers 1 to n (inclusive)
    for(let i = 1; i <= n; i++){
        // find the sum of digits
        const sum = digitSum(i);
        // add it to the digitSumFrequency
        digitSumFrequency[sum] = digitSumFrequency[sum] + 1 || 1;
    }
    // loop through the values of digitSumFrequencies
    let max = 0;
    let count = 0;
    for(const key in digitSumFrequency){
        const val = digitSumFrequency[key];
        // find the biggest value, and record how many other frequencies have that value
        if(val > max){
            count = 1;
            max = val;
        }else if(val === max){
            count++;
        }
    }
    // return the amount of times the biggest value was seen
    return count;
};
function digitSum(n){
    let sum = 0;
    while(n > 0){
        const digit = n % 10;
        sum += digit;
        n = Math.trunc(n / 10);
    }
    return sum;
}
console.log(countLargestGroup(13), 4);
console.log(countLargestGroup(2), 2);