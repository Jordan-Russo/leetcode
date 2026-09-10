function triangle(row) {
  const colorMix = {
    GG: 'G',
    BB: 'B',
    RR: 'R',
    BG: 'R',
    GB: 'R',
    RG: 'B',
    GR: 'B',
    RB: 'G',
    BR: 'G'
  }
  let previousRow = row;
  let currRow = '';
  while(previousRow.length > 1){
    for(let i = 1; i < previousRow.length; i++){
      currRow += colorMix[previousRow[i - 1] + previousRow[i]];
    }
    previousRow = currRow;
    currRow = '';
  }
  return previousRow;
}