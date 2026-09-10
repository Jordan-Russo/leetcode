/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    k %= s.length;
    return s.repeat(2).slice(k, k + s.length);
};
// console.log(getEncryptedString("dart", 3), "tdar");
// console.log(getEncryptedString("aaa", 1), "aaa");