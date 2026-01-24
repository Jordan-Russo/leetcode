/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    const array = [...nums];
    let count = 0;
    // while the array is not sorted in non decreasing order
    while(!isSorted(array)){
        let index = -1;
        let value = Infinity;
        // find the first index of a pair of elements with the smallest sum
        for(let i = 0; i < array.length - 1; i++){
            const pairSum = array[i] + array[i + 1];
            if(pairSum < value){
                index = i;
                value = pairSum;
            }
        }
        // combine the elements in the array
        array[index] += array[index + 1];
        array.splice(index + 1, 1);
        count++;
    }
    return count;
};
function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){return false}
    }
    return true;
}