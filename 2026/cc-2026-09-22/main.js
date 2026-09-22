function save(sizes, hd) {
  let count = 0;
  for(const size of sizes){
    if(size === 0 || hd >= size){
      count++;
      hd -= size;
    }else{
      return count
    }
    
  }
  return count;
}