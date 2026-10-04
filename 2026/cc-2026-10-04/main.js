function wallpaper(l, w, h) {
  if(!l || !w || !h){return 'zero'}
  const requiredAmount = 1.15 * (2 * l * h + 2 * w * h);
  const value =  Math.ceil(requiredAmount / 5.2);
  return numbers[value];
}