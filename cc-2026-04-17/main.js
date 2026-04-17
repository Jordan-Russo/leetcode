/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
    const redStart = red;
    const blueStart = blue;
    let turnIsRed = red >= blue;
    let count = 0;
    // find the largest integer and start stacking using that swapping each time until you can't
    while(true){
        if(turnIsRed){
            red -= count + 1;
        }else{
            blue -= count + 1;
        }
        if(red < 0 || blue < 0){break}
        count++;
        // alternate turn type
        turnIsRed = !turnIsRed;
    }
    let alternateCount = 0;
    red = redStart;
    blue = blueStart;
    turnIsRed = red >= blue;
    while(true){
        if(!turnIsRed){
            red -= alternateCount + 1;
        }else{
            blue -= alternateCount + 1;
        }
        if(red < 0 || blue < 0){break}
        alternateCount++;
        // alternate turn type
        turnIsRed = !turnIsRed;
    }
    return Math.max(count, alternateCount);
};