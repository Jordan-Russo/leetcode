function wordSearch(query, seq){
  query = query.toLowerCase();
  const result = seq.filter(word => word.toLowerCase().includes(query));
  if(result.length === 0){result.push('Empty')}
  return result;
}