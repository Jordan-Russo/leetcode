function greetDevelopers(list) {
  list.forEach(list => list.greeting = `Hi ${list.firstName}, what do you like the most about ${list.language}?`);
  return list;
}