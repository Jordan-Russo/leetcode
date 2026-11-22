const sum = nums => nums.reduce((acc, c) => acc + c, 0);
function whoseBicycle(diary1, diary2, diary3) {
  const scores = [
    sum(Object.values(diary1)),
    sum(Object.values(diary2)),
    sum(Object.values(diary3))
  ];
  const topScore = Math.max(...scores);
  let minAge = Infinity;
  let target;
  
  for(let i = 0; i < scores.length; i++){
    if(scores[i] === topScore){
      const age = ageTable[['firstSonAge', 'secondSonAge', 'thirdSonAge'][i]]
      if(age < minAge){target = ['first', 'second', 'third'][i]}
      minAge = Math.min(minAge, age);
    }
  }
  return `I need to buy a bicycle for my ${target} son.`;  
  // ageTable to see ages of each son (1,2,3)
}