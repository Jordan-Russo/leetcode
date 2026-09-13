function unluckyDays(year){
  // start by grabbing the first day of the year
  let day = new Date(year, 0, 1)
  let dayCounter = 0;
  // initialize unlucky count
  let unluckyCount = 0;
  // loop through until the year is no longer that year
  while(day.getFullYear() === year){ 
    // check if the day is a friday
    const isFriday = day.getDay() === 5;
    // check if the day is the 13th day of the month
    const is13thDay = day.getDate() === 13;
    // if both the previous checks are true increment a counter for unlucky days
    if(isFriday && is13thDay){
      unluckyCount++;
    }
    // change the time to the next day
    day = new Date(year, 0, 1 + ++dayCounter);
  }
  
  // return the final unlucky day count
  return unluckyCount;
}