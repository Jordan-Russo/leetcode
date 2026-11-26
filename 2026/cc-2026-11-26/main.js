function scale(s, k, n) {
  if(!s){return ''}
  const lines = s.split('\n');
  const scaledLines = [];
  for(const line of lines){
    let newLine = '';
    for(const char of line){
      newLine += char.repeat(k);
    }
    for(let i = 0; i < n; i++){
      scaledLines.push(newLine);
    }
  }
  return scaledLines.join('\n');
}