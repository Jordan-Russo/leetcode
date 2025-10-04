/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    const sqrt = Math.sqrt(area);
    let solution = new Array(2);
    for(let i = 1; i <= sqrt; i++){
        const isDivisible = area % i === 0;
        if(isDivisible){
            solution[0] = area / i;
            solution[1] = i;
        }
    }
    return solution;
};