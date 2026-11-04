function makePassword(phrase) {
  const formatChanges = {
    i: '1',
    I: '1',
    o: '0',
    O: '0',
    s: '5',
    S: '5'
  };
  let result = '';
  const firstLetterOfEachWord = phrase.split(' ');
  firstLetterOfEachWord.forEach(word => result = result + (formatChanges[word[0]] || word[0]));
  return result;
}