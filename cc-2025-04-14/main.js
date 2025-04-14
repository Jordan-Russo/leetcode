// url: https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/description/
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    // intiialize largest square side at 0
    let maxSide = 0;
    // initialize count at 0
    let count = 0;
    // loop through rectangles
    for(const [l, w] of rectangles){
        // find minimum dimension
        const min = Math.min(l, w);
        // is the minimum > largest square side
            // yes
        if(min > maxSide){
            // reassign largest square side to either minimum dimension or largest square side 
            maxSide = min;
            // set count to 0
            count = 0;
        }
        // is the minimum now equal to largest square side
            // yes
        if(min === maxSide){
            // increment count
            count++;
        }
    }
    // return the count
    return count;
};
// console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]), 3);
// console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]]), 3);