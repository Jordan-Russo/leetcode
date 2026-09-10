function swap (string) {
  const vowelCaps = {
    a: 'A',
    e: 'E',
    i: 'I', 
    o: 'O',
    u: 'U'
  }
  return [...string].map(char => vowelCaps[char] || char).join('');
}