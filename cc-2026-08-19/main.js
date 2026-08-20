String.prototype.isLetter = function() {
  if(this.length !== 1){return false}
  return (this <= 'z' && this >= 'a') || (this <= 'Z' && this >= 'A');
}