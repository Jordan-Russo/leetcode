function isSameLanguage(list) {
  return list.every(({language}) => language === list[0].language);
}