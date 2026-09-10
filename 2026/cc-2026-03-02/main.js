function flyBy(lamps, drone){
  const distanceTraveled = Math.min(drone.length, lamps.length);
  return 'o'.repeat(distanceTraveled) + 'x'.repeat(lamps.length - distanceTraveled);
}