function countDevelopers(list) {
  return list.filter(({continent, language}) => continent === 'Europe' && language === 'JavaScript').length;
}