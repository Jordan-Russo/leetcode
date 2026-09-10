/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
function hardestWorker(n, logs){
    let longestId = Infinity;
    let longestTime = 0;
    let startTime = 0;
    for(const [id, end] of logs){
        const time = end - startTime;
        // check if the time is longer
        if(time > longestTime){
            longestId = id;
        }
        // check if the time is equal
        // and the id is smaller
        if(time === longestTime && id < longestId){
            longestId = id;
        }
        longestTime = Math.max(time, longestTime);
        startTime = end;
    }
    return longestId;
};