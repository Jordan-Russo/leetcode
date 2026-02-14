function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  const netTime = start + duration + (tz_to - tz_from);
  return netTime < 0;
}