function insertDash(num) {
  num = num.toString();
  let string = '';
  for(let i = 0; i < num.length; i++){
    // add digit to string
    string += num[i];
    // is current digit and next digit both odd
    if((Number(num[i]) & 1) && (Number(num[i + 1]) & 1)){
      // yes, then also add '-' to string
      string += '-';
    }
  }
  return string;
}