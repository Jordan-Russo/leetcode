/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function(x, y) {
    const isAliceWinner = (Math.min(x, Math.trunc(y / 4)) & 1) === 1;
    return isAliceWinner ? "Alice" : "Bob";
};