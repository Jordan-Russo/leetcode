function solve(s){
  const isLowerCase = char => char <= 'z' && char >= 'a';
  const isUpperCase = char => char <= 'Z' && char >= 'A';
  const isNumber = char => char <= '9' && char >= '0';
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let numberCount = 0;
  let specialCount = 0;
  for(const char of s){
    if(isLowerCase(char)){lowerCaseCount++}
    else if(isUpperCase(char)){upperCaseCount++}
    else if(isNumber(char)){numberCount++}
    else{specialCount++}
  }
  return [upperCaseCount, lowerCaseCount, numberCount, specialCount];
}