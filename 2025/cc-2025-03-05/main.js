// url: https://leetcode.com/problems/array-prototype-last/
// write an new method for the array prototype that grabs the last element of an array and returns it or returns -1 for an empty array
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
// console.log([null, {}, 3].last, 3);
// console.log([], -1);