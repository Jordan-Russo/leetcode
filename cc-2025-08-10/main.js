/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    // initialize array
    const matches = [];
    // loop through the queries
    for(const [qX, qY, r] of queries){
        // initialize a count at 0
        let count = 0;
        // loop through the points
        for(const [pX, pY] of points){
            // determine the distance the point has from the query
            const distance = Math.sqrt((Math.abs(qX-pX))**2 + (Math.abs(qY-pY))**2);
            // if the distance is <= the range of the query then increase count
            if(distance <= r){
                count++;
            }
        }
        // push the final count into the array
        matches.push(count);
    }
    // return the array
    return matches;
};