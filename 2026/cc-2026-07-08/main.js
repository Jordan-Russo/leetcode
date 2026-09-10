function nicknameGenerator(name){
  if(name.length < 4){return "Error: Name too short"}
  const isVowel = char => 'aeiou'.includes(char);
  const thirdLetterVowel = isVowel(name[2]);
  return thirdLetterVowel ? name.slice(0, 4) : name.slice(0, 3);
}