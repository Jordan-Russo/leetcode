function toTime(seconds) {
  const hours = Math.trunc(seconds / 3600);
  seconds -= hours * 3600;
  const minutes = Math.trunc(seconds / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`
}