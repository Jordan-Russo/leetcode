/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    // additional fuel before additional fuel math.floor(mainTank / 5);
    let usedLiters = 0;
    while(mainTank){
        const fuel = Math.min(5, mainTank);
        mainTank -= fuel;
        usedLiters += fuel;
        if(fuel === 5 && additionalTank > 0){
            mainTank++;
            additionalTank--;
        }
    }
    const MPL = 10;
    return usedLiters * MPL;
};