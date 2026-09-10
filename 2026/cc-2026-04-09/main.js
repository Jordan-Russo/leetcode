/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function([a,b,c]){
    if(Math.max(a,b,c) >= a + b + c - Math.max(a,b,c)){return 'none'}
    if(a === b && a === c){return 'equilateral'}
    if(a === b || a === c || b === c){return 'isosceles'}
    return 'scalene';
};