String.prototype.vowel = function() {
  return new Set('aeiou').has(this.toLowerCase());
};