function spoonerize(words) {
  const [firstWord, secondWord] = words.split(' ');
  return `${secondWord[0] + firstWord.slice(1)} ${firstWord[0] + secondWord.slice(1)}`
}