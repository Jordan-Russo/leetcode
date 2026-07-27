function outed(meet, boss){
  let sum = 0;
  let count = 0;
  for(const person in meet){
    sum += meet[person];
    count++;
    if(person === boss){
      sum += meet[person];
    }
  }
  const avg = sum / count;
  return avg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}