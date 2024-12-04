// url: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
// given an array of unorded points on a graph, return the longest width between two adjacent points
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  const sortedHorizontalPoints = points.map(([x]) => x).sort((a,b) => a - b)
  let widestArea = -Infinity
  for(let i = 1; i < points.length; i++){
      const curr = sortedHorizontalPoints[i]
      const prev = sortedHorizontalPoints[i - 1]
      widestArea = Math.max(widestArea, curr - prev)
  }
  return widestArea
};

// console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]), 1)
// console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]), 3)