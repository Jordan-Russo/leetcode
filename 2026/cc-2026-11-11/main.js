function getIssuer(number) {
  const string = String(number);
  
  const isVisa = string[0] === '4' && (string.length === 13 || string.length === 16);
  const isDiscover = string.slice(0, 4) === '6011' && string.length === 16;
  const isAmex = string[0] === '3' && (string[1] === '4' || string[1] === '7') && string.length === 15;
  const isMastercard = string[0] === '5' && string[1] >= '1' && string[1] <= '5' && string.length === 16;
  
  if(isVisa){return 'VISA'}
  if(isDiscover){return 'Discover'}
  if(isAmex){return 'AMEX'}
  if(isMastercard){return 'Mastercard'}
  return "Unknown";
}