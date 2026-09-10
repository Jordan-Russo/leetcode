function disariumNumber(n){
  return String(n).split('').map(Number).reduce((acc, c, i) => acc + c ** (i + 1), 0) === n ? 'Disarium !!' : 'Not !!';
}