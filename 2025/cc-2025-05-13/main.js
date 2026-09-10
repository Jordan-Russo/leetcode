// given a positive integer, n, that forms a grid of side length n
    // each cell in that grid can hold exactly w, in weight, which is also given, as a positive integer
    // given a maxweight which is the ships limit
// return the number of containers that can be loaded onto the ship
/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
function maxContainers(n, w, maxWeight) {
    // find grid count by doing n**2
    const gridCount = n * n;
    // divide maxWeight by w, to figure out how many grids can be filled, rounded down
    const containerLimit = Math.floor(maxWeight / w);
    // return the minimum of grid count and quotient as the maximum amount of containers
    return Math.min(gridCount, containerLimit);
};
// console.log(maxContainers(2, 3, 15), 4);
// console.log(maxContainers(3, 5, 20), 4);