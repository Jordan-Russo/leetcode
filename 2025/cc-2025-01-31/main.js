// url: https://leetcode.com/problems/valid-square/
// given 4 coordinates
// return a boolean as to whether or not the 4 points form a square
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
function lengthBetweenPoints([x1,y1], [x2, y2]){
    return Math.sqrt((y2-y1)**2 + (x2-x1)**2)
}
var validSquare = function(p1, p2, p3, p4) {
    // check if there are duplicate points
    const seen = new Set()
    seen.add(String(p1))
    seen.add(String(p2))
    seen.add(String(p3))
    seen.add(String(p4))
    if(seen.size !== 4){return false}
    // square has all sides of equal length
        // choose p1
    const distancesFromP1 = [
        lengthBetweenPoints(p1, p2),
        lengthBetweenPoints(p1, p3),
        lengthBetweenPoints(p1, p4)
    ]
    const minimumDistanceFromP1 = Math.min(...distancesFromP1)
    const maximumDistanceFromP1 = Math.max(...distancesFromP1)
    if(Math.round(maximumDistanceFromP1 * 1000000)/1000000 !== Math.round(minimumDistanceFromP1 * Math.sqrt(2) * 1000000)/1000000){
        return false
    }
    if(distancesFromP1.filter(length => length === minimumDistanceFromP1).length !== 2){return false}
    // find the point furthest from p1
    const furthestPoint = [p2,p3,p4][distancesFromP1.findIndex(distance => distance === maximumDistanceFromP1)]
    if([p1,p2,p3,p4].filter(point => lengthBetweenPoints(furthestPoint, point) === minimumDistanceFromP1).length !== 2){return false}
    return true
            // find the two closest points in distance, and record that distance
                // if not equal to each other return false
        // choose the furthest point from p1
            // find the two closest points in distance
                // if not equal to each other or not equal to the previous two smallest lengths return false
    // square has four 90 degree angles
        // calculate the angle between p1 and the two closest points
        // return whether or not that angle is 90 degrees
};
// Example 1:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: true

// Example 2:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
// Output: false

// Example 3:

// Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
// Output: true
