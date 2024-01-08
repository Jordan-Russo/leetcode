// url: https://leetcode.com/problems/valid-boomerang/
// Always given 3 points on a graph
// Return whether or not those points are all distinct and not in a straight line
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  // plot points into a set
  // if size is less than 3 return false
  // then determine slope between point1 and 2
  // return whether slope is equal to point1 and 3
  // function for determining slope
  // m = y2 - y1   /   x2 - x1
  const visited = new Set()
  points.forEach(cache);
  if(visited.size < 3){
      return false
  }
  const [first, second, third] = points
  console.log(slope(first, second), slope(first, third))
  return slope(first, second) !== slope(first, third)
  function cache([x, y]){
      visited.add(`${x}:${y}`)
  }
  function slope([initialX, initialY], [currentX,currentY]){
      const slope = (currentY - initialY) / (currentX - initialX)
      return isFinite(slope) ? slope : Math.abs(slope)
  }
};