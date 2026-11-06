function crap(garden, bags, cap){
  // remaining space = bags * cap
  let space = bags * cap;
  // scan garden
  for(const row of garden){
    for(const pos of row){
      if(pos === 'D'){return 'Dog!!'}
      if(pos === '@'){space--}
    }
  }
  return space >= 0 ? 'Clean' : 'Cr@p';
    // if dog exists, return 'D'
    // if @, decrease remaining space
  // return 'Clean' if space >= 0
  // otherwise return 'Cr@p'
}