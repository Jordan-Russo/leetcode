function hydrate(s) {
  const drinkCount = s.split(' ').map(word => parseInt(word) || 0).reduce((acc, c) => acc + c, 0);
  return `${drinkCount} ${drinkCount > 1 ? "glasses" : "glass"} of water`
}