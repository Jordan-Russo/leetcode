/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    // if length < 3, return false
    if(arr.length < 3){return false}
    // initialize peak to be arr.length - 1
    let peakIndex = arr.length - 1;
    // loop forward through the array
    for(let i = 0; i < arr.length; i++){
        const current = arr[i];
        const next = arr[i + 1];
        // if next === current, return false
        if(next === current){return false}
        // if current value > next value 
        if(current > next){
            peakIndex = i;
            break;
        }
            // record current index as peak
            // end loop
        // if next value > current value
        if(next > current){
            peakIndex = i + 1;
        }
            // record next index as peak
    }
    // if peak is 0 or peak is arr.length - 1
    if(peakIndex === 0 || peakIndex === arr.length - 1){return false}
        // return false
    let backPeakIndex = 0;
    // loop backwards, initialize a backPeak at index 0
    for(let i = arr.length - 1; i >= 0; i--){
        // compare the current value with the prev one
        const current = arr[i];
        const previous = arr[i - 1];
            // if equal return false
        if(current === previous){return false}
            // if prev > current, record index as the backPeak
        if(previous > current){
            backPeakIndex = i - 1;
        }
            // if prev is less then current then end loop
        else{
            backPeakIndex = i;
            break;
        }
    }
    // return whether the peak and  backPeak are equal indexes
    return peakIndex === backPeakIndex;
};