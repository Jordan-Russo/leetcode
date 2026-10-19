function minimumSteps(numbers, value){
  const increasing = [...numbers].sort((a,b) => a - b);
  let sum = 0;
  for(let i = 0; i < increasing.length; i++){
    sum += increasing[i];
    if(value <= sum){return i}
  }
}