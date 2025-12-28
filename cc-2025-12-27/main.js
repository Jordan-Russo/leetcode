/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    const original = n;
    let mirror = 0
    while(n > 0){
        mirror *= 10;
        // if mirror has any values shift them up by 10 (multiply)
        const digit = n % 10;
        n = Math.trunc(n / 10);
        mirror += digit;
        // take the last digit off of n and put it on the mirror
    }
    return Math.abs(original - mirror);
};