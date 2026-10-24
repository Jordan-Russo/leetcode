function stringMerge(string1, string2, letter){
  const targetEndIndex = string1.indexOf(letter);
  const targetStartIndex = string2.indexOf(letter);
  return string1.slice(0, targetEndIndex) + string2.slice(targetStartIndex);
}