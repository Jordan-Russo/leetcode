function gimmeTheLetters(sp) {
  const start = sp.charCodeAt(0);
  const end = sp.charCodeAt(2);
  let result = '';
  for(let i = start; i <= end; i++){
    result += String.fromCharCode(i);
  }
  return result;
}