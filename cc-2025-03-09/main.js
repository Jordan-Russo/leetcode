// url: https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/
// given an integer array of hours
// say how many pairs of indexes can be chosen to be sumed up together and form a complete amount of days (with no remainder hours)
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    // initialize a paircount at 0
    let pairCount = 0;
    // loop through every option
    for(let i = 0; i < hours.length; i++){
        for(let j = i + 1; j < hours.length; j++){
            // sum the options
            // if the sum of hours only forms days, increment count
            const sum = hours[i] + hours[j];
            const isCompleteDay = sum % 24 === 0;
            if(isCompleteDay){pairCount++;}
        }
    }
    // return pair count
    return pairCount;
};
// console.log(countCompleteDayPairs([12,12,30,24,24]), 2);
// console.log(countCompleteDayPairs([72,48,24,3]), 3);