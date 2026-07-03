function solution(start, finish) 
{
  const distance = finish - start;
  return Math.trunc(distance / 3) + (distance % 3);
}