function bandNameGenerator(str) {
  const haveSameLetter = str[0].toLowerCase() === str[str.length - 1].toLowerCase();
  return haveSameLetter ? str[0].toUpperCase() + str.slice(1).repeat(2) : `The ${str[0].toUpperCase() + str.slice(1)}`; 
}