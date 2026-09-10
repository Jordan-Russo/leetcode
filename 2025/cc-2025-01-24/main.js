// url: https://leetcode.com/problems/minimum-time-visiting-all-points/
// Given an array of points
// Return the amount of time it takes to travel to each point inorder starting from the first point
// each second you can move horizontal / vertical by one unit or horizontal and vertical by one unit.
/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points){
    // initialize a totalTime
    let totalTime = 0
    // initialize current position as starting position using points[0]
    let [currX, currY] = points[0]
    // loop from points[1] onwards
    for(let i = 1; i < points.length; i++){
        // find the absolute difference in x and y coordinates for current position
            // change in x and change in y
        // use them to figure out how many seconds it'll take to get to the next point
            // how many seconds = max(change in x, change in y)
        const [newX, newY] = points[i]
        const time = Math.max(Math.abs(newX - currX), Math.abs(newY - currY))
        // increase totalTime by that amount
        totalTime += time;
        // update current position with new position
        [currX, currY] = points[i]
    }
    // return a totalTime
    return totalTime
};
// console.log(minTimeToVisitAllPoints([[1,1], [3,4], [-1,0]]), 7)
// console.log(minTimeToVisitAllPoints([[3,2], [-2, 2]]), 5)