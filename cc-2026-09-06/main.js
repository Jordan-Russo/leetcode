function pattern(n){
  const lines = [];
  for(let i = 1; i <= n; i++){
    lines.push(String(i).repeat(i));
  }
  return lines.join('\n');
}