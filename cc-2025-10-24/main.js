/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    // find all the divisors for the num
    const sqrt = Math.sqrt(num)
    let divisors = new Set();
    for(let i = 1; i <= sqrt; i++){
        const isDivisible = num % i === 0;
        if(isDivisible){
            divisors.add(i);
            divisors.add(num / i);
        }
    }
    divisors.delete(num);
    // sum all of them except the num and then return whether the divisor sum === num
    const sum = [...divisors].reduce((acc, c) => acc + c, 0);
    return sum === num;
};