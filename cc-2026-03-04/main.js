// given a string of only lower-case letters
// return the string with each letter moved forward 10 positions in the alphabet
  // and cycle if they go past the end
function moveTen(s){
  // create an empty string to hold the result
  let result = '';
  // loop through the string
  for(const letter of s){ 
    // grab the current position of the letter
    const pos = letter.charCodeAt(0) - 97;
    // move the position 10 places forward and cycle it with a modulo if needed
    const newPos = (pos + 10) % 26
    // push the new letter into the empty string
    result += String.fromCharCode(97 + newPos);
  }
  // return the result string
  return result;
}