var Calculator = {
  average: function(...numbers) {
    if(numbers.length === 0){return 0}
    return numbers.reduce((acc, c) => acc + c, 0) / numbers.length;
  }
};