function findDup( arr ){
  const seen = new Set();
  for(const num of arr){
    if(seen.has(num)){return num}
    seen.add(num);
  }
}