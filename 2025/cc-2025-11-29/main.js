/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
// given an array of integers that represent the distance between adjacent locations
    // these locations loop in a circular path like the array
// return the shortest path distance to go from the start to the destination
    // travel in either direction is allowed
var distanceBetweenBusStops = function(distance, start, destination) {
    // find total distance between all stops
    const total = distance.reduce((acc, c) => acc + c, 0);
    // find the distance between one of the directions for start to end
    const min = Math.min(start, destination);
    const max = Math.max(start, destination);
    const pathA = distance.slice(min, max).reduce((acc, c) => acc + c, 0);
    const pathB = total - pathA;
    // calculate the difference to find the other path length
    // return the minimum of the two calculated distances
    return Math.min(pathA, pathB);
};