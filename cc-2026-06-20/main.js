function maxTriSum(numbers){
  const [a,b,c] = [...new Set(numbers)].sort((a,b) => b - a);
  return a + b + c;
}