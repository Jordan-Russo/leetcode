function addLetters(...letters) {
  let distance = 0;
  for(const letter of letters){
    distance += letter.charCodeAt(0) - 96;
  }
  distance %= 26;
  if(distance === 0){return 'z'}
  return String.fromCharCode(distance + 96);
}