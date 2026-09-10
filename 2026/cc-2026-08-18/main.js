function evenChars(string) {
  if(string.length < 2 || string.length > 100){return 'invalid string'}
  return [...string].filter((v, i) => i & 1);
}