// url: https://leetcode.com/problems/goal-parser-interpretation/
// given a string, command
// return a sanitized string that has removed any spare ')' or '(' but replaced any '()' with 'o' instead
/**
 * @param {string} command
 * @return {string}
 */
const interpret = command => command.replaceAll('()', 'o').replaceAll('(al)', 'al')
// console.log(interpret("G()(al)"), "Goal")
// console.log(interpret("G()()()()(al)"), "Gooooal")
// console.log(interpret("(al)G(al)()()G"), "alGalooG")