function password(str) {
  if(str.length < 8){return false}
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  for(const char of str){
    const isChar = char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
    if(isChar){
      if(char === char.toLowerCase()){hasLowerCase = true}
      if(char === char.toUpperCase()){hasUpperCase = true}
    }
    if(char >= '0' && char <= '9'){hasNumber = true}
  }
  return hasUpperCase && hasLowerCase && hasNumber;
}