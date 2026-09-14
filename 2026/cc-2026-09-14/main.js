var splitInParts = function(s, partLength){
  const parts = [];
  for(let i = 0; i < s.length; i += partLength){
    const part = s.slice(i, i + partLength);
    parts.push(part);
  }
  return parts.join(' ');
}