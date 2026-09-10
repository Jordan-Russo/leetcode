/**
 * @param {number[]} nums
 * @return {number}
 */
function countBeautifulPairs(nums){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            let a = nums[i];
            while(a >= 10){
                a = Math.trunc(a / 10);
            }
            const b = nums[j] % 10;
            if(isCoprime(a, b)){
                count++;
            }
        }
    }
    return count;

    function isCoprime(a,b){
        let min = Math.max(a,b);
        for(let i = 2; i <= min; i++){
            const isDivisible = a % i === 0 && b % i === 0;
            if(isDivisible){return false}
        }
        return true;
    }
};