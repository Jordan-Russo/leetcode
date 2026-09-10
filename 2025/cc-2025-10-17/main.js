/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    // find earliest landRideEndTime
    // find the soonest ending water ride that can be done after the land ride has finished
        // has the water ride already started
            // if so, then only evaluate how long the duration is
            // if not, then consider the sum of the duration and wait time
        // keep track of the minimum
    let earliestLandRideFinish = Infinity;
    for(let i = 0; i < landStartTime.length; i++){
        const finishTime = landStartTime[i] + landDuration[i];
        earliestLandRideFinish = Math.min(earliestLandRideFinish, finishTime);
    }
    let waterRideSecondFinish = Infinity;
    for(let i = 0; i < waterStartTime.length; i++){
        const hasStarted = waterStartTime[i] <= earliestLandRideFinish;
        const finishTime = hasStarted ? waterDuration[i] : waterDuration[i] + waterStartTime[i] - earliestLandRideFinish;
        waterRideSecondFinish = Math.min(waterRideSecondFinish, finishTime);

    }
    // find earliest waterRideEndTime
        // find the soonest ending land ride that can be done after the water ride has finished
    // take the minimum of both of these rides
    // return that minimum as the earliest finish time
     let earliestWaterRideFinish = Infinity;
    for(let i = 0; i < waterStartTime.length; i++){
        const finishTime = waterStartTime[i] + waterDuration[i];
        earliestWaterRideFinish = Math.min(earliestWaterRideFinish, finishTime);
    }
    let landRideSecondFinish = Infinity;
    for(let i = 0; i < landStartTime.length; i++){
        const hasStarted = landStartTime[i] <= earliestWaterRideFinish;
        const finishTime = hasStarted ? landDuration[i] : landDuration[i] + landStartTime[i] - earliestWaterRideFinish;
        landRideSecondFinish = Math.min(landRideSecondFinish, finishTime);

    }
    return Math.min(earliestLandRideFinish + waterRideSecondFinish, earliestWaterRideFinish + landRideSecondFinish);
};