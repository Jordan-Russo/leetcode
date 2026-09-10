function averages(numbers) {
  const result = [];
  if(!numbers){return result}
  for(let i = 1; i < numbers.length; i++){
    const prev = numbers[i - 1];
    const curr = numbers[i];
    const avg = (prev + curr) / 2;
    result.push(avg);
  }
  return result;
}