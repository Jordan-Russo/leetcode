function findAll(array, n) {
  return array.reduce((acc, c, i) => {
    if(c === n){acc.push(i)}
    return acc;
  }, [])
}