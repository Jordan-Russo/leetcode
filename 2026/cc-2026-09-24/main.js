function capital(capitals){
  return capitals.map(({state, capital, country}) => `The capital of ${state || country} is ${capital}`);
}