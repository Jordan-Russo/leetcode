/**
 * @param {number} num
 * @return {number}
 */
// given a positive integer
// return the smallest sum that can be made using the digits in any order after splitting it in two
// if a number can't be split (1 digit then return it)
function splitNum(num){
    // initialize a cache for the numbers, array 0-9
    const cache = new Array(10).fill(0);
    // loop through the digits of num
        // record how many of each digit is in num
    while(num > 0){
        const digit = num % 10;
        cache[digit]++;
        num = Math.trunc(num / 10);
    }
    let a = 0;
    let b = 0;
    // form the two split nums that have the smallest sum
    // left pointer and a right pointer
    let left = 0;
    let isLoopingA = true;
    // loop while left <= right
    while(left <= 9){
        // while cache left === 0
        while(cache[left] === 0){
            // increase left
            left++;
        }
        // break if left > right
        if(left > 9){break;}
        if(isLoopingA){
            a = a * 10 + left;
        }else{
            b = b * 10 + left;
        }
        // work on the other split number
        isLoopingA = !isLoopingA;
        // decrease cache left
        cache[left]--;
    }
    
    // return the smallest split sum
    return a + b;
};
// console.log(splitNum(4325), 59);
// console.log(splitNum(687), 75);