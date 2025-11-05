/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // make a copy of the flower bed, to not mutate the original array
    flowerbed = [...flowerbed];
    let count = 0;
    // loop through the flower bed
    for(let i = 0; i < flowerbed.length; i++){
    // scan for the previous, current, and next positions
        // if prev or next don't exist treat them as 0
        const prev = flowerbed[i - 1] ?? 0;
        const curr = flowerbed[i];
        const next = flowerbed[i + 1] ?? 0;
        // determine if all 3 equal zero, if so place flower down, and record count
        const canBePlanted = prev + curr + next === 0;
        if(canBePlanted){
            flowerbed[i] = 1;
            count++;
        }
        if(count >= n){return true}
    }
    // return false
    return false;
};