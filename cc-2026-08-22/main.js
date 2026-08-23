function solution(fullText, search) {
  let count = 0;
  let index = 0;
  while(fullText.indexOf(search, index) !== -1 && index < fullText.length){
    count++;
    index = fullText.indexOf(search, index);
    if(index !== -1){
      index += search.length;
    }
  }
  return count;
}