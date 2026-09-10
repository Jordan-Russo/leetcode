function removeRotten(bagOfFruits){
  if(!bagOfFruits){return []}
  return bagOfFruits.map(fruit => fruit.replace('rotten', '').toLowerCase());
}