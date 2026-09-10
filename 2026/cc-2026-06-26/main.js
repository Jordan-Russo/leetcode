function areaLargestSquare(r) {
  // 4 points, radius wide, 90 degrees between, 90-45-45 rule, sqrt(2) : 1 : 1 for side length
  // r*sqrt(2) * r*sqrt(2);
  return r * r * 2;
}