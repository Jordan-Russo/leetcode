/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
function findTheDistanceValue(arr1, arr2, d){
    arr2 = arr2.toSorted((a, b) => a - b);
    return arr1.length - arr1
        .filter(val => {
            const min = val - d;
            const max = val + d
            let left = 0;
            let right = arr2.length;
            while(left < right){
                const middleIndex = Math.floor((left + right)/2);
                const middle = arr2[middleIndex];
                if(middle >= min && middle <= max){return true}
                if(middle < min){left = middleIndex + 1}
                else{right = middleIndex}
            }
            return false;
        })
        .length;
};