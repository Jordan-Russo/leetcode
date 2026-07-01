function isSantaClausable(obj) {
  if(typeof obj?.sayHoHoHo !== 'function'){return false}
  if(typeof obj?.distributeGifts !== 'function'){return false}
  if(typeof obj?.goDownTheChimney !== 'function'){return false}
  return true;
}