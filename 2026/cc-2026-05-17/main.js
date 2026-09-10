function lostSheep(friday,saturday,total){
  for(const val of friday){
    total -= val;
  }
  for(const val of saturday){
    total -= val;
  }
  return total;
}