// given 2 strings of the same length
  // each string contains the characters '+' and '-'
// create a new string that interprets this
  // for each character
    // if '+' and '+' then return another '+'
    // if '-' and '-' return another '-'
    // if '+' and '-' then return 0
// return the resulting string
function neutralise(s1, s2) {
  const reaction = (char1, char2) => char1 === char2 ? char1 : '0'
  let res = ''
  for(let i = 0; i < s2.length; i++){
    res += reaction(s1[i], s2[i])
  }
  return res
}