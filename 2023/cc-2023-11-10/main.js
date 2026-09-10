// url: https://leetcode.com/problems/car-fleet/

// Given n, number of cars going to a destination that is given target, number miles away

// You will be given an array that contains distance of target
    // position of each car
    // speed that each car travels
// at every unit of time, the car moves from its position with its speed towards the target, stopping once it reaches it.
// Return the number of groups(fleets) of cars that will exist once they arrive at the target.
// Cars cannot pass and instead form fleets with each other.

// Example 1:

// Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// Output: 3
// Explanation:
// The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
// The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
// The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
// Note that no other cars meet these fleets before the destination, so the answer is 3.
// Example 2:

// Input: target = 10, position = [3], speed = [3]
// Output: 1
// Explanation: There is only one car, hence there is only one fleet.
// Example 3:

// Input: target = 100, position = [0,2,4], speed = [4,2,1]
// Output: 1
// Explanation:
// The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
// Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.

// order all the elements by their position (for both arrays)
// initialize stack for each fleet
// Loop through all the posiions from the ones closest to the target (descending position)
    // if fleet array is empty push current position + speed
    // if not calculate whether the current car will join the fleet of the car in the top of the stack
    // if so continue
    // otherwise push the current car to the top of the stack
// Return the length of the fleet stack


/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, positions, speeds) {
  const fleets = [];
  const cars = [];
  const timeToReachTarget = (position, speed, target) => (target - position) / speed
  const isFleet = ([position1, speed1], [position2, speed2]) => timeToReachTarget(position2, speed2, target) <= timeToReachTarget(position1, speed1, target)
  // pos1 and speed1 are for the car that starts ahead
  positions.forEach((position, i) => cars.push([position, speeds[i]]))
  cars.sort(([posA],[posB]) => posA - posB)
  // now we have a nested datastructure that couples position with speed sorted with ascending position
  if(cars.length > 0){
      fleets.push(cars[cars.length - 1])
  }
  for(let i = cars.length - 2; i >= 0; --i){
      const car = cars[i]
      const [position, speed] = car
      if(!isFleet(fleets[fleets.length - 1], car)){
          fleets.push(car)
      }
  }
  return fleets.length;
};