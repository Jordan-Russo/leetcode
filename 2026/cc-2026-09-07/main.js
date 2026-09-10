function sentence(arrayOfObjects) {
  const wordNumbers = arrayOfObjects.map(obj => [Number(Object.keys(obj)[0]), Object.values(obj)[0]]);
  const sortedWordNumbers = wordNumbers.sort(([numA],[numB]) => numA - numB);
  const sortedWords = sortedWordNumbers.map(([number, word]) => word);
  return sortedWords.join(' ');
}