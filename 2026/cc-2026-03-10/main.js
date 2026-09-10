// check if a string has valid spacing
// one space between words no leading or trailing spaces
// split the s by spaces and check that e
function validSpacing(s) {
  if(!s){return true}
  // an empty string is valid
  return s.split(' ').every(word => word);
  // otherwise check all words
}