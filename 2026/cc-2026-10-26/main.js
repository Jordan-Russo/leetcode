function compare(s1, s2) {
  return value(s1) === value(s2);
}
function value(str){
  if(!str){return 0}
  let sum = 0;
  str = str.toUpperCase();
  for(let i = 0; i < str.length; i++){
    const isLetter = str[i] >= 'A' && str[i] <= 'Z';
    if(!isLetter){return 0}
    sum += str.charCodeAt(i);
  }
  return sum;
}