/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    // store indexes of used baskets
    const usedIndexes = new Set();
    // loop through each fruit
    for(const fruit of fruits){
        for(let i = 0; i < baskets.length; i++){
            const canFit = baskets[i] >= fruit;
            const isOpen = !usedIndexes.has(i);
            if(canFit && isOpen){
                usedIndexes.add(i);
                matched = true;
                break;
            }
        }
    }
    const unmatchedFruits = fruits.length - usedIndexes.size;
    return unmatchedFruits;
        // loop through each basket
            // if basket > fruit and basket available
                // store the index of the basket
                // skip to the next fruit
        // if no basket is found add it to the unmatched count
    // return the unmatched count
};