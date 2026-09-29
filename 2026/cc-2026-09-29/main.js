function removeConsecutiveDuplicates(string) {
  return string.split(' ').filter((word, i, arr) => word !== arr[i - 1]).join(' ');
}