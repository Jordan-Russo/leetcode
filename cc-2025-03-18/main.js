// url: https://leetcode.com/problems/finding-3-digit-even-numbers/description/
// given an integer array, where each number is a digit (0-9)
// find all the unique integers
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let uniques = new Set();
    for(let i = 0; i < digits.length; i++){
        for(let j = 0; j < digits.length; j++){
            for(let k = 0; k < digits.length; k++){
                if(i === j || i === k || j === k || digits[i] === 0){continue;}
                const number = Number(digits[i] * 100 + digits[j] * 10 + digits[k]);
                uniques.add(number);
            }
        }
    }
    return [...uniques].filter(num => num % 2 === 0).sort((a,b) => a - b);
};