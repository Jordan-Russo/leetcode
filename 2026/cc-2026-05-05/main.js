/**
 * @param {number[]} nums
 * @return {number[]}
 */
function countOppositeParity(nums){
    let oddCount = 0;
    let evenCount;
    for(const num of nums){
        if(num & 1){oddCount++}
    }
    evenCount = nums.length - oddCount;
    const result = [];
    for(let i = 0; i < nums.length; i++){
        const isOdd = (nums[i] & 1) === 1;
        if(isOdd){
            result.push(evenCount);
            oddCount--;
        }else{
            result.push(oddCount);
            evenCount--;
        }
    }
    return result;
};