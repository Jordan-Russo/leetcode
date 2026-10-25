function strCount(obj){
  // initialize a counter at 0
  let counter = 0
  // make a function to handle an object
    // loop through object.values
    // check for other objects, arrays, strings
  function strCountInObj(obj){
    const values = Object.values(obj);
    for(const val of values){
      if(typeof val === 'string'){
        counter++;
      }
      if(Array.isArray(val)){
        strCountInArr(val);
      }
      if(!Array.isArray(val) && val && typeof val === 'object'){
        strCountInObj(val)
      }
      // its not an array but it has a typoef value of 'object'
    }
  }
  function strCountInArr(arr){
    for(const val of arr){
      if(typeof val === 'string'){
        counter++;
      }
      if(Array.isArray(val)){
        strCountInArr(val);
      }
      if(!Array.isArray(val) && val && typeof val === 'object'){
        strCountInObj(val)
      }
    }
  }
  strCountInObj(obj);
  return counter;
  // make a funciton to handle an array
    // loop through array
  // call the obj function on the parameter,
    // as it loops through call the obj function recurisvely if a nested object shows up
    // if an array shows up call the recurisve array function when nested
    // in any case whenever a string value is found as a object.value increment the counter
  // return the counter value
}