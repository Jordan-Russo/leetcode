function findScreenHeight(width, ratio) {
  const multipliers = ratio.split(':').map(Number);
  return `${width}x${width * multipliers[1] / multipliers[0]}`
}