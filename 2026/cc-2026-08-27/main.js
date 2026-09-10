const scoreChart = {
    accounts: 1,
    finance: 2,
    canteen :10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25
}
function boredom(staff){
  let total = 0;
  for(const member in staff){
    total += scoreChart[staff[member]];
  }
  if(total <= 80){
    return 'kill me now';
  }else if(total < 100){
    return 'i can handle this';
  }
  return 'party time!!';
}