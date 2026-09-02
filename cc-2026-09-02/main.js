const days = {
  Monday: n => n === 12,
  Tuesday: n => n > 95,
  Wednesday: n => n === 34,
  Thursday: n => n === 0,
  Friday: n => (n & 1) === 0,
  Saturday: n => n === 56,
  Sunday: n => Math.abs(n) === 666
}
var AmIAfraid = function(day, num){
  return days[day](num);
}