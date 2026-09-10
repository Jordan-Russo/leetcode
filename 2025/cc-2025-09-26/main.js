/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0;
    for(let i = 0; i < points.length - 2; i++){
        for(let j = i + 1; j < points.length - 1; j++){
            for(let k = j + 1; k < points.length; k++){
                const [xi, yi] = points[i];
                const [xj, yj] = points[j];
                const [xk, yk] = points[k];
                const area = 0.5 * Math.abs( xi*(yj-yk) + xj*(yk-yi) + xk*(yi-yj) )
                // area = 0.5 | x1 (y2 - y3) + x2 (y3 - y1) + x3 (y1- y2) |
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
};