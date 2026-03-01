// given a string of characters
// modify and return the string so that each index position with a vowel (case-insensitive) is replaced
// the vowel replacement will be the (1-indexed) position of the vowel
function vowel2index(str) {
  const vowels = new Set('aeiou');
  let translatedString = '';
  for(let i = 0; i < str.length; i++){
    const char = str[i];
    translatedString += vowels.has(char.toLowerCase()) ? String(i + 1) : char;
  }
  return translatedString;
}
// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''