function dotCalculator(equation) {
// find operands and find operator
  const a = equation.indexOf(' ');
  const b = equation.length - equation.indexOf(' ', a + 1) - 1;
// do the calculation (with numbers)
  const operator = equation.split(' ')[1];
  const operators = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '//': (a,b) => Math.trunc(a / b)
  }
  const dotOutput = operators[operator](a,b);
// convert the result into dots format and return
  return '.'.repeat(dotOutput);
}