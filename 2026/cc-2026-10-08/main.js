function solve(s) {
  let max = 0;
  let curr = '';
  for(let i = 0; i <= s.length; i++){
    const isStringDigit = s[i] >= '0' && s[i] <= '9';
    // if value is a string digit add it to the end of curr
    if(isStringDigit){curr += s[i]}
    else{
      max = Math.max(max, Number(curr));
      curr = '';
    }
    // if value is not a string digit, convert curr into a number and if larger reassign the max
      // assign curr an empty string value
  }
  return max;
};