/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonalLength = 0;
    let maxArea = 0;
    for(const [l, w] of dimensions){
        const diagonalLength = Math.sqrt(l * l + w * w);
        const area = l * w
        if(diagonalLength === maxDiagonalLength){
            if(area > maxArea){
                maxDiagonalLength = diagonalLength;
                maxArea = area;
            }
        }else if(diagonalLength > maxDiagonalLength){
            maxDiagonalLength = diagonalLength;
            maxArea = area;
        }
    }
    return maxArea;
};