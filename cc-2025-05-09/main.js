// url: https://leetcode.com/problems/count-operations-to-obtain-zero/
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
// given two non-negative integers, num1 and num2, either of them could be 0
// number of operations required to make either num1 or num2 be equal to 0, 0 or more
// process for each step/operation is that num2 =< num1, num1 = num1 - num2
// and in any other case num2 = num2 - num1
function countOperations(num1, num2){
    // check if either number is 0
    if(num1 === 0 || num2 === 0){
        // if so return 0
        return 0;
    }
    // check if numbers are equal to each other
    if(num1 === num2){
        // if so return 1
        return 1;
    }
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    const quotient = Math.floor(max / min);
    // if max % min === 0
    if(max % min === 0){
        // return quotient
        return quotient;
    }
    let count = 0;
    while(num1 > 0 && num2 > 0){
        if(num2 > num1){
            num2 -= num1;
        }else{
            num1 -= num2
        }
        count++;
    }
    return count;
};
// console.log(countOperations(2,4), 2);
// console.log(countOperations(10,10), 1);
// console.log(countOperations(0,10), 0);
// console.log(countOperations(2,5), 4);

// console.log(countOperations(3,7), 5);
// console.log(countOperations(7,13), 8);
// console.log(countOperations(2,3), 3);
// console.log(countOperations(79, 68), 14);