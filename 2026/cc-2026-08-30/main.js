function countLanguages(list) {
  const languageFreqCache = {};
  for(const {language} of list){
    languageFreqCache[language] ??= 0;
    languageFreqCache[language]++;
  }
  return languageFreqCache;
}