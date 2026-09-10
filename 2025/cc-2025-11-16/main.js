/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function([r1x1, r1y1, r1x2, r1y2], [r2x1, r2y1, r2x2, r2y2]){
    // check for point overlap between the x values and y values
    const xMin = r1x1 < r2x1 || r1x1 < r2x2;
    const xMax = r1x2 > r2x1 || r1x2 > r2x2;
    const yMin = r1y1 < r2y1 || r1y1 < r2y2;
    const yMax = r1y2 > r2y1 || r1y2 > r2y2;
    // check if all four range flags are true
    // if so they are either overlapped partial or entirely
    // edge case if the rectangles are the same
    const isSame = r1x1 === r2x1 && r1y1 === r2y1 && r1x2 === r2x2 && r1y2 === r2y2;
    return xMin && xMax && yMin && yMax;
};