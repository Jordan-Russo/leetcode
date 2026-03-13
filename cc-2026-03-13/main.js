function calculate(a, operator, b) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  }
  if(operator in operations){
    const result = operations[operator](a, b);
    return isFinite(result) ? result : null;
  }else{
    return null;
  }
}