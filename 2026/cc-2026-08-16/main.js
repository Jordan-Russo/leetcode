function arrayLeaders(numbers){
  const resultsReverse = [];
  let sum = 0;
  for(let i = numbers.length - 1; i >= 0; i--){
    if(sum < numbers[i]){
      resultsReverse.push(numbers[i]);
    }
    sum += numbers[i];
  }
  return resultsReverse.reverse();
}