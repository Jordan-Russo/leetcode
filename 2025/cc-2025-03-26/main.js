// url: https://leetcode.com/problems/minimize-string-length/
// given a string
// return the length of the string after shrinking it with the following rules
    // you can choose a character and remove the first character to the left of it that is the same character
    // same thing but remove it to the right of it
// you can repeat the removal process as many times
/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    return new Set(s).size;
};
// Example 1:

// Input: s = "aaabc"

// Output: 3

// Explanation:

//     Operation 2: we choose i = 1 so c is 'a', then we remove s[2] as it is closest 'a' character to the right of s[1].
//     s becomes "aabc" after this.
//     Operation 1: we choose i = 1 so c is 'a', then we remove s[0] as it is closest 'a' character to the left of s[1].
//     s becomes "abc" after this.

// Example 2:

// Input: s = "cbbd"

// Output: 3

// Explanation:

//     Operation 1: we choose i = 2 so c is 'b', then we remove s[1] as it is closest 'b' character to the left of s[1].
//     s becomes "cbd" after this.

// Example 3:

// Input: s = "baadccab"

// Output: 4

// Explanation:

//     Operation 1: we choose i = 6 so c is 'a', then we remove s[2] as it is closest 'a' character to the left of s[6].
//     s becomes "badccab" after this.
//     Operation 2: we choose i = 0 so c is 'b', then we remove s[6] as it is closest 'b' character to the right of s[0].
//     s becomes "badcca" fter this.
//     Operation 2: we choose i = 3 so c is 'c', then we remove s[4] as it is closest 'c' character to the right of s[3].
//     s becomes "badca" after this.
//     Operation 1: we choose i = 4 so c is 'a', then we remove s[1] as it is closest 'a' character to the left of s[4].
//     s becomes "bdca" after this.