/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {

    // check that the slope between each point is equal
    const slope = findSlope([coordinates[0][0], coordinates[0][1]],[coordinates[1][0], coordinates[1][1]]);
    // edge cases, vertical slope that's undefined
    if(!isFinite(slope)){
        // check that every slope has a denominater of 0
            // aka if every x value is equal
        const xPos = coordinates[0][0];
        return coordinates.every(([xCoordinate, _]) => xPos === xCoordinate);
    }
    for(let i = 1; i < coordinates.length - 1; i++){
        const newSlope = findSlope(coordinates[i], coordinates[i + 1]);
        if(newSlope !== slope){return false}
    }
    return true;
};
function findSlope([x1, y1], [x2, y2]){
    return (y2-y1) / (x2-x1);
}
// console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), true);
// console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]), false);