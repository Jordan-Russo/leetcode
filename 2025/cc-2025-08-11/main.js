/**
 * @param {number[]} salary
 * @return {number}
 */
// given an array of unique integers, each representing a salary
    // minimum size of salary array is 3
// return the average salary found, excluding the maximum and minimum values from the calculations
var average = function(salary) {
    // find the sum of all the elements
    let sum = salary.reduce((acc,c) => acc + c, 0);
    // subtract the min and max from the salary
    sum -= Math.min(...salary);
    sum -= Math.max(...salary);
    // divide the remaining sum by the #of salaries - 2
    const average = sum / (salary.length - 2);
    // return the modified average
    return average;
};
// console.log(average([4000,3000,1000,2000]), 2500);
// console.log(average([1000,2000,3000]), 2000);