/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    // create sorted birthYears
    const birthYears = [];
    // create sorted deathYears
    const deathYears = [];
    for(const [birth, death] of logs){
        birthYears.push(birth);
        deathYears.push(death);
    }
    birthYears.sort((a,b) => a - b);
    deathYears.sort((a,b) => a - b);

    // initialize max and curr year and count
    let maxYear;
    let maxCount = 0;
    let currCount = 0;
    // initialize deathIndex at 0
    let deathIndex = 0;
    for(let i = 0; i < logs.length; i++){
        const currYear = birthYears[i];
        currCount++;
        // check for death index
        while(deathYears[deathIndex] <= currYear){
            currCount--;
            deathIndex++;
        }
        // compare current count
            // if higher then max update max year and max count
        if(currCount > maxCount){
            maxYear = currYear;
            maxCount = currCount;
        }
    }
    // return max year
    return maxYear;
};