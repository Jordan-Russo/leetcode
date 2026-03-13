function nextHappyYear(year){
  // check if all the digits are distinct
  year++;
  while(true){
    const digits = new Set(year.toString());
    const isDistinct = digits.size === 4;
    if(isDistinct){return year}
    year++; 
  // increment if not
  }
}