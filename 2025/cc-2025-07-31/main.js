/**
 * @param {number[]} digits
 * @return {number}
 */
function totalNumbers(digits){
    const seen = new Set();
    let count = 0;
    for(let i = 0; i < digits.length; i++){
        for(let j = i + 1; j < digits.length; j++){
            for(let k = j + 1; k < digits.length; k++){
                const nums = makeNumbers(digits[i], digits[j], digits[k]);
                for(const num of nums){
                    if(seen.has(num)){continue}
                    seen.add(num);
                    // check if even
                    if(num % 2 === 1){continue}
                    // check if (leading zeros... < 100)
                    if(num < 100){continue}
                    // if neither count it
                    count++;
                }
            }
        }
    }
    return count;
};
function makeNumbers(a,b,c){
    const digits = [];
    digits.push(a * 100 + b * 10 + c);
    digits.push(a * 100 + c * 10 + b);
    digits.push(b * 100 + a * 10 + c);
    digits.push(b * 100 + c * 10 + a);
    digits.push(c * 100 + a * 10 + b);
    digits.push(c * 100 + b * 10 + a);
    return digits;
}